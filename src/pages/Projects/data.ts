import brushwatson from "../../images/brushwatson.svg";
import acd from "../../images/acd.svg";
import youthup from "../../images/youthup.svg";
import guesshoot from "../../images/guesshoot.svg";
//import apple from "../../images/apple.png";
import pom from "../../images/pompomodoro.svg";

export type ProjectData = {
  title: string;
  image: string;
  skills: string[];
  link: string;
};

const projectData: ProjectData[] = [
  {
    title: "Real Estate Landing Page",
    image: brushwatson,
    skills: ["HTML", "CSS", "JavaScript", "React", ".NET"],
    link: "https://web.archive.org/web/20211128104758/https://www.brushwatson.com/",
  },
  {
    title: "Real Estate Development Website",
    image: acd,
    skills: ["React", "SCSS", "TypeScript", "Bootstrap"],
    link: "http://acdmail.com/",
  },
  {
    title: "Youth Social Services Nonprofit",
    image: youthup,
    skills: [
      "React",
      "MaterialUI",
      "TypeScript",
      "Progressive Web App",
      "Lighthouse",
    ],
    link: "https://dpcyouthup.org/",
  },
  {
    title: "Classic Game with Wizarding Theme",
    image: guesshoot,
    skills: ["React", "CSS", "TypeScript", "Chatbot", "API", "Animation"],
    link: "https://guess-hoot.herokuapp.com/",
  },
  // {
  //   title: "Clone of Apple Home Page",
  //   image: apple,
  //   skills: ["React", "CSS", "TypeScript", "CSS Animation"],
  //   link: "https://apple-clone-dc458.web.app/",
  // },
  {
    title: "Pomodoro Timer",
    image: pom,
    skills: ["React", "CSS", "Third-Party API", "Custom Hooks"],
    link: "https://pom-pomodoro.web.app/",
  },
];

export default projectData;
