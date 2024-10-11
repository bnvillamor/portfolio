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
  sf,
  ai,
  uci,
  aws,
  coursera,
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
    title: "Undergraduate Researcher",
    company_name: "Institute of Transportation Studies",
    icon: uci,
    iconBg: "#383E56",
    date: "October 2023 - June 2024",
    points: [
      "Utilized Google Colab to train machine learning models for denoising vehicular trajectory data",
      "Won Audience Choice Award for Most Innovative Research Project at the BruinAI SoCal AI Responsibility Summit",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "State Farm",
    icon: sf,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Developed an internal-facing application leveraging Grafana and Prometheus to monitor and visualize metrics from 10+ API endpoints",
      "Utilized Docker for containerization, enabling seamless deployment of the application, managed in a ROSA deployment",
      "Won 3rd Place at the 4th Annual Intern DeepRacer Days Competition by fine-tuning a reinforcement learning model to achieve a 00:27.128s lap time on the Stratus Loop racetrack",
    ],
  },
  {
    title: "President",
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
  // {
  //   name: "RFASubBot (In Progress)",
  //   description:
  //     "If there is a sub request made to the bot, it will DM all teachers with a request for them to sub for a specific class & date. If they are able to, the Slack Bot will mark the role as “fulfilled”, and send the user the Zoom Link.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "React",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: rfasubbot,
  //   source_code_link: "https://github.com/JasonD2626/RFASubBot",
  // },
  // {
  //   name: "RecallItAll.ai (In Progress)",
  //   description:
  //     "Collaborating with AWS Senior Solutions Architect to develop a Google Chrome Extension leveraging machine learning algorithms to assist users in recalling and auto-populating input fields from their browsing history, enhancing browsing efficiency and user experience",
  //   tags: [
  //     {
  //       name: "React.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "HTML",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: recallitall,
  //   source_code_link: "https://chrome.google.com/webstore/category/extensions",
  // },
  {
    name: "AWS Certified Cloud Practitioner",
    description:
      "Displays fundamental understanding of IT services and their uses in the AWS Cloud. Demonstrates cloud fluency and foundational AWS knowledge. Shows ability to identify essential AWS services necessary to set up AWS-focused projects.",
    tags: [
      {
        name: "CloudServices",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: aws,
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
    source_code_link: "https://www.coursera.org/account/accomplishments/professional-cert/XGA4448HMJTN",
  },
];

export { services, technologies, experiences, projects };
