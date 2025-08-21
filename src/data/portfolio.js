// Portfolio data for Sachin S. Saha
import chatapp from '../assets/chatapp.png'
export const portfolioData = {
  personal: {
    name: "Sachin S. Saha",
    title: "MERN Stack Developer",
    bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating scalable applications and bringing ideas to life through clean, efficient code.",
    email: "sachinsaha628@gmail.com",
    phone: "+91-8999960742",
    location: "India",
    image: "/api/placeholder/400/400" // Placeholder for profile image
  },

  social: {
    github: "https://github.com/Sachin-Saha",
    linkedin: "https://linkedin.com/in/sachin-saha",
    twitter: "https://twitter.com/sachinsaha628",
    portfolio: "https://sachinsaha.dev"
  },

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "⚛️" },
      { name: "JavaScript", level: "Advanced", icon: "🟨" },
      { name: "HTML5", level: "Expert", icon: "🔶" },
      { name: "CSS3", level: "Advanced", icon: "🎨" },
      { name: "Tailwind CSS", level: "Advanced", icon: "💨" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "🟢" },
      { name: "Express.js", level: "Advanced", icon: "⚡" },
      { name: "MongoDB", level: "Intermediate", icon: "🍃" },
      { name: "SQL", level: "Intermediate", icon: "🗄️" }
    ],
    tools: [
      { name: "Git", level: "Advanced", icon: "📝" },
      { name: "JWT", level: "Intermediate", icon: "🔐" },
      { name: "OAuth", level: "Intermediate", icon: "🔑" },
      { name: "bcrypt", level: "Intermediate", icon: "🛡️" },
      { name: "Figma", level: "Basic", icon: "🎯" },
      { name: "Context API", level: "Advanced", icon: "⚛️" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Real-Time Chat App",
      description: "A full-featured real-time chat application with modern UI and advanced features",
      longDescription: "Built a comprehensive chat application using the MERN stack with Socket.io for real-time communication. Features include user authentication, private messaging, group chats, and responsive design.",
      image: chatapp,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
      features: [
        "Real-time messaging with Socket.io",
        "Typing indicators and message status",
        "Seen/delivered message indicators", 
        "User authentication with JWT",
        "Group chat functionality",
        "Responsive design for all devices",
        "Message encryption and security"
      ],
      github: "https://github.com/Sachin-Saha/chat-app",
      demo: "https://chat-app-three-sigma-52.vercel.app/login",
      category: "Full Stack",
      featured: true
    },
   

  

  ],

  experience: [
    {
      id: 1,
      company: "NextIn Technologies",
      role: "Web Development Intern",
      duration: "Jun 2024 - Aug 2024",
      type: "Internship",
      location: "Remote",
      description: "Gained hands-on experience in full-stack development and collaborative software development practices.",
      responsibilities: [
        "Developed responsive web applications using React.js and modern JavaScript",
        "Collaborated with senior developers on MERN stack projects",
        "Implemented RESTful APIs using Node.js and Express.js",
        "Worked with MongoDB for database design and optimization",
        "Participated in code reviews and agile development processes",
        "Contributed to improving application performance and user experience",
        "Learned industry best practices for version control with Git"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "JavaScript"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "RTMNU (Rashtrasant Tukadoji Maharaj Nagpur University)",
      duration: "2022 - 2026",
      status: "Graduating in May 2026",
      gpa: "8.2/10",
      location: "Nagpur, India",
      relevant_courses: [
        "Data Structures and Algorithms",
        "Database Management Systems", 
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems"
      ]
    }
  ],

  achievements: [
    "Built 10+ web applications using MERN stack",
    "Contributed to open-source projects on GitHub",
    "Completed advanced React.js certification",
    "Maintained 95%+ code quality standards during internship",
    "Successfully deployed applications on cloud platforms"
  ]
};

export default portfolioData;