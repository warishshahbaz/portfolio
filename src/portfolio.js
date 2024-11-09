/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shahbaz",
  title: "Hi all, I'm Shahbaz",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / NextJs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IdQAJbaMSxx3nup3ReFZ_DG-7ed1NUoT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/warishshahbaz",
  linkedin: "https://www.linkedin.com/in/warishshahbaz/",
  gmail: "mdshahbazwarish1996@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "Punjab Technical University",
      logo: require("./assets/images/ptu.jpg"),
      subHeader: "Bachelor of Mechanical Engineering",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in our batch. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Gained a strong foundation in mechanical engineering principles, thermodynamics, and material science. Developed skills in analytical problem-solving and applied engineering knowledge in practical projects."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Zybisys Consulting Services LLP",
      companylogo: require("./assets/images/zybisys.webp"),
      date: "Nov 2022 – Present",
      desc: "Full Stack Developer with a solid foundation in frontend and backend technologies, specializing in delivering scalable and efficient web applications. Currently contributing to innovative projects at Zybisys, where I leverage my expertise in frameworks like React, Node.js, and cloud integration. "
    },
    {
      role: "Full Stack Developer | Internship",
      company: "Newton School",
      companylogo: require("./assets/images/newtonSchool.webp"),
      date: "july 2021 – august 2022",
      desc: "Motivated and skilled full stack developer with hands-on experience in building dynamic, responsive web applications. Proficient in frontend and backend development with a strong grasp of JavaScript, React.js, Node.js, and database management."
    },
    {
      role: "Quality Assurance | Internship",
      company: "Central Coals Field Ltd.",
      companylogo: require("./assets/images/CCL_LOGO2_final.jpg"),
      date: "march 2020 – march 2021",
      desc: "Quality Assurance Intern with hands-on experience at Central Coalfields, focusing on maintaining safety and quality standards in mining operations. Skilled in conducting inspections, identifying process improvements, and ensuring compliance with regulatory guidelines. Demonstrated strong analytical and problem-solving skills in real-world environments"
    },
    {
      role: "Exicutive Leader",
      company: "Imperial management",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2018 – feb 2020",
      desc: "Executive Leader with extensive experience in field marketing, currently leading strategic initiatives at Imperial Management. Proven track record in driving market growth, optimizing field operations, and building high-performing teams. Skilled in analyzing market trends, developing impactful campaigns, and fostering client relationships to exceed business goals."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Screenshot 2024-11-05 180857.png"),
      projectName: "Crypto Dashboard",
      projectDesc:
        "Built a responsive crypto dashboard with React, Chart.js, and Ant Design to display real-time trading data. Integrated dynamic charts and sortable tables for tracking market cap, volume, and price changes, ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://crypoverview.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/impl.png"),
      projectName: "Imperial Mangement",
      projectDesc:
        "Built a full-stack web app for a marketing company, using React and Tailwind CSS for an engaging frontend and Node.js with Express for a secure, data-driven backend. Delivered responsive design, user authentication",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://imperialmanagement.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/pizza.png"),
      projectName: "Pizza Factory",
      projectDesc:
        "Built Pizza Mania, a full-stack e-commerce app for order-to-payment using Next.js, Ant Design, Tailwind CSS, and Redux Toolkit. Enabled a seamless ordering experience with secure checkout and integrated payments.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://imperialmanagement.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React Js",
      subtitle:
        "Awarded a React.js certification, underscoring skills in developing and deploying dynamic, component-driven applications in real-world projects",
      image: require("./assets/images/reactJS.jpg"),
      imageAlt: "reactJS",
      footerLink: [
        {
          name: "Certification",
          url: "https://olympus.mygreatlearning.com/courses/52045/certificate"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Data Structures with Python",
      subtitle:
        "Certified in Data Structures, proficient in arrays, linked lists, stacks, queues, trees, and graphs. Skilled in applying these concepts to create efficient algorithms and enhance software performance",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "data structures with python",
      footerLink: [
        {
          name: "Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Javascript",
      subtitle:
        "Certified in JavaScript, demonstrating proficiency in core JavaScript concepts including functions, closures, asynchronous programming, and DOM manipulation. Skilled in building dynamic web applications",
      image: require("./assets/images/javascript.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.testdome.com/certificates/7d4ddab8dfad49e09e31f5986152aa81"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7488784471",
  email_address: "mdshahbazwarish1996@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
