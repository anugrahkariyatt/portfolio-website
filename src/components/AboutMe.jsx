import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const leftFade = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const rightFade = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const boxVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="about"
    >
      <motion.h2
        className="section-title text-center mb-12"
        id="about"
        variants={rightFade}
      >
        About <span>Me</span>
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row shadow-lg p-6 rounded-md gap-12"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center gap-4 w-full md:w-1/3"
          variants={leftFade}
        >
          <div className="w-58 h-58 rounded-full overflow-hidden border-[3px] shadow-sm mt-5">
            <img
              src="/Anugrah.jpg"
              alt="Anugrah K"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 w-full md:w-2/3"
          variants={rightFade}
        >
          <motion.p
            className="leading-relaxed text-[1.05rem] text-gray-600"
            variants={rightFade}
          >
            I'm{" "}
            <span className="font-semibold text-gray-900">
              Anugrah Kariyatt
            </span>
            , a MERN Stack Developer from Kozhikode, Kerala,
            with hands-on industry experience gained through a MERN Stack internship at Limizny Technologies Pvt. Ltd.
            I build scalable full-stack web applications using Next.js, React.js, Node.js, Express.js, TypeScript, and MongoDB.
          </motion.p>

          <motion.p
            className="leading-relaxed text-[1.05rem] text-gray-600"
            variants={rightFade}
          >
            I enjoy designing RESTful APIs, implementing secure authentication,
            integrating AI-powered features, and building workflow automation
            using technologies like Gemini API, n8n, Stripe, and Cloudinary.
            My recent work includes an AI-powered Job Application Tracker,
            a Weather Analytics Dashboard, and a Food Delivery application.
          </motion.p>

          <motion.p
            className="leading-relaxed text-[1.05rem] text-gray-600"
            variants={rightFade}
          >
            I'm passionate about backend development and system design,
            and I'm continuously improving my skills to build secure, scalable, and maintainable software.
            I'm currently seeking opportunities where I can contribute
            to real-world products while growing as a Full Stack Developer
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-3 gap-6 mt-4"
            variants={containerVariants}
          >
            {[
              { title: "Degree", text: "BCA (2025)" },
              { title: "Projects", text: "4 Built" },
              { title: "Focus", text: "System Design & Scaling" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={boxVariant}
                whileHover={{ scale: 1.05 }}
                className="p-5 bg-[#f9fafb] shadow-sm rounded-xl text-center  hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
