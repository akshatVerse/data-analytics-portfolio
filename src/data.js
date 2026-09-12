// ============================================================
// AKSHAT TRIPATHI — PORTFOLIO DATA
// ============================================================
// ★ ALL personal content lives in this ONE file.
// ★ Edit this file to update your portfolio.
// ★ The website reads from here — no need to touch HTML/CSS.
// ============================================================

export const siteData = {

  // ----------------------------------------------------------
  // PERSONAL INFORMATION
  // ----------------------------------------------------------
  personal: {
    firstName: 'Akshat',
    lastName: 'Tripathi',
    fullName: 'Akshat Tripathi',
    tagline: 'Data Analytics & Machine Learning',
    subtitle: 'Computer Science student exploring data, analytics, visualization, and machine learning to turn raw information into meaningful insights.',
    profileImage: './assets/projects/my image.jpeg',
    availability: 'Available for opportunities',
  },

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    email: 'akshattripathi250904@gmail.com',
    phone: '+91-9335076380',
    linkedin: 'https://www.linkedin.com/in/akshat-tripathi-87a786321/',
    github: 'https://github.com/akshatVerse',
  },

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------
  about: {
    intro: 'I\'m a Computer Science student at Lovely Professional University with a deep curiosity for uncovering patterns in data. My focus lies at the intersection of analytics, visualization, and machine learning — transforming raw datasets into actionable insights.',
    focusAreas: [
      {
        icon: 'chart-bar',
        title: 'Data Analysis & Visualization',
        description: 'Exploring datasets with Pandas, Matplotlib, and Seaborn to reveal meaningful patterns.',
      },
      {
        icon: 'brain',
        title: 'Machine Learning',
        description: 'Building and evaluating predictive models using Scikit-learn and Python.',
      },
      {
        icon: 'magnifying-glass-chart',
        title: 'Exploratory Data Analysis',
        description: 'Statistical analysis, correlation studies, and data-driven hypothesis testing.',
      },
      {
        icon: 'database',
        title: 'Data Management',
        description: 'Querying, transforming, and managing data with SQL, Power Query, and Excel.',
      },
    ],
    interests: ['Data Analytics', 'Machine Learning', 'Data Science', 'Visualization', 'Python'],
  },

  // ----------------------------------------------------------
  // SKILLS
  // ----------------------------------------------------------
  skills: [
    {
      category: 'Programming',
      icon: 'code',
      items: ['C++', 'Python'],
    },
    {
      category: 'Data Analysis & Visualization',
      icon: 'chart-line',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      category: 'Machine Learning',
      icon: 'brain',
      items: ['Scikit-learn'],
    },
    {
      category: 'Tools & Platforms',
      icon: 'tools',
      items: ['MySQL', 'Power BI', 'Excel', 'IDLE'],
    },
    {
      category: 'Soft Skills',
      icon: 'users',
      items: ['Problem-Solving', 'Team Player', 'Quick Learner', 'Adaptability'],
    },
  ],

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  projects: [
    {
      id: 'earthquake-dashboard',
      number: '01',
      title: 'Earthquake Analysis Dashboard',
      date: "Apr' 26",
      tech: ['Power BI', 'Power Query', 'DAX', 'Excel'],
      description: 'Developed an interactive Power BI dashboard to analyze earthquake activity, magnitude, depth, and geographic distribution.',
      problem: 'Earthquake data is vast and unstructured, making it difficult to identify patterns, high-risk regions, and frequency trends without a visual and interactive analysis tool.',
      approach: 'Built a comprehensive Power BI dashboard with interactive KPIs, slicers, charts, and maps to enable multi-dimensional earthquake analysis.',
      highlights: [
        'Cleaned and transformed earthquake datasets using Power Query',
        'Handled missing values, data types, and inconsistencies',
        'Created interactive KPIs, slicers, charts, and maps',
        'Enabled analysis by magnitude, location, depth, and time period',
        'Built a user-friendly dashboard layout to identify earthquake patterns, high-risk regions, and frequency trends',
      ],
      outcome: 'Delivered an interactive dashboard that enables users to explore earthquake data across multiple dimensions — identifying patterns, high-risk zones, and temporal trends at a glance.',
      images: ['./assets/projects/earthquake-dashboard.jpg'],
      github: '',   // Add your GitHub link
      live: '',     // Add live demo link if available
    },
    {
      id: 'heart-disease-analysis',
      number: '02',
      title: 'Heart Disease Analysis',
      date: "Mar' 26",
      tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'IDLE'],
      description: 'Analyzed a Kaggle heart disease dataset using Python and Pandas to identify patterns and factors associated with heart disease.',
      problem: 'Understanding the key characteristics and risk factors associated with heart disease requires systematic data analysis and visualization of complex medical datasets.',
      approach: 'Performed comprehensive exploratory data analysis on a Kaggle heart disease dataset, combining statistical analysis with visual storytelling.',
      highlights: [
        'Analyzed a Kaggle heart disease dataset using Python and Pandas to identify patterns and factors associated with heart disease',
        'Performed data cleaning and preprocessing, including handling missing values, checking data types, and preparing data for analysis',
        'Conducted exploratory data analysis (EDA) using Pandas to examine relationships between patient attributes and heart disease outcomes',
        'Created insightful visualizations and charts using Matplotlib and Seaborn to identify trends, distributions, and correlations',
        'Derived data-driven insights from the analysis to understand key characteristics associated with heart disease',
      ],
      outcome: 'Generated actionable insights into heart disease risk factors through comprehensive EDA, identifying key correlations between patient attributes and disease outcomes.',
      images: [
        './assets/projects/Screenshot 2026-04-20 202200.png',
        './assets/projects/Screenshot 2026-04-20 202236.png',
        './assets/projects/Screenshot 2026-04-20 202300.png',
        './assets/projects/Screenshot 2026-04-20 202458.png',
        './assets/projects/Screenshot 2026-04-20 202735.png',
        './assets/projects/Screenshot 2026-04-20 202818.png',
        './assets/projects/Screenshot 2026-04-20 202852.png',
      ],
      github: '',   // Add your GitHub link
      live: '',     // Add live demo link if available
    },
  ],

  // ----------------------------------------------------------
  // CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    {
      title: 'Oracle Database Foundations Associate',
      issuer: 'Oracle',
      date: "Aug' 26",
      sortOrder: 5,
    },
    {
      title: 'Database Management System Part-1',
      issuer: 'Infosys',
      date: "Aug' 26",
      sortOrder: 4,
    },
    {
      title: 'Programming In Java',
      issuer: 'Neocolab',
      date: "May' 26",
      sortOrder: 3,
    },
    {
      title: 'Programming Using C++',
      issuer: 'Infosys',
      date: "Aug' 25",
      sortOrder: 2,
    },
    {
      title: 'Programming In C',
      issuer: 'Neocolab',
      date: "May' 25",
      sortOrder: 1,
    },
  ],

  // ----------------------------------------------------------
  // ACHIEVEMENTS
  // ----------------------------------------------------------
  achievements: [
    {
      title: 'Bronze Medalist — International Science Olympiad (Mathematics)',
      level: 'School Level',
      date: 'July 2017',
      detail: 'Among top 650 in regional ranking in India',
      medal: 'bronze',
    },
    {
      title: 'Silver Medalist — International Science Olympiad (Science)',
      level: 'School Level',
      date: 'August 2018',
      detail: 'Among top 600 in regional ranking in India',
      medal: 'silver',
    },
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      score: 'CGPA: 7.28',
      period: 'Since July 2024',
      current: true,
    },
    {
      institution: 'Bethany Convent Senior Secondary School',
      location: 'Naini, Prayagraj',
      degree: 'Intermediate',
      field: '',
      score: 'Percentage: 72%',
      period: 'April 2021 – March 2023',
      current: false,
    },
    {
      institution: 'Bethany Convent Senior Secondary School',
      location: 'Naini, Prayagraj',
      degree: 'Matriculation',
      field: '',
      score: 'Percentage: 85%',
      period: 'April 2020 – March 2021',
      current: false,
    },
  ],

  // ----------------------------------------------------------
  // RESUME
  // ----------------------------------------------------------
  resume: {
    path: './assets/resume/Akshat_Tripathi_Resume.pdf',
    label: 'Download Resume',
  },

  // ----------------------------------------------------------
  // SEO
  // ----------------------------------------------------------
  seo: {
    title: 'Akshat Tripathi | Data Analytics & Machine Learning',
    description: 'Portfolio of Akshat Tripathi — Computer Science student specializing in Data Analytics, Visualization, and Machine Learning. Explore projects, skills, and achievements.',
    ogImage: './assets/images/og-image.svg',
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
};
