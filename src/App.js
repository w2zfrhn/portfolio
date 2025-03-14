import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./styles.css";

const profile = {
  name: "Farhan",
  bio: "CSE student at AIUB | Passionate about coding & problem-solving",
  skills: ["C", "C++", "Java", "SQL", "Data Structures", "Algorithms"],
  projects: [
    { name: "Car Rental System Database", link: "#" },
    { name: "Dynamic Array in C++", link: "#" },
    { name: "Inventory Management System", link: "#" }
  ],
  contact: {
    github: "https://github.com/w2zfrhn",
    linkedin: "https://linkedin.com/in/w2zfrhn",
    email: "wzullah.farhan@gmail.com"
  }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen p-5 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.img 
          src="/farhan.png"
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-3xl font-bold mt-4">{profile.name}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">{profile.bio}</p>
        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {profile.skills.map(skill => (
            <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {profile.projects.map(project => (
            <div key={project.name} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <a href={project.link} className="text-blue-500">View Project</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-10 text-center">
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="flex justify-center gap-5 mt-3">
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
          <a href={`mailto:${profile.contact.email}`}><Mail size={24} /></a>
        </div>
      </footer>
    </div>
  );
}