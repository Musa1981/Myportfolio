// src/components/Home.jsx 
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import profilePic from "../assets/Profile.jpg"; // <--- rätt path

function Home() {
    const navigate = useNavigate();

    return (
        <section className="
      d-flex flex-column flex-md-row 
      align-items-center justify-content-center 
      vh-100 bg-dark text-white px-3
    ">
            <motion.img
                src={profilePic}
                alt="Musa Vakilov"
                className="rounded-circle img-fluid mb-4 mb-md-0 me-md-5"
                style={{
                    width: 300,
                    height: 300,
                    filter: "drop-shadow(0 0 15px rgba(147,51,234,0.6))"
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{
                    y: [0, -10, 0],
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }
                }}
                whileTap={{ scale: 0.9 }}
            />

            <motion.div
                className="text-center text-md-start"
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.3 } }
                }}
            >
                <motion.h1
                    className="display-3 fw-bold mb-4"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1 }
                    }}
                >
                    Hej, jag är Musa Vakilov
                </motion.h1>

                <motion.p
                    className="h4 mb-4"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1 }
                    }}
                >
                    Frontend Developer med passion för React och Angular
                </motion.p>

                <motion.button
                    onClick={() => navigate("/projects")}
                    className="btn btn-lg px-4 py-2 fw-semibold rounded-pill bg-primary text-white border-0 d-flex align-items-center gap-2 mt-3"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1 }
                    }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,123,255,0.6)" }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    Utforska mina projekt <FiArrowRight />
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Home;
