// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import mealappImg from "../assets/mealapp.jpg";
import chatifyImg from "../assets/chatify.jpg";
import portfolioImg from "../assets/portfolio.jpg";

const projects = [
    {
        title: "MealApp",
        description:
            "En receptsökare som låter användare hitta måltider baserat på ingredienser. Använder TheMealDB API och har en responsiv design med modal-fönster för receptvisning.",
        link: "https://mealappreact1.netlify.app/",
        img: mealappImg,
    },
    {
        title: "Chatify App",
        description:
            "En realtids-chattapp byggd med React och WebSocket. Användare kan skapa konton, logga in och chatta direkt – en modern och snabb kommunikationslösning.",
        link: "https://musa-chatify-app.netlify.app/",
        img: chatifyImg,
    },
    {
        title: "Portfolio",
        description:
            "Ett tidigt projekt från mina första studier inom webbutveckling. Byggt med JavaScript, HTML och CSS för att öva på grundläggande frontend-tekniker.",
        link: "https://vakilov.se/",
        img: portfolioImg,
    },
];

export default function Projects() {
    return (
        <section className="container py-5 px-3 px-md-5">
            <h2 className="text-center display-4 fw-bold mb-5">
                <span className="text-primary">Mina</span> Projekt
            </h2>
            <div className="row g-5 justify-content-center">
                {projects.map((proj, i) => (
                    <motion.div
                        key={i}
                        className="col-12 col-md-6 col-lg-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                        <div className="card shadow-sm border-0 h-100 rounded-4 overflow-hidden project-card bg-light">
                            <div className="position-relative">
                                <img
                                    src={proj.img}
                                    className="card-img-top"
                                    alt={proj.title}
                                    style={{ objectFit: "cover", height: "200px" }}
                                />
                                <motion.div
                                    className="card-overlay d-flex flex-column justify-content-center align-items-center text-white text-center px-3"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h5 className="mb-3">{proj.title}</h5>
                                    <motion.a
                                        href={proj.link}
                                        target={proj.link.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="btn-custom d-inline-flex align-items-center"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Besök <FiArrowRight className="ms-2" />
                                    </motion.a>
                                </motion.div>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{proj.title}</h5>
                                <p className="card-text flex-grow-1">
                                    {proj.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
