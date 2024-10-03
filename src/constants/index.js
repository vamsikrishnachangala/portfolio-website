import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cplusplus,
    python,
    postgresql,
    bootstrap,
    docker,
    tensorflow,
    keras,
    pytorch,
    matplotlib,
    pandas,
    numpy,
    scikitlearn,
    restapi,
    neural,
    seaborn,
    ford,
    accenture,
    ualbany,
    facemask,
    request,
    mall,
    inventory
} from "../assets/icons";

export const skills = [
    
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
     {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
     {
        imageUrl: restapi,
        name: "REST API",
        type: "REST API",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
   
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSql",
        type: "Database",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: numpy,
        name: "NumPy",
        type: "Data Analysis",
    },
    
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Data Analysis",
    },
     {
        imageUrl: matplotlib,
        name: "Matplotlib",
        type: "Plotting",
    },
    
    {
        imageUrl: seaborn,
        name: "Seaborn",
        type: "Plotting",
    },
    {
        imageUrl: scikitlearn,
        name: "Scikit-learn",
        type: "Machine Learning",
    },
    {
        imageUrl: tensorflow,
        name: "TensforFlow",
        type: "Neural Networks",
    },
    
    {
        imageUrl: keras,
        name: "Keras",
        type: "Neural Networks",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Neural Networks",
    },
    {
        imageUrl: neural,
        name: "Neural Networks",
        type: "Neural Networks",
    }


];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Ford Motor Company",
        icon: ford,
        iconBg: "#accbe1",
        date: "August 2021  - February 2022",
        points: [
            " Worked in Ford's Global Data Insights and Analytics department, focusing on workload distribution across fault check stations for optimal vehicular management and system efficiency.",
            " Architected and implemented backend functionality with Node.js, Express.js, and MongoDB, using RESTful APIs for scalable, data-optimized solutions",
            "Enhanced front-end development with React.js, ensuring a responsive and user-centric interface.",
            "Utilized SonarQube for continuous inspection, improving code coverage and addressing vulnerabilities.",
            " Collaborated with cross-functional teams for seamless backend-frontend integration, ensuring reliable system performance."
        ],
    },
    {
        title: "Advanced Application Engineering Analyst",
        company_name: "Accenture Solutions",
        icon: accenture,
        iconBg: "#c5aae6",
        date: "February 2022 - December 2022",
        points: [
            "Extracted and processed large datasets using Apache Kafka, Spark, and Hadoop to gain insights from users’ browsing history, age, income, and demographics.",
            "Developed machine learning algorithms with TensorFlow, Keras, Scikit-learn, and PyTorch, achieving high accuracy in predicting user preferences. Increased user engagement and click-through rates through customized advertisements, improving advertiser ROI.",
            "Collaborated with multidisciplinary teams to fully integrate the recommendation system. Periodically refined the system based on feedback and evolving user metrics",
            "Worked closely with clients to ensure alignment with project goals and provided consistent updates.",
        ],
    },
    {
        title: "Computer Science Teaching Assistant",
        company_name: "University at Albany, SUNY",
        icon: ualbany,
        iconBg: "#fae682",
        date: "Jan 2024 - Present",
        points: [
            "Assisted in course instruction for Algorithms and Data Structures (Jan 2024 – May 2024), grading assignments, providing constructive feedback.",
            "Held weekly office hours and Zoom sessions to clarify complex algorithms and data structures. Developed supplementary materials and practice problems to reinforce key concepts",
            "Currently supporting the Data Mining course (August 2024 – Present) by teaching core principles, evaluating assignments, and ensuring fair grading.",
            "Addressing student inquiries through one-on-one sessions and group discussions while collaborating with instructors to stay updated on curriculum changes and provide consistent support.",
        ],
     },
    // {
    //     title: "Computer Science Teaching Assistant",
    //     company_name: "University at Albany, SUNY",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vamsikrishnachangala',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vamsi-krishna-changala-b32a751a0/',
    }
];

export const projects = [
    {
        iconUrl: facemask,
        theme: 'btn-back-red',
        name: 'Real-Time Face Mask Detection Using CNN with TensorFlow and OpenCV',
        description: 'Developed a CNN with TensorFlow and OpenCV, achieving 90% accuracy in mask detection.Implemented real-time classification for MASKED or UNMASKED individuals in video streams from security cameras.',
        link: 'https://github.com/vamsikrishnachangala/Deep-Learning',
    },
    {
        iconUrl: request,
        theme: 'btn-back-orange',
        name: 'Reliable File Transfer System with Caching Using TCP and Stop-and-Wait Protocols',
        description: 'Developed a file transfer system featuring client-server-cache architecture, enabling reliable upload and download of files using TCP and custom stop-and-wait protocols. The system optimizes file retrieval with caching and handles large files with reliable data transmission, ensuring efficiency and integrity. Evaluated performance using Wireshark, analyzing overall delay and throughput.',
        link: 'https://github.com/vamsikrishnachangala/RemoteFileTransferWithCache/tree/main',
    },
    {
        iconUrl: request,
        theme: 'btn-back-yellow',
        name: 'Client-Server Encode Decode with Error Detection and Correction',
        description: 'Developed a client-server system using CRC and Hamming codes for error detection and correction. It replaces lowercase vowels with uppercase vowels and calculates the sum of digits in the input data. The system is built with TCP socket communication and uses multithreading to handle tasks like vowel replacement and digit sum calculation. The server processes client requests and returns the corrected data. It showcases error-handling techniques in C, including single-bit error correction with Hamming codes.',
        link: 'https://github.com/vamsikrishnachangala/CRC-Hamming-Socket-ClientServer',
    },
    {
        iconUrl: mall,
        theme: 'btn-back-blue',
        name: 'Comprehensive Mall Management System with Real-Time Operations',
        description: 'Developed a Java-based Mall Management System using Spring Boot and PostgreSQL, integrating features like parking reservations, movie ticketing, and online shopping to streamline operations and reduce human interaction. The system, hosted on AWS for scalability, effectively addressed crowd-related concerns during the COVID-19 pandemic.',
        link: 'https://github.com/vamsikrishnachangala/Mall-Management-System',
    },
    {
        iconUrl: inventory,
        theme: 'btn-back-black',
        name: 'Inventory Management System with MERN Stack',
        description: 'Developed a full-stack Inventory Management Application using the MERN stack, enabling secure and personalized user experiences for inventory management. Leveraged Docker for containerization and deployed the application on AWS EC2, ensuring scalability and reliability.',
        link: 'https://github.com/vamsikrishnachangala/Inventory-Management',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];