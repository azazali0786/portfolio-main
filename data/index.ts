import { url } from "inspector";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
];

export const testimonials = [  
  {
    quote:
      "Working with Azaz was a great experience. He delivered our AliveMilk multivendor system—including the user app, delivery app, admin panel, and seller panel—with professionalism and strong technical skill. His clear communication and dedication made the entire development process smooth. I highly recommend him.",
    name: "Mahraj Ali",
    title: "Director of DMAK Agriculture Private Limited",
    img: "/maharaj.jpg",
  },
  {
    quote:
      "Azaz delivered a complete custom solution for our tyre management system, including the dealers app, admin app, web admin panel, and company portfolio website. His work was efficient, well-structured, and aligned perfectly with our business needs. I appreciate his dedication and smooth communication throughout the project.",
    name: "Mo. Rizwan",
    title: "Director of Romsons Enterprises",
    img: "/rizwan.jpg",
  },
  {
    quote:
      "Working with Azaz was a great experience. He delivered our AliveMilk multivendor system—including the user app, delivery app, admin panel, and seller panel—with professionalism and strong technical skill. His clear communication and dedication made the entire development process smooth. I highly recommend him.",
    name: "Mahraj Ali",
    title: "Director of DMAK Agriculture Private Limited",
    img: "/maharaj.jpg",
  },
  {
    quote:
      "Azaz delivered a complete custom solution for our tyre management system, including the dealers app, admin app, web admin panel, and company portfolio website. His work was efficient, well-structured, and aligned perfectly with our business needs. I appreciate his dedication and smooth communication throughout the project.",
    name: "Mo. Rizwan",
    title: "Director of Romsons Enterprises",
    img: "/rizwan.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "firebase.",
    img: "/firebase.svg",
    nameImg: "/firebaseName.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mobile App Developer",
    desc: "Experienced in building high-performance Android and iOS applications using Flutter with clean architecture and scalable UI.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer",
    desc: "Develop responsive and modern web applications using React, Next.js, and Flutter Web with optimized performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Custom Software Developer",
    desc: "Build tailored digital solutions for businesses, including admin panels, dashboards, management systems, and automation tools.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Hosting & Maintenance",
    desc: "Provide hosting setup, deployment, regular updates, and long-term maintenance to ensure apps and websites run smoothly.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/azazali0786",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/AzazAli48774070",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://linkedin.com/in/azaz-ali-abc",
  },
];
