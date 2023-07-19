export const bio = [
  "Hello there &#128075;",
  "I'm Shivam Phutela, Software Developer with 4+ years of experience in developing web backend services in a variety of domains and tech-stacks.",
  "My strongest skills are Node.js and Angular, I am also comfortable with Golang and Python and I am an AWS Enthusiast with 3+ years of experience in dealing with Cloud service providers like AWS, CI and CD cycle."
];

export const skills = [
  {
    skillName: "JavaScript, TypeScript",
    color: "1",
    percentage: "90",
  },
  {
    skillName: "Angular, Rxjs, Ngxs",
    color: "1",
    percentage: "80",
  },
  {
    skillName: "HTML, Bootstrap, Tailwind",
    color: "4",
    percentage: "75",
  },
  {
    skillName: "Docker, Kubernetes",
    color: "4",
    percentage: "80",
  },
  {
    skillName: "React, ReactNative",
    color: "1",
    percentage: "85",
  },
  {
    skillName: "Python, Flask, Django",
    color: "1",
    percentage: "90",
  },
  {
    skillName: "GoLang",
    color: "4",
    percentage: "80",
  },
  {
    skillName: "MongoDB, Cassandra",
    color: "4",
    percentage: "85",
  },
  {
    skillName: "Postgres, MySQL",
    color: "1",
    percentage: "90",
  },
  {
    skillName: "Solidity",
    color: "1",
    percentage: "50",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    // {
    //   projectName: "Web Portfolio",
    //   image: "images/portfolio.png",
    //   summary:
    //     "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
    //   preview: "https://github.com/vinaysomawat/Travographer-Portal",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Nutanix",
    duration: "January 2021 - Present",
    subtitle: "Member of Technical Staff",
    details: [
      "Working as a lead in VPC POD for the accessing of the VM in private network through a SSH VM agent.",
      "Migrated the azure SDK to latest and worked on the SWAP OS feature.",
      "Worked on the Azure VM Swap using a VHD and fixed the snapshot policy for the cloud provider.",
      "Built a scheduler which supports scheduling CALM entities like runbooks and application actions.",
      "Worked on the wait queue implementation of the scheduler using GO.",
      "Create the chronos UI from scratch dealing with multiple new components around the same.",
      "Handled VM OS disk swap for Azure cloud provider.",
      "Developed a log rotation policy for Azure App Clients."
    ],
    tags: ["GoLang", "React", "Python", "Kubernetes", "Docker", "Postgres", "Cassandra", "TypeScript"],
    icon: "heartbeat",
  },
  {
    title: "Delhivery",
    duration: "July 2020 - January 2021",
    subtitle: "Software Developer",
    details: [
      "Worked on the Audit Panel for tracking Waybills and Shipments.",
      "Worked on tracking API for HLD Panel using Geolocation API.",
      "Worked on monitoring the LM Panel for the shipments per day and maintaining sanity in data.",
      "WEX Report Calculation and creating a Ticket for the finance team to handle.",
      "PAYU money integration in CL Panel.",
      "Working on the Payment integration in CL Panel."
    ],
    tags: ["NodeJs", "AWS", "TypeScript", "Angular 6"],
    icon: "qrcode",
  },
  {
    title: "POSist",
    duration: "January 2019 - July 2020",
    subtitle: "Software Developer",
    details: [
      "Collaborated on all stages of the systems development lifecycle, from requirement gathering to production releases.",
      "Developed a new Inventory System Module for the Concept of POSCloud which is very famous in European Countries which involved incubation of Multiple Brands.",
      "Forecasting of item usage over a period of time considering multiple levels of dynamic settings.",
      "Developed a report scheduler panel for clients so they can get desired reports on mail automatically for fixed parameters at a given time."
    ],
    tags: ["AngularJs", "NodeJs", "MongoDB"],
    icon: "group",
  },
];

export const education = [
  {
    title: "B. Tech (Information Technology )",
    duration: "4 Years",
    subtitle: "KIET Group Of Institutions",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Web Development",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 11-12th in Science and Mathematics",
    duration: "",
    subtitle: "Asha Modern School(CBSE)",
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const freelance = [
  {
    title: "Alerzo",
    duration: "January 2021 - May 2023",
    subtitle: "Senior Backend Engineer",
    details: [
      "Developed and implemented soware soluons to enhance the operaons of Alerzo's B2B e-commerce plaorm.",
      "Created a delivery cost estimation system that accurately calculates shipping expenses from the warehouse to customers, optimizing logistics and improving cost efficiency.",
      "Implemented a lending feature, enabling customers to shop on Alerzo by providing them with convenient and secure credit options.",
      "Designed and developed a vendor marketplace, akin to Amazon's marketplace, allowing suppliers to showcase and sell their products on the platform",
      "Currently leading the development of a digital bank within the Alerzo ecosystem, leveraging innovative technologies to provide secure and user-friendly financial services."
    ],
    tags: ["TypeScript", "NodeJs", "MongoDB", "Elastic Search", "Kubernetes", "Docker", "Postgres", "MonStash"],
    icon: "heartbeat",
  },
  {
    title: "Wish",
    duration: "May 2020 - May 2021",
    subtitle: "Senior Full-Stack Engineer",
    details: [
      "Spearheaded last mile Time - to - Delivery(TTD) improvements, optimizing the journey from warehouses to customers, resulting in faster and more efficient deliveries.",
      "Implemented user engagement strategies that led to increased customer retention and satisfaction, enhancing the overall user experience on the platform.",
      "Successfully integrated UTM source tracking, enabling precise identification of user redirects and enhancing marketing insights for data - driven decision- making.",
      "Played a key role in inventory management enhancements, significantly reducing TTD by streamlining the inventory processes.",
      "Contributed to the development and success of Wish Local, facilitating seamless integration of local businesses into the platform, expanding the product reach and community engagement."
    ],
  tags: ["Flask", "Python", "MongoDB", "NodeJs", "ReactNative"],
  icon: "qrcode",
  }
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Stackoverflow",
        link: "https://stackoverflow.com/users/19380949/shivam-phutela",
      },
      {
        text: "GitHub",
        link: "https://github.com/betavirus777",
      }
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      }
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/phutelashiva/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/ShivamPhutela",
      }
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Shivam Phutela.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "betavirus777";
// const mediumUserName = "";

// export const URLs = {
//   mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
// };
