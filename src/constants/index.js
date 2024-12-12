import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.jpg"

export const HERO_CONTENT = `I am an enthusiastic Full Stack Developer with beginner to intermediate experience, passionate about creating functional and user-friendly web applications. During my 6-month internship at Why Global Services, I worked on the MERN stack (MongoDB, Express.js, React.js, Node.js), gaining valuable hands-on experience in web development.`;

export const ABOUT_TEXT = `
Here’s a beginner-to-intermediate level version tailored for you:

I am a motivated and versatile full stack developer with a passion for building user-friendly and efficient web applications. My journey in web development began with a 6-month internship at Why Global Services, where I gained hands-on experience working with the MERN stack (MongoDB, Express.js, React.js, Node.js).

I am eager to continuously learn and adapt to new technologies, focusing on delivering solutions that prioritize functionality and user experience. I thrive in collaborative environments and enjoy solving challenges that help improve my skills and contribute to meaningful projects.

Outside of coding, I enjoy exploring emerging technologies, honing my problem-solving abilities, and learning more about the latest trends in web development.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Present",
    role: "InternShip",
    company: "Why Global Services.",
    description: `As a part of a 6-month internship program, I gained practical experience in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). This internship provided hands-on exposure to modern web development practices, from designing intuitive user interfaces to implementing
     efficient backend logic and database management.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "Express.js", "Git","Github"],
  },
  {
    year: " jan 2020 - dec 2021",
    role: "IT Recruitor ",
    company: "Orion Consulting",
    description: `During my time at Orion Consulting, I was responsible for end-to-end recruitment processes, from sourcing and screening candidates to conducting interviews and negotiating salaries. I worked closely with clients to understand their hiring needs and provided them with the best candidates for their roles. This experience strengthened my communication skills and my ability to work under pressure, managing multiple recruitment cycles simultaneously.`,
    technologies: ["Candidate Sourcing", "Interviewing", "Negotiation","Documentation"],
  },
  
];

export const PROJECTS = [
  {
    title: "Nike",
    image: project1,
    description:
      "I developed responsive Nike landing page built with React.js and Tailwind CSS for a sleek, user-friendly design.",
    technologies: ["React","TailwindCSS" ],
  },
  {
    title: "Currency Convertor",
    image: project2,
    description:
      "I Built a responsive currency converter using React.js and Tailwind CSS, integrating the Frankfurter API for real-time exchange rates with features like currency swapping, input validation, and dynamic dropdowns.",
    technologies: ["React","TailwindCSS", "Rest API" ],
  },
  {
    title: "ToDoList",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React.Js","Express.Js","Node.Js","MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "Calculator Task",
    image: project5,
    description:
      "An interactive calculator developed using HTML5, CSS, and JavaScript, providing users with a seamless and responsive interface for basic arithmetic operations.",
    technologies: ["HTML", "CSS", "Javascript.js"],
  },
];

export const CONTACT = {
  address: "2/16, JabaAlaya ST, Sethuvandai, Gudiyatham, Vellore District, TamilNadu ",
  phoneNo: "+91 936 331 4507 ",
  email: "rufus090400@gmail.com",
};
