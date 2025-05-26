import { motion } from "framer-motion";
import { FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiDotnet, SiMysql, SiRabbitmq, SiRedis } from "react-icons/si";

function About() {
    const techIcons = [
        { icon: <FaReact color="#61DBFB" />, name: "React" },
        { icon: <FaAngular color="#DD0031" />, name: "Angular" },
        { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
        { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
        { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
        { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
        { icon: <SiDotnet color="#512BD4" />, name: ".NET" },
        { icon: <SiMysql color="#00758F" />, name: "MySQL" },
        { icon: <SiRabbitmq color="#FF6600" />, name: "RabbitMQ" },
        { icon: <SiRedis color="#DC382D" />, name: "Redis" },
    ];

    return (
        <section className="container my-5 section-fade">
            <motion.h2
                className="text-center display-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Om mig
            </motion.h2>

            <motion.p
                className="lead text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Hej! Jag heter Musa och är en passionerad utvecklare med fokus på både frontend och backend.
                Jag arbetar gärna med moderna tekniker som React, Angular, HTML, CSS och JavaScript.
            </motion.p>

            <motion.p
                className="text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                På backend-sidan använder jag Node.js, .NET, MySQL, RabbitMQ och Redis för att bygga effektiva system.
                Under min LIA skapade jag en avancerad AI-chatbot som hjälper kundservice att hantera kontrakt, svara på frågor och föreslå åtgärder.
            </motion.p>

            <motion.div
                className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
            >
                {techIcons.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        animate={{
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.2,
                            ease: "easeInOut",
                            delay: index * 0.1,
                        }}
                    >
                        <div className="tech-icon">{tech.icon}</div>
                        <small className="d-block mt-1">{tech.name}</small>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <button className="btn btn-custom" onClick={() => window.location.href = '/projects'}>
                    Utforska mina projekt
                </button>
            </motion.div>
        </section>
    );
}

export default About;
