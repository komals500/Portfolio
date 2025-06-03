import './Portfolio.css';
import { motion } from 'framer-motion';
import Header from "../Components/Header";
import { handleScroll } from "../Components/Header"
import Footer from '../Components/Footer';
import Truworth from "../assests/images/logo.svg"
import TruworthWebsite from "../assests/images/truworth-website.jpg"
import ThewellnessCorner from "../assests/images/the-wellness-corner.jpg"
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons"
import {Divider} from "antd";
import Picture from "../assests/images/profile.jpg"
import About from "../assests/images/about.jpg"
import { useState, useEffect } from 'react';

const Profile = () => {

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const homeSection = document.getElementById("/home");

        if (!homeSection) {
            setShowScrollButton(true); // show button if #home missing
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If #home is visible, hide button; if not visible, show button
                setShowScrollButton(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(homeSection);

        return () => observer.disconnect();
    }, []);

    const skills = [
        { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Sass/Scss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Storybook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Ant Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" }
    ];

    const experiences = [
        {
            title: "Software Development",
            duration: "June 2023 to Present",
            responsibilities: [
                "Developed and maintained responsive user interfaces using React.Js, Next.Js, HTML5 and Tailwind Css, resultin in: Improved user engagement on key pages and successfull launch of several new features.",
                "Updated old code base to modern standards successfully reducing operating costs by approximately 10-15% and enhancing applicaiton stability.",
                "Utilized javascript (ES6+) for implementing features and handling data using RESTful APIs, optimizing data fetching process.",
                "Collaborated effectively within an agile framework, participating in sprint planning and daily stand-ups."
            ],
        },
        {
            title: "Software Development Internship",
            duration: "Nov 2022 to May 2023",
            responsibilities: [
                "Developed foundational web pages and components using semantic HTML, Css and Javascript.",
                "Gained hands-on experience with React Js by contributing to small features.",
                "Assisted the development team, learning about Git version control and basic API integration.",
            ],
        },
    ];

    const workTags = [
        { name: "React", url: "https://reactjs.org" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Typescript", url: "https://www.typescriptlang.org" },
        { name: "Tailwindcss", url: "https://tailwindcss.com" },
        { name: "Figma", url: "https://www.figma.com" },
        { name: "Storybook", url: "https://storybook.js.org" },
        { name: "Git", url: "https://git-scm.com" },
        { name: "antd", url: "https://ant.design/" }
    ];

    return (
        <>
            <Header handleScroll={handleScroll} />
            <motion.section
                id='/home'
                className="profile-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="profile-left">
                    <h1 >Hi, I’m komal <span role="img" aria-label="wave">👋</span></h1>
                    <p>
                        I’m a higly skilled Front-End developer (React.js & Next.js) with 2 Years of experience in Web Application Development,
                        specializing in building responsive user interfaces and optimizing front -end performance. Proven ability to create
                        engaging user experiences and contribute effectively in Agile teams. proficient in React.Js, Javascript(ES6+), HTML5, CSS3, Tailwindcss,
                        Sass/Scss, Redux, context API , Restful APIs, Unit Testing and Git Workflow
                    </p>
                    <p><strong>Location:</strong> Jaipur, Rajasthan</p>
                    <div className='logos' style={{ display: "flex", gap: "1rem", marginTop: "1rem", fontSize: "1.5rem", cursor: "pointer" }}>
                        <a href="https://github.com/komals500" aria-label="GitHub" style={{ color: "inherit", textDecoration: "none" }}><GithubOutlined /></a>
                        <a href="https://www.linkedin.com/in/komal-saini-739038221/" aria-label="Dribbble" style={{ color: "inherit", textDecoration: "none" }}><LinkedinOutlined /></a>
                    </div>
                </div>  

                <div className="profile-right">
                    <img
                        src={Picture}
                        alt="Profile"
                        className="profile-img"
                    />
                </div>
            </motion.section>

            <motion.section id='/about' className="about-me-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >

                <p className="section-label">About me</p>

                <div className="about-me-wrapper">
                    <div className="about-me-image">
                        <img
                            src={About}
                            alt="About Me"
                        />
                    </div>
                    <div className="about-me-content">
                        <h2>Curious about me? Here you have it:</h2>
                        <p>
                            I’m a passionate, <strong> Self-Proclaimed Developer</strong> who specializes in Front-end development (React.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p>
                            I began my journey as a web developer in 2022, and since then, I’ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my thirties, 2 years after starting my web development journey, I’m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Tailwindcss and much more.
                        </p>
                        <p>
                            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        </p>
                        <p>Finally, some quick bits about me:</p>
                        <ul className="quick-bits-list">
                            <li>B.Tech in Computer Science Engineering</li>
                            <li>Full-time Software Developed</li>
                            <li>Front-End Developer</li>
                            <li>Backend-End Developer (Learning Phase)</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            <section className="skills-section">
                <p className="section-label">Skills</p>
                <p className="skills-intro">
                    The skills, tools and technologies I am really good at:
                </p>
                <div className="skills-section__icons">
                    {skills.map(({ name, icon }) => (
                        <div key={name} className="skills-section__icon-wrapper">
                            <img src={icon} alt={name} className="skills-section__icon" />
                            <p className="skills-section__icon-label">{name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id='/experience' className="experience-section">
                <p className="section-label">Experience</p>
                <p className="experience-intro">
                    Here is a quick summary of my most recent experiences:
                </p>

                {experiences.map(({ title, duration, responsibilities }, index) => (
                    <div className="experience-card" key={index}>
                        <div className="experience-logo">
                            <img src={Truworth} alt="Company Logo" />
                        </div>
                        <div className="experience-details">
                            <div className='experience-header'>
                                <h3>{title}</h3>
                                <div className="experience-duration">{duration}</div>
                            </div>
                            <ul>
                                {responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>

            <motion.section className="work-section" id='/work'>
                <p className="section-label">Work</p>

                <div className="work-card">
                    <div className="work-image">
                        <a href="https://www.thewellnesscorner.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={ThewellnessCorner}
                                alt="Fiskil"
                            />
                        </a>
                    </div>
                    <div className="work-content">
                        <h3>The Wellness Corner</h3>
                        <p>
                            Developed and implemented responsive front-end web pages for a comprehensive wellness plateform, focusing on: enhansing user experience and data presentation.
                        </p>
                        <p>
                            Integrated various restful APIs using Axios to fetch and display dynamic data, enhansing user experienceand improving: data loading speed and reliability.
                        </p>
                        <p>
                            Collaborating on building user interfaces for specific section of the website, contributing to the successful launch of the user dashboard and content display section.
                        </p>
                        <p>
                            And a bullet point about a specific technical chellage you faced and how you solved it, potentially related to performance or cross-browser compatibility,
                        </p>
                        <div className="work-tags">
                            {workTags.map(({ name, url }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-tag"
                                >
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="work-card"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="work-content">
                        <h3>Truworth Wellness</h3>
                        <p>
                            Build a complete, responsive website form the ground up, ensuring optimal viewing across all devices and achieving seamless user experience on both desktop and mobile plateforms.
                        </p>
                        <p>
                            Developed key components and pages, focusing on clean code and maintainable strucure, leading to: easier future updates and scalability.
                        </p>
                        <p>
                            Contributd to the development of CRM and Admin Panels, creating user-friendly interfaces for managing dataand content, streamiling: internal data management and content updated.
                        </p>
                        <p>
                            Integrated necessary RESful APIs to power dynamic features within the website and administrative panels, ensuring seamless data flow for: user management and content display functions.
                        </p>
                        <div className="work-tags">
                            {workTags.map(({ name, url }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-tag"
                                >
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="work-image">
                        <a href="https://www.truworthwellness.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={TruworthWebsite}
                                alt="Fiskil"
                            />
                        </a>
                    </div>
                </div>
            </motion.section>

            <Divider type='horizontal' className='divider' style={{margin:0}}/>

            {/* Scroll to top button */}

            {showScrollButton && (
                <button
                    className="top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{
                        position: "fixed",
                        right: "20px",
                        bottom: "40px",
                        padding: "10px 15px",
                        fontSize: "16px",
                        borderRadius: "19px",
                        border: "none",
                        backgroundColor: "#222",
                        color: "#fff",
                        cursor: "pointer",
                        zIndex: 1000,
                    }}
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}

            <Footer id="/contact" />
        </>
    );
};

export default Profile;