import logo from "./assets/icons/logos/logo.svg";
import achievements from "./assets/icons/logos/achievements.svg";
import projects from "./assets/icons/logos/projects.svg";
import school from "./assets/icons/logos/school.svg";
import link from "./assets/icons/logos/link.svg";
import book from "./assets/icons/logos/book.svg";
import volunteer from "./assets/icons/logos/volunteer.svg";

const links = [
  { to: "/", src: logo, desc: "Home" },
  { to: "/achievements", src: achievements, desc: "Achievements" },
  { to: "/portfolio", src: projects, desc: "Portfolio" },
  { to: "/publications", src: book, desc: "Publications" },
  { to: "/school", src: school, desc: "School" },
  { to: "/volunteering", src: volunteer, desc: "Volunteering" },
  { to: "/links", src: link, desc: "Links" },
];

export default links;
