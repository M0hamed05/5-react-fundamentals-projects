import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const skillsData = [
  {
    skill: "HTML+CSS",
    color: "red",
    level: "beginner",
  },
  {
    skill: "C#",
    color: "dodgerblue",
    level: "intermediate",
  },
  {
    skill: "javaScript",
    color: "yellow",
    level: "beginner",
  },
  {
    skill: "winForms",
    color: "lightgreen",
    level: "intermediate",
  },
  {
    skill: "React",
    color: "lightblue",
    level: "intermediate",
  },
];

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <ImgCard imgLink="s.jpg" />
      <TextCard
        name="mohamed hassanien"
        description="this is a description for the profile,
         should be fill with many data or lorem, 
         but lorem is not working here as it is javascript file not html."
      />
      <SkillsCard />
    </div>
  );
}

//name of it is avatar
function ImgCard(props) {
  return <img className="img-card" alt="imgCard" src={props.imgLink} />;
}

function TextCard(props) {
  return (
    <div className="text-card">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

//should be with skillsList not skills only
//also the data should be received from parent component in objects and send it to skill card
//after => is () not {} for return, if not add the keyword
function SkillsCard() {
  const skills = skillsData;

  return (
    <div className="skills-card">
      {skills.map((skill) => (
        <SkillCard
          color={skill.color}
          skill={skill.skill}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function SkillCard({ color, skill, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {skill}
      {/* <img src={level === "beginner" ? "like.png":"biceps.png"} alt="img" /> */}
      {level === "beginner" && <img src="like.png" />}
      {level === "intermediate" && <img src="biceps.png" />}
      {/* <img src={level === "beginner" && "like.png"} alt="img" /> */}
    </div>
  );
}
