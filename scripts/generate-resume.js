import fs from 'fs';
import path from 'path';

// Helper to create a valid PDF binary with standard fonts
function createSimplePdf(outputPath) {
    const textLines = [
        { text: "AKSHAT TRIPATHI", size: 20, bold: true, dy: 30 },
        { text: "Data Analytics & Machine Learning | B.Tech CSE", size: 11, bold: false, dy: 16 },
        { text: "Email: akshattripathi250904@gmail.com | Phone: +91-9335076380", size: 9, bold: false, dy: 14 },
        { text: "LinkedIn: linkedin.com/in/akshat-tripathi | GitHub: github.com/akshatVerse", size: 9, bold: false, dy: 14 },
        { text: "____________________________________________________________________________________", size: 9, bold: false, dy: 14 },
        
        { text: "TECHNICAL SKILLS", size: 12, bold: true, dy: 22 },
        { text: "- Languages: C++, Python", size: 9, bold: false, dy: 13 },
        { text: "- Data & ML: Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn", size: 9, bold: false, dy: 13 },
        { text: "- Tools & Platforms: MySQL, Power BI, Excel, IDLE", size: 9, bold: false, dy: 13 },
        { text: "- Soft Skills: Problem-Solving, Team Player, Quick Learner, Adaptability", size: 9, bold: false, dy: 13 },

        { text: "PROJECTS", size: 12, bold: true, dy: 20 },
        { text: "1. Earthquake Analysis Dashboard -- Power BI, DAX, Excel (Mar '25)", size: 10, bold: true, dy: 14 },
        { text: "   * Interactive Power BI dashboard analyzing magnitude, depth, and geographic distribution.", size: 8.5, bold: false, dy: 12 },
        { text: "   * Power Query transformations handling missing values and inconsistencies.", size: 8.5, bold: false, dy: 11 },
        { text: "   * Interactive KPIs, slicers, charts, and maps for pattern and frequency analysis.", size: 8.5, bold: false, dy: 11 },

        { text: "2. Heart Disease Analysis -- Python, Pandas, Matplotlib, Seaborn (July '25)", size: 10, bold: true, dy: 14 },
        { text: "   * Exploratory Data Analysis (EDA) on Kaggle dataset investigating cardiovascular indicators.", size: 8.5, bold: false, dy: 12 },
        { text: "   * Data cleaning, type inspection, preprocessing, and statistical distribution modeling.", size: 8.5, bold: false, dy: 11 },
        { text: "   * Visualizations for correlation heatmaps, patient attributes, and risk characteristics.", size: 8.5, bold: false, dy: 11 },

        { text: "EDUCATION", size: 12, bold: true, dy: 20 },
        { text: "Bachelor of Technology - CSE | Lovely Professional University, Punjab", size: 9.5, bold: true, dy: 14 },
        { text: "CGPA: 7.28 | July 2024 - Present", size: 8.5, bold: false, dy: 12 },
        { text: "Intermediate (Class XII) | Bethany Convent Sr. Sec. School, Prayagraj", size: 9.5, bold: true, dy: 13 },
        { text: "Percentage: 72% | 2021 - 2023", size: 8.5, bold: false, dy: 12 },
        { text: "Matriculation (Class X) | Bethany Convent Sr. Sec. School, Prayagraj", size: 9.5, bold: true, dy: 13 },
        { text: "Percentage: 85% | 2020 - 2021", size: 8.5, bold: false, dy: 12 },

        { text: "CERTIFICATIONS", size: 12, bold: true, dy: 20 },
        { text: "- Oracle Database Foundations Associate -- Oracle (Aug '26)", size: 8.5, bold: false, dy: 12 },
        { text: "- Database Management System Part-1 -- Infosys (Aug '26)", size: 8.5, bold: false, dy: 11 },
        { text: "- Programming In Java -- Neocolab (May '26)", size: 8.5, bold: false, dy: 11 },
        { text: "- Programming Using C++ -- Infosys (Aug '25)", size: 8.5, bold: false, dy: 11 },
        { text: "- Programming In C -- Neocolab (May '25)", size: 8.5, bold: false, dy: 11 },

        { text: "ACHIEVEMENTS", size: 12, bold: true, dy: 18 },
        { text: "- Bronze Medalist at School Level: International Science Olympiad (Math) - Top 650 in India (July '17)", size: 8.5, bold: false, dy: 12 },
        { text: "- Silver Medalist at School Level: International Science Olympiad (Science) - Top 600 in India (Aug '18)", size: 8.5, bold: false, dy: 11 },
    ];

    let contentStream = "BT\n";
    let curY = 760;
    
    for (const item of textLines) {
        curY -= item.dy;
        const fontKey = item.bold ? "/F2" : "/F1";
        // Escape special chars in PDF text
        const sanitized = item.text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
        contentStream += `${fontKey} ${item.size} Tf\n`;
        contentStream += `50 ${curY} Td\n`;
        contentStream += `(${sanitized}) Tj\n`;
        contentStream += `-50 -${curY} Td\n`; // reset position
    }
    contentStream += "ET";

    const contentLen = Buffer.byteLength(contentStream);

    const objects = [
        // 1: Catalog
        `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
        // 2: Pages
        `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
        // 3: Page
        `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n`,
        // 4: Contents
        `4 0 obj\n<< /Length ${contentLen} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
        // 5: Font F1 (Helvetica)
        `5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
        // 6: Font F2 (Helvetica-Bold)
        `6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`,
    ];

    let pdf = "%PDF-1.4\n";
    const offsets = [0]; // 0 is dummy for 1-based index

    for (let i = 0; i < objects.length; i++) {
        offsets.push(pdf.length);
        pdf += objects[i];
    }

    const xrefOffset = pdf.length;
    pdf += "xref\n";
    pdf += `0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";
    for (let i = 1; i <= objects.length; i++) {
        const offStr = String(offsets[i]).padStart(10, '0');
        pdf += `${offStr} 00000 n \n`;
    }

    pdf += "trailer\n";
    pdf += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
    pdf += "startxref\n";
    pdf += `${xrefOffset}\n`;
    pdf += "%%EOF\n";

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, pdf, 'binary');
    console.log(`Successfully generated resume PDF at: ${outputPath}`);
}

createSimplePdf('public/assets/resume/Akshat_Tripathi_Resume.pdf');
