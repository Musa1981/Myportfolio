import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section className="position-relative">
            {/* Bakgrundsanimation */}
            <div className="background-animation"></div>

            <motion.section
                className="container py-5 text-center custom-gradient rounded shadow position-relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    className="display-5 fw-bold mb-3 text-white"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Kontakta mig
                </motion.h2>

                <motion.p
                    className="lead mb-4 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Skicka gärna ett mejl till&nbsp;
                    <motion.a
                        href="mailto:musa.vakilov@yahoo.com"
                        className="text-decoration-none fw-semibold text-warning"
                        whileHover={{ scale: 1.1 }}
                    >
                        musa.vakilov@yahoo.com
                    </motion.a>
                </motion.p>

                <motion.div
                    className="d-flex justify-content-center gap-4 fs-1 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <motion.a
                        href="https://github.com/Musa1981"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white icon-rotate"
                        whileHover={{ scale: 1.3, color: "#6e5494" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/musa-vakilov-47b1392a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white icon-rotate"
                        whileHover={{ scale: 1.3, color: "#0e76a8" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                </motion.div>
            </motion.section>
        </section>
    );
}

export default Contact;
