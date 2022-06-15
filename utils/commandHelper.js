const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "experience",
    description: "My Experience",
  },
  {
    command: "skills",
    description: "My Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "blog",
    description: "Visit my blog",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${project.name
          }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};
const getExperience = async () => {
  const experience = await (await fetch("/api/experience")).json();
  const projectHTML =
    `<h3>My Experience</h3>` +
    experience
      .map(
        (experience) => `<div class="command" style="display:flex; flex-direction:row; align-item:center; justify-content:space-between">
        <div>
        <a href="${experience.link}" target="_blank"><b class="command">${experience.name
        }</b></a> - <b>${experience.position}</b>
        </div>
        <div style="display:flex; flex-direction:row; align-item:center; gap:1rem">
        <p class="meaning">${experience.startDate}</p> -
        <p class="meaning">${experience.endDate}</p>
        </div>
        </div>
        <p>${experience.description}</p>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  // Yash
  about: () => `My name is Utkarsh Chourasia. I am ${getAge(
    "Augest 5, 2001"
  )} and I\'m a DevOps/Backend developer.
    <br/><br/>
    I am a highly organized and detail-oriented student. I love to meet new people, learn and teach new things. An aspiring modern magician, except I transform complicated technical ideas into executable forms
    <br/><br/>
    I prefer programming in Golang and C++. I try to dockerize a lot of my projects. Even my laptop is filled with containers rather than packages.
    <br/><br/>
  `,
  // Yash
  education: () => `I am currently pursuing a bachelor's in Computer Science Engineering from <a href="https://www.medicaps.ac.in/"> Medicaps University</a>.`,
  
  skills: () => `
  <div class="skill"><b>Language</b>: Go, C++, Bash<br /></div>
  <div class="skill"><b>Tools</b>: Docker, AWS, Github Actions, Netify, GNU/Linux<br /></div>
  <br />
  <br />
  <b>Outside Computer Science</b>
  <br />
  <div class="skill"><b>Interests</b>: Books, Music, Finance, Human Psychology<br /></div>
<br />
  `,
  projects: getProjects, 
  experience: getExperience, 
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://dev.to/jammutkarsh", "_blank");
    return "";
  },
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
