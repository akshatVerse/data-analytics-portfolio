import http from 'http';
import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
};

const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/') reqUrl = '/index.html';
    
    // Remove leading slash or relative prefix
    const cleanPath = reqUrl.replace(/^\.?\//, '');
    const filePath = path.join(DIST_DIR, cleanPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found: ' + reqUrl);
    }
});

server.listen(4174, async () => {
    console.log('Test server running on port 4174...');

    const routesToTest = [
        '/',
        '/favicon.svg',
        '/assets/images/og-image.svg',
        '/assets/images/profile-placeholder.svg',
        '/assets/projects/earthquake-placeholder.svg',
        '/assets/projects/heart-disease-placeholder.svg',
        '/assets/resume/Akshat_Tripathi_Resume.pdf',
    ];

    // Find JS and CSS in dist/assets
    const assetFiles = fs.readdirSync(path.join(DIST_DIR, 'assets'));
    const jsFile = assetFiles.find(f => f.endsWith('.js'));
    const cssFile = assetFiles.find(f => f.endsWith('.css'));

    if (jsFile) routesToTest.push('/assets/' + jsFile);
    if (cssFile) routesToTest.push('/assets/' + cssFile);

    let allPassed = true;

    for (const route of routesToTest) {
        await new Promise((resolve) => {
            http.get(`http://localhost:4174${route}`, (res) => {
                let data = [];
                res.on('data', chunk => data.push(chunk));
                res.on('end', () => {
                    const buffer = Buffer.concat(data);
                    const status = res.statusCode;
                    const size = buffer.length;
                    
                    if (status === 200 && size > 0) {
                        console.log(`[PASS] ${route} -> 200 OK (${size} bytes)`);
                    } else {
                        console.error(`[FAIL] ${route} -> ${status} (${size} bytes)`);
                        allPassed = false;
                    }
                    resolve();
                });
            }).on('error', (err) => {
                console.error(`[ERROR] ${route} -> ${err.message}`);
                allPassed = false;
                resolve();
            });
        });
    }

    server.close(() => {
        if (allPassed) {
            console.log('\nSUCCESS: All production routes and assets verified 100% working!');
            process.exit(0);
        } else {
            console.error('\nFAILURE: Some routes failed.');
            process.exit(1);
        }
    });
});
