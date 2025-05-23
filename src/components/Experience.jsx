import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = ({ data, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-3 md:gap-4`}
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00FF7F]/10 rounded-lg flex items-center justify-center overflow-hidden border-2 border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-colors duration-300">
          <img
            src={data.logo}
            alt={`${data.organization} logo`}
            className="w-12 h-12 md:w-16 md:h-16 object-contain p-1"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{data.title}</h3>
        <p className="text-sm md:text-base text-[#00FF7F] mb-1 md:mb-2">{data.organization}</p>
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1.5 md:mb-2">
          <span className="text-xs md:text-sm text-gray-400">{data.duration}</span>
          <span className="text-xs md:text-sm text-gray-400">•</span>
          <span className="text-xs md:text-sm text-gray-400">{data.type}</span>
          <span className="text-xs md:text-sm text-gray-400">•</span>
          <span className="text-xs md:text-sm text-gray-400">{data.location}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">{data.description}</p>
        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 md:px-3 py-0.5 md:py-1 bg-[#00FF7F]/10 text-[#00FF7F] rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        skills: ['Web Development', 'React.js'],
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
        skills: ['Web Development', 'React.js'],
      },
      {
        id: 3,
        title: 'Web Development Core Team Member',
        organization: 'CyberWarriors VITB',
        logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHOm-HIC8BEmA/company-logo_100_100/company-logo_100_100/0/1630628380222?e=1751500800&v=beta&t=--8mrMVlgW4naxNYe6hGEiHakOHCC7PMJ487wdWtQYE',
        duration: 'Nov 2023 - Present',
        location: 'Bhopal, Madhya Pradesh, India',
        type: 'Full-time',
        description: 'Core team member in web development team of cyber warriors club in VIT BHOPAL UNIVERSITY',
        skills: ['Web Development'],
      },
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
        skills: [],
      },
      {
        id: 5,
        title: 'Project Administrator',
        organization: 'GirlScript Summer of Code',
        logo: 'https://media.licdn.com/dms/image/v2/C510BAQGSObrO0QPlMQ/company-logo_100_100/company-logo_100_100/0/1630597186826/girlscriptsoc_logo?e=1751500800&v=beta&t=MI_q6bWFvAqnmc2ql9DBzY940teWm4j3VYypdp5xsDE',
        duration: 'Sep 2024 - Nov 2024',
        location: 'Pune, Maharashtra, India',
        type: 'Hybrid',
        description: 'Selected as Project Admin for Gssoc\'24 Extended 2024 an one month open source contribution program',
        skills: ['Leadership', 'Web Development'],
      },
      {
        id: 6,
        title: 'Open Source Contributor',
        organization: 'GirlScript Summer of Code',
        logo: 'https://media.licdn.com/dms/image/v2/C510BAQGSObrO0QPlMQ/company-logo_100_100/company-logo_100_100/0/1630597186826/girlscriptsoc_logo?e=1751500800&v=beta&t=MI_q6bWFvAqnmc2ql9DBzY940teWm4j3VYypdp5xsDE',
        duration: 'May 2024 - Aug 2024',
        location: 'Remote',
        type: 'Contributor',
        description: '',
        skills: ,
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Experience
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="w-20 md:w-24 h-1 bg-[#00FF7F] mx-auto"
          />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Technical Clubs Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 font-fira">Technical Clubs</h3>
            <div className="space-y-6 md:space-y-8">
              {experienceData.clubs.map((data, index) => (
                <ExperienceCard key={data.id} data={data} isLeft={true} />
              ))}
            </div>
          </div>

          {/* Other Experience Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 font-fira">Other Experience</h3>
            <div className="space-y-6 md:space-y-8">
              {experienceData.other.map((data, index) => (
                <ExperienceCard key={data.id} data={data} isLeft={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 