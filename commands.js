const commands = (command) => {
  switch (command) {
    case "help":
      return `Available commands:
            <ul>
              <li>help        </li>
              <li>about        </li>
              <li>skills       </li>
              <li>education    </li>
              <li>projects   </li>
              <li>contact      </li>
              <li>clear        </li>
            </ul>`;
      break;
    case "about":
      return `I am a full-stack developer with a passion for learning. I am currently a 3rd year student, pursuing a B.Tech in Information Tech. I am Web Dev in my GDSC chapter. I am currently seeking a internship or full-time position as a full Stack developer.`;
      break;
    case "skills":
      return `<ul>
      <li>Languages    : C++, Python, JavaScript</li>
      <li>Front-End    : HTML, CSS, React, Svelte</li>
      <li>Back-End     : NodeJs, Express</li>
      <li>DataBase     : MongoDb, PostGres, Redis</li>
      <li>Tools        : Git, Docker</li>
    </ul>`;
      break;

    case "education":
      return `
      <ul>
        <li>B.Tech in Information Technology <span style="color:green;">(IIMT C.O.E) 2021 - 2025(Expected)</span></li>
        <li>High School <span style="color:green;">(Mordern Education Academy) 2018 - 2020</span></li>
      </ul>
      `;
      break;

    case "contact":
      return `<a href="mailto:sohamsarkar59@gmail.com">Email <- Click</a>`;
      break;

    case "socials":
      return `<ul>
        <li><a href="https://github.com/soham0w0sarkar" target="blank">GitHub <- Click</a></li>
        <li><a href="https://www.linkedin.com/in/soham0w0sarkar/" target="blank">LinkedIn <- Click</a></li>
        <li><a href="https://x.com/soham0_0sarkar/" target="blank">Twitter <- Click</a></li>
        <li><a href="https://www.commudle.com/users/soham0w0sarkar" target="blank">Commudle <- Click</a></li>
        </ul>`;
      break;

    default:
      return `Command not found: <span style="color:red">${command}</span>`;
      break;
  }
};

export default commands;
