import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "Shared Clipboard",
        description:
          "It's a simple app which let you share text data between computers in CLI.",
        stack: ["Go", "HTTP"],
        link: "https://github.com/JammUtkarsh/shared-clipboard",
      },
      {
        name: "Spell-Ez",
        description:
          "A simple TTS app to improve your spelling, running in CLI",
        stack: ["Python"],
        link: "https://github.com/JammUtkarsh/Spell-Ez-Python",
      },
      {
        name: "Assignment Parser",
        description:
          "A script to parse through terminal sql output to sql commmands.",
        stack: ["Go"],
        link: "https://github.com/JammUtkarsh/assignment-parse",
      },
      {
        name: "Grec",
        description:
          "A data entry app based on CLI.",
        stack: ["Go"],
        link: "https://github.com/JammUtkarsh/grec",
      },
      {
        name: "Go Web Server",
        description:
          "This project serves many purposes. It is getting started guide for GitHub Actions. Using GitHub actions, we are pushing the Docker image built in cloud to Docker Registry. The image is a go web server for static webpages.",
        stack: ["Docker", "Go", "CI/CD", "Github Actions"],
        link: "https://github.com/JammUtkarsh/go-web-server",
      },
      {
        name: "Home Server",
        description:
          "I upgraded my potato PC to my local home server. It's served as a remote development, a media server, a remote backup and many more minor tasks. <i>The reffered link is the site which helped to do all the jobs using Docker</i>",
        stack: ["Ubuntu Server", "Docker"],
        link: "https://fleet.linuxserver.io/",
      },
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
