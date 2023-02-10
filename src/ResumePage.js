import { useEffect, useState } from "react";
import ResumeBlock from "./resume page/ResumeBlock";
import ResumePhoto from "./resume page/ResumePhoto";

function ResumePage() {

  const [experienceBlocks, setExperienceBlocks] = useState([
    {
      dates: "November 2020 - Present",
      title: "Freelance Web Developer",
      thirdLine: "",
      listItems: [
        "Communicating with clients",
        "Brainstorming design ideas",
        "Requesting content for website",
        "Using figma for website designs",
        "Coding static and dynamic websites",
        "Making revisions upon clients' requests",
        "Reformatting code to improve performance",
        "Deploying websites"
      ]
    },
    {
      dates: "July 2021 - Present",
      title: "Supervisor",
      thirdLine: "CG Maintenance",
      listItems: [
        "Scheduling special cleaning projects",
        "Making a bi-weekly attendance report",
        "Doing building inspections",
        "Keeping inventory of supplies",
        "Ordering supplies when needed ",
        "supervising seventeen employees",
        "Keeping head office up to date on work matters"
      ]
    }
  ])
  const [educationBlocks, setEducationBlocks] = useState([
    {
      dates: "April 2022 - December 2022",
      title: "React - The complete guide",
      thirdLine: "Online course by Maximillian SCHWARZMULLER",
      listItems: [
        "React state and working with events",
        "Handling state with useContext hook",
        "Controlled vs Uncontrolled components",
        "React router",
        "Working with forms and use input",
        "Functional components and React hooks"
      ]
    },
    {
      dates: "November 2021 - August 2022",
      title: "NodeJS - The complete guide",
      thirdLine: "Online course by Maximillian SCHWARZMULLER",
      listItems: [
        "Express.JS",
        "Dynamic content and templating engines",
        "MongoDB and Mongoose",
        "Authentication and validation",
        "Error handling",
        "REST APIs"
      ]
    },
    {
      dates: "November 2020 - September 2021",
      title: "Complete Web Development Bootcamp",
      thirdLine: "Online course by Dr. Angela Yu",
      listItems: [
        "Advanced HTML, CSS, and Javascript",
        "Backend and frontend web development",
        "Nodejs and Expressjs",
        "MongoDB and Mongoose",
        "React",
        "Deploying websites and web apps"
      ]
    },
    {
      dates: "2004 - 2007",
      title: "Highschool Diploma",
      thirdLine: "George S. Henry Academy",
      listItems: []
    }
  ])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <main className="resume-main">
      <a href="./Pablo_Almonacid_resume.pdf"><img className="button--fixed" src="./images/save_icon.png"></img></a>
      <div className="resume">
      <ResumePhoto />
        <div className="resume__header resume__section">
          <h1 className="resume__header-title">Pablo Almonacid</h1>
          <p>Toronto, ON</p>
          <p>Canada</p>
          <a href="mailto:almonacid.pablo@hotmail.com">Almonacid.pablo@hotmail.com</a>
          <a href="https://linkedin.com/in/almonacid-pablo">linkedin.com/in/almonacid-pablo</a>
        </div>
        <div className="resume__skills resume__section">
          <h2 className="resume__section-title">Skills</h2>
          <ul className="resume__skills-list">
            <li><div className="list-dot"></div>HTML, CSS/SASS, Javascript</li>
            <li><div className="list-dot"></div>Programming fundamentals</li>
            <li><div className="list-dot"></div>MERN stack</li>
            <li><div className="list-dot"></div>Web sockets</li>
            <li><div className="list-dot"></div>Logical thinker and problem solver</li>
            <li><div className="list-dot"></div>Ability to work alone or as part of a team</li>
            <li><div className="list-dot"></div>Excellent communication skills</li>
            <li><div className="list-dot"></div>Fluent in English and Spanish</li>
          </ul>
        </div>
        <div className="resume__objective resume__section">
          <h2 className="resume__section-title">Objective</h2>
          <p>To obtain an entry level position in the web development field and begin my career in a high-level professional environment where I can use code to find creative solutions to everyday problems.</p>
        </div>
        <div className="resume__experience resume__section">
          <h2 className="resume__section-title">Experience</h2>
          {experienceBlocks.map(block => (
            <ResumeBlock 
              key={block.title}
              dates={block.dates}
              title={block.title}
              thirdLine={block.thirdLine}
              listItems={block.listItems}
            />
          ))}
        </div> 
        <div className="resume__education resume__section">
          <h2 className="resume__section-title">Education</h2>
          {educationBlocks.map(block => (
            <ResumeBlock 
              key={block.title}
              dates={block.dates}
              title={block.title}
              thirdLine={block.thirdLine}
              listItems={block.listItems}
            />
          ))}
        </div>
      </div>



      {/* <div class="resume-container">
        <img class="resume-container__img resume-1" src="images/Pablo_Almonacid_resume-1.jpg" alt="resume page one"></img>
        <img class="resume-container__img resume-2" src="images/Pablo_Almonacid_resume-2.jpg" alt="resume page two"></img>
        <div class="resume-container__page-number">
          <div class="page-number__selector"></div>
          <span class="page-number number-active">1</span>
          <span class="page-number">2</span>
        </div>
      </div>
      <div class="resume__buttons">
        <div class="pablo-photo"></div>
        <a class="green-btn resume__button" href="Pablo_Almonacid_resume.pdf" download="Pablo_Almonacid_Resume">Download PDF</a>
        <a class="green-btn resume__button" href="index.html">Back to main page</a>
      </div> */}
    </main>
  )
}


export default ResumePage;