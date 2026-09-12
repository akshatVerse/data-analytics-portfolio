export function initSkills() {
    const skillClusters = document.querySelectorAll('.skill-cluster');

    skillClusters.forEach(cluster => {
        cluster.addEventListener('mouseenter', () => {
            cluster.classList.add('skill-cluster--active');
        });

        cluster.addEventListener('mouseleave', () => {
            cluster.classList.remove('skill-cluster--active');
        });

        // Stagger animation for tags if they are added dynamically or visible
        const tags = cluster.querySelectorAll('.skill-tag');
        tags.forEach((tag, index) => {
            tag.style.transitionDelay = `${index * 50}ms`;
        });
    });
}
