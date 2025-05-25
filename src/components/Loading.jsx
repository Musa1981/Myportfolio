import { motion } from "framer-motion";
import { FaReact, FaAngular, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiDotnet, SiMysql } from "react-icons/si";

function Loading() {
    const icons = [
        { component: <FaReact style={{ color: "#61dafb" }} />, name: "React" },
        { component: <FaAngular style={{ color: "#dd1b16" }} />, name: "Angular" },
        { component: <FaCss3Alt style={{ color: "#264de4" }} />, name: "CSS" },
        { component: <FaHtml5 style={{ color: "#e34c26" }} />, name: "HTML" },
        { component: <SiJavascript style={{ color: "#f0db4f" }} />, name: "JavaScript" },
        { component: <SiDotnet style={{ color: "#512bd4" }} />, name: ".NET" },
        { component: <FaNodeJs style={{ color: "#3c873a" }} />, name: "Node.js" },
        { component: <SiMysql style={{ color: "#00758f" }} />, name: "MySQL" },
    ];

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
            <div className="row gx-4 gy-4 mb-4">
                {icons.map((icon, index) => (
                    <div key={index} className="col-4 col-sm-3 text-center">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            style={{
                                fontSize: "3rem",
                                padding: "1rem",
                                borderRadius: "50%",
                                backgroundColor: "#343a40",
                                cursor: "pointer",
                            }}
                        >
                            {icon.component}
                        </motion.div>

                        <div className="mt-2 small">{icon.name}</div>
                    </div>
                ))}
            </div>
            <motion.p
                className="fs-4 text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                Laddar portfolio...
            </motion.p>
        </div>
    );
}

export default Loading;
