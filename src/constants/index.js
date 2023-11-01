import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  python,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  rfa,
  ai,
  uci,
  cml,
  coursera,
  recallitall,
  rfasubbot,
  threejs,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Volunteer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Lab Tutor",
    company_name: "UC Irvine",
    icon: uci,
    iconBg: "#383E56",
    date: "April 2023 - June 2023",
    points: [
      "Provided guidance to labs of over 30 students, assisting them with assignments in ICS 31 - Introduction to Programming in Python",
      "Assisted students in debugging complex projects and lab assignments, enhancing their understanding of OOP concepts and problem-solving skills.",
      "Successfully managed the oversight of lab assessments, ensuring a fair evaluation process for students while delivering constructive feedback",
    ],
  },
  {
    title: "Vice President",
    company_name: "AI@UCI",
    icon: ai,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Coordinating team meetings and club projects, such as AWS DeepRacer and Kaggle competitions, to teach members about Python, reinforcement learning, and data science.",
      "Spearheading the planning and execution of diverse club events, ensuring seamless coordination, budget adherence, and maximum member engagement, resulting in 200% increased participation and club growth.",
      "Delegating tasks and responsibilities to board members, fostering a well-structured and efficient organizational system that promotes collaboration and productivity among members.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Robotics For All",
    icon: rfa,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Volunteering at a nonprofit dedicated to providing STEM education to underserved communities, where I leverage my technical expertise to develop innovative backend applications that significantly enhanced operational efficiency,",
      "Developing an efficient Slack messaging bot using Python and Flask to streamline the process of finding substitute instructors, enhancing communication and minimizing downtime",
      "Actively participating in UI/UX discussions and worked collaboratively to enhance website design, focusing on both aesthetic and functional elements.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Cardiovascular Modeling Laboratory",
    icon: uci,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Enhancing existing codebase for image analysis. Collaboratively refining algorithms to extract and quantify vital biological features, driving advancements in cardiovascular modeling",
      "Modernizing the lab’s website by implementing cutting-edge web technologies, including HTML, CSS, and JavaScript, resulting in a more engaging and user-friendly online platform for sharing",
    ],
  },
];

const projects = [
  {
    name: "RFASubBot (In Progress)",
    description:
      "If there is a sub request made to the bot, it will DM all teachers with a request for them to sub for a specific class & date. If they are able to, the Slack Bot will mark the role as “fulfilled”, and send the user the Zoom Link.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: rfasubbot,
    source_code_link: "https://github.com/JasonD2626/RFASubBot",
  },
  {
    name: "RecallItAll.ai (In Progress)",
    description:
      "Collaborating with AWS Senior Solutions Architect to develop a Google Chrome Extension leveraging machine learning algorithms to assist users in recalling and auto-populating input fields from their browsing history, enhancing browsing efficiency and user experience",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: recallitall,
    source_code_link: "https://chrome.google.com/webstore/category/extensions",
  },
  {
    name: "Cardiovascular Modeling Laboratory (In Progress)",
    description:
      "Modernizing the lab’s website by implementing cutting-edge web technologies, resulting in a more engaging and user-friendly online platform for sharing.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
    ],
    image: cml,
    source_code_link: "https://grosberglab.eng.uci.edu/",
  },
  {
    name: "IBM Full Stack Software Developer Certificate",
    description:
    "Hands-on working knowledge with HTML, CSS, JavaScript, GitHub, Node.js, React, Cloud Native practices, DevOps, CI/CD, Containers, Docker, Kubernetes, OpenShift, Python programming, Databases, SQL, NoSQL, Django ORM, Bootstrap, Application Security, Microservices, Serverless computing, and more.",
    tags: [
      {
        name: "CloudServices",
        color: "blue-text-gradient",
      },
      {
        name: "WebDevelopment",
        color: "green-text-gradient",
      },
    ],
    image: coursera,
    source_code_link: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
  },
];

export { services, technologies, experiences, projects };
