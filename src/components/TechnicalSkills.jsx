import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaPython, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiPandas, SiCplusplus, SiNumpy, SiMongodb, SiExpress, SiPostman, SiLinux } from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { DiScrum } from 'react-icons/di';
import { useEffect, useState } from 'react';

import { BiData } from 'react-icons/bi';
import { DiScrum } from 'react-icons/di';

const SkillCard = ({ icon: Icon, name, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#00FF7F]/20 hover:border-[#00FF7F]/40 transition-all duration-300 mx-2"
    >
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-3 text-[#00FF7F]">
        <Icon className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <span className="text-white text-xs md:text-sm font-medium">{name}</span>
      <span className="text-[#00FF7F]/60 text-[10px] md:text-xs mt-1">{category}</span>
    </motion.div>
  );
};

const TechnicalSkills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
  { icon: FaPython, name: 'Python', category: 'Programming' },
  { icon: SiPandas, name: 'Pandas', category: 'Data Science' },
  { icon: SiCplusplus, name: 'C++', category: 'Programming' },
  { icon: SiNumpy, name: 'NumPy', category: 'Data Science' },
  { icon: BiData, name: 'Scikit-learn', category: 'Machine Learning' },
  { icon: DiScrum, name: 'Matplotlib', category: 'Data Visualization' },
  { icon: FaGitAlt, name: 'Git & GitHub', category: 'Version Control' },
  { icon: FaCode, name: 'VSCode', category: 'IDE' },
  { icon: SiLinux, name: 'Linux / Bash', category: 'Operating System' },
  
  // New additions below
  { icon: SiPandas, name: 'R Programming', category: 'Data Analysis' },
  { icon: FaJava, name: 'Java', category: 'Programming' },
  { icon: SiFlask, name: 'Flask', category: 'Web Framework' },
  { icon: BiData, name: 'Machine Learning', category: 'AI/ML' },
  { icon: BiData, name: 'Artificial Intelligence', category: 'AI/ML' },
  { icon: BiData, name: 'Data Science', category: 'AI/ML' },
  { icon: BiData, name: 'Data Analytics', category: 'AI/ML' },
  { icon: SiTableau, name: 'Tableau', category: 'Data Visualization' },
  { icon: SiPowerbi, name: 'Power BI', category: 'Data Visualization' },
  { icon: FaDatabase, name: 'Excel', category: 'Data Analysis' },
];


  // Duplicate skills array to create seamless loop
  const duplicatedSkills = [...skills, ...skills];

  // Calculate animation distance based on screen width
  const getAnimationDistance = () => {
    if (windowWidth < 640) return -800; // mobile
    if (windowWidth < 1024) return -1200; // tablet
    return -1500; // desktop
  };

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fira">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-[#00FF7F] mx-auto" />
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            className="flex space-x-2 md:space-x-4"
            animate={{
              x: [0, getAnimationDistance()],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: windowWidth < 640 ? 15 : 20, // Faster on mobile
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="flex-shrink-0">
                <SkillCard {...skill} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;