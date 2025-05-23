import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaCode, FaUserShield, FaAward, FaDownload } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Education Card Component
const EducationCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-4 md:mb-6"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-3 md:p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex items-start space-x-2 md:space-x-3">
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#00FF7F]/60">
            <img
              src={data.logo}
              alt={`${data.institution} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-base md:text-lg font-bold text-white mb-1 font-poppins">
              {data.degree}
            </h3>
            <p className="text-sm md:text-base text-[#00FF7F] font-semibold mb-1 font-poppins">
              {data.institution}
            </p>
            <div className="flex justify-between items-center text-gray-400 text-xs md:text-sm font-fira mb-2">
              <span>{data.duration}</span>
              <span className="text-[#00FF7F]">{data.grade}</span>
            </div>
            {data.details && (
              <ul className="list-disc list-inside text-gray-400 text-xs md:text-sm space-y-1">
                {data.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Experience Card Component
const ExperienceCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-4 md:mb-6"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-3 md:p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#00FF7F]/10 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={data.logo}
              alt={`${data.organization} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-base md:text-lg font-bold text-white mb-1">{data.title}</h3>
            <p className="text-sm md:text-base text-[#00FF7F] mb-1">{data.organization}</p>
            <div className="flex flex-wrap gap-1 mb-2 text-xs md:text-sm">
              <span className="text-gray-400">{data.duration}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.type}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.location}</span>
            </div>
            <p className="text-xs md:text-sm text-gray-400 mb-2">{data.description}</p>
            {data.responsibilities && (
              <ul className="list-disc list-inside text-gray-400 text-xs md:text-sm space-y-1 mb-2">
                {data.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            )}
            {data.skills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Certification Card Component
const CertificationCard = ({ data }) => {
  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'github':
        return <FaGithub className="w-5 h-5" />;
      case 'postman':
        return <SiPostman className="w-5 h-5" />;
      case 'girlscript':
        return <FaCode className="w-5 h-5" />;
      default:
        return <FaAward className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-4"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="text-[#00FF7F] mt-1">
            {getIcon(data.type)}
          </div>
          <div className="flex-grow">
            <h3 className="text-md font-bold text-white">{data.title}</h3>
            <div className="flex flex-wrap items-center text-xs space-x-2 mb-2">
              <span className="text-[#00FF7F]">{data.organization}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{data.role}</span>
            </div>
            {data.details && (
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {data.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-6"
    >
      <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-4 shadow-lg hover:shadow-[#00FF7F]/20 transition-all duration-300">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
            <div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-[#00FF7F] text-sm">{project.role} | {project.type}</p>
            </div>
            <div className="flex space-x-2">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF7F]"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF7F]"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Resume Component
const ResumeNew = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Vellore Institute of Technology',
      logo: '/logos/vit.png',
      degree: 'BTech, Computer Science',
      duration: 'Aug 2023 – Jul 2027',
      grade: '8.36 CGPA',
      details: []
    },
    {
      id: 2,
      institution: 'Central Board of Secondary Education',
      logo: '/logos/cbse.png',
      degree: '12th Senior Secondary, Science',
      duration: 'Mar 2022 – May 2023',
      grade: '82.4%',
      details: []
    },
    {
      id: 3,
      institution: 'Central Board of Secondary Education',
      logo: '/logos/cbse.png',
      degree: '10th Secondary, Science',
      duration: 'Mar 2020 – Apr 2021',
      grade: '86%',
      details: []
    },
  ];

  const experienceData = {
    clubs: [
      {
        id: 1,
        title: 'Technical Team Core Member',
        organization: 'Ecell, VIT Bhopal',
        logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEAfG-5C8Lv6Q/company-logo_100_100/B4DZVXqxtwHAAQ-/0/1740932588580?e=1751500800&v=beta&t=CAOpIIZT85xsld2u06xPQ8n7W9hnqfXRvxCxVK-DU6U',
        duration: 'Nov 2024 - Present',
        location: 'Bhopal, Madhya Pradesh, India',
        type: 'Full-time',
        description: 'Technical Team Core Member in E-Cell of VIT Bhopal University',
        responsibilities: [
          'Managing and maintaining the E-Cell website and digital platforms',
        ],
        skills: ['Web Development', 'React.js', 'Leadership', 'Event Management']
      },
      {
        id: 2,
        title: 'Technical Team Core Member',
        organization: 'Blockchain Club VITB',
        logo: 'https://media.licdn.com/dms/image/v2/D560BAQHXXK4kWZV6RQ/company-logo_100_100/company-logo_100_100/0/1719432963317/blockchain_club_vitb_logo?e=1751500800&v=beta&t=ZgAW3Sif-CgK5arXDWl5If033uCEXsX5LZcm_Qz8LEM',
        duration: 'Oct 2024 - Present',
        location: 'Bhopal, Madhya Pradesh, India',
        type: 'Full-time',
        description: 'Core team member in Technical team of Blockchain club in VIT BHOPAL UNIVERSITY',
        responsibilities: [
          'Developing blockchain-based projects and solutions',
          'Managing club\'s technical infrastructure and resources'
        ],
        skills: ['Web Development', 'React.js', 'Blockchain', 'Technical Leadership']
      }
    ],
    other: [
      {
        id: 4,
        title: 'Program Coordinator',
        organization: 'Social Winter of Code (SWOC)',
        logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEc5uOgkKlDvQ/company-logo_100_100/company-logo_100_100/0/1694778514503/socialwinterofcode_logo?e=1751500800&v=beta&t=_CV93zwkL-sN0oYqzjJ0reOH-20k__3uD2Xp3gNBirw',
        duration: 'Jan 2025 - Mar 2025',
        location: 'India',
        type: 'Internship',
        description: 'Selected for the Coordinator with Social Winter of Code (SWoC) for a duration of three months.',
        responsibilities: [
          'Managing and coordinating open source projects',
          'Mentoring participants and providing technical guidance',
        ],
        skills: ['Project Management', 'Open Source', 'Leadership', 'Technical Mentoring']
      },
      {
        id: 5,
        title: 'Project Administrator',
        organization: 'GirlScript Summer of Code',
        logo: 'https://media.licdn.com/dms/image/v2/C510BAQGSObrO0QPlMQ/company-logo_100_100/company-logo_100_100/0/1630597186826/girlscriptsoc_logo?e=1751500800&v=beta&t=MI_q6bWFvAqnmc2ql9DBzY940teWm4j3VYypdp5xsDE',
        duration: 'Sep 2024 - Nov 2024',
        location: 'Pune, Maharashtra, India',
        type: 'Hybrid',
        description: "Selected as Project Admin for Gssoc'24 Extended 2024 an one month open source contribution program",
        responsibilities: [
          'Reviewing and merging pull requests',
          'Coordinating with project mentors and contributors',
        ],
        skills: ['Leadership', 'Web Development', 'Git', 'Project Management']
      }
    ]
  };

  const certifications = [
    {
      id: 1,
      title: 'Web Development',
      organization: 'Girlscript Open Source Program',
      date: 'April 2024',
      role: 'Contributor',
      type: 'girlscript',
      details: [
      ]
    },
    {
      id: 2,
      title: 'Postman API Fundamentals',
      organization: 'Postman',
      date: 'July 2024',
      role: 'Expert',
      type: 'postman',
      details: [
      ]
    },
    {
      id: 3,
      title: 'GitHub Foundations',
      organization: 'GitHub',
      date: 'June 2024',
      role: 'Learner',
      type: 'github',
      details: [
      ]
    },
    {
      id: 4,
      title: 'Project Administration',
      organization: 'Girlscript Open Source Program',
      date: 'October 2024',
      role: 'Admin',
      type: 'girlscript',
      details: [
      ]
    },
  ];

  const projects = [
    {
      title: "100 Days 100 Web Projects",
      role: "Fullstack Developer",
      type: "Open Source | Personal",
      description: "A challenge-based project where 100 unique web projects were developed in 100 days to enhance frontend and backend skills.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Vercel"],
      github: "https://github.com/dhairyagothi/100_days_100_web_project",
      live: "https://100-days-100-web-project.vercel.app",
    },
    {
      title: "Waste Sort AI",
      role: "ML Model Development / Backend",
      type: "Group Project | AI-based",
      description: "AI-powered waste classification system using real-time object detection and ML model integration.",
      techStack: ["Python", "YOLOv8", "Streamlit", "React.js", "Flask"],
      github: "https://github.com/dhairyagothi/wastesort-ai-deployment",
      live: "https://waste-sortai.vercel.app",
    },
    {
      title: "Station Saarthi",
      role: "Fullstack Developer",
      type: "Smart India Hackathon | Gov PS",
      description: "A smart navigation system for railway stations designed to guide passengers in real-time.",
      techStack: ["React.js", "Node.js", "Google Maps API"],
      github: "https://github.com/dhairyagothi/StationGuide",
      live: "https://station-guide.vercel.app",
    },
    {
        title: "Samvidhan Path",
        role: "Fullstack Developer",
        type: "Group Project | Civic Education",
        description: "Interactive and educational website to understand the Indian Constitution through a gamified interface.",
        techStack: ["React.js", "Tailwind", "Framer Motion", "Node.js"],
        github: "https://github.com/dhairyagothi/samvidhan--path",
        live: "https://samvidhan-path.vercel.app",
      },
      {
        title: "Swasthya Saarthi",
        role: "Backend Developer",
        type: "Hackathon | HealthTech",
        description: "A healthcare accessibility platform simplifying digital health for remote areas and common users.",
        techStack: ["Node.js", "Express", "MongoDB", "Tailwind", "React.js"],
        github: "https://github.com/dhairyagothi/swasthya-saarthi",
        live: "https://swasthya-saarthi.vercel.app",
      }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="resume" className="pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.h2
            variants={containerVariants}
            className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-fira"
          >
            Resume
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-20 md:w-24 h-1 bg-[#00FF7F] mx-auto"
          />
        </motion.div>

        {/* Education Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Education
          </h3>
          <div className="space-y-3 md:space-y-4">
            {educationData.map((edu) => (
              <EducationCard key={edu.id} data={edu} />
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} data={cert} />
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Projects
          </h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Experience
          </h3>
          
          {/* Technical Clubs */}
          <div className="mb-8">
            <h4 className="text-base md:text-lg font-semibold text-white mb-4 font-fira">
              Technical Clubs
            </h4>
            <div className="space-y-4">
              {experienceData.clubs.map((exp) => (
                <ExperienceCard key={exp.id} data={exp} />
              ))}
            </div>
          </div>
          
          {/* Other Experience */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-4 font-fira">
              Other Experience
            </h4>
            <div className="space-y-4">
              {experienceData.other.map((exp) => (
                <ExperienceCard key={exp.id} data={exp} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-fira border-b border-[#00FF7F]/20 pb-2">
            Achievements
          </h3>
          <div className="bg-[#121212] backdrop-blur-sm border border-[#00FF7F]/20 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <FaAward className="text-[#00FF7F] w-5 h-5" />
                  <h4 className="text-white font-semibold text-base">GitHub Contributions</h4>
                </div>
                <p className="text-gray-400">Ranked 64th in GirlScript Summer of Code 2024 among 1000+ contributors</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <FaCode className="text-[#00FF7F] w-5 h-5" />
                  <h4 className="text-white font-semibold text-base">LeetCode Problem Solving</h4>
                </div>
                <p className="text-gray-400">Solved 450+ problems on LeetCode, focusing on data structures and algorithms</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <div className="mt-8 md:mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/Resume.pdf';
            }}
            className="px-4 md:px-6 py-2 md:py-3 border-2 border-[#00FF7F] text-[#00FF7F] rounded-md hover:bg-[#00FF7F] hover:text-[#121212] transition-colors duration-300 flex items-center space-x-2 font-fira text-sm md:text-base"
          >
            <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
            <span>Download CV</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ResumeNew; 