import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const experience = [
      {
        name: "Medi-Caps Innovation & Incubation Centre",
        position: "Managment and Marketing Core Member",
        startDate: "January",
        endDate: "December 2021",
        link: "http://miic.medicaps.ac.in/",
        description:
          "Planned, managed, and organized events and programs under MIIC. <br/> Developed the organization structure for efficient working and communication among peers.",
      },
      {
        name: "Stencil Labs",
        position: "UI/UX Designer",
        startDate: "April",
        endDate: "August 2020",
        link: "",
        description:
          "An E-learning platform for students to learn new emerging technologies like AI/ML, Blockchain, IoT, etc. <br/>Designed a functional/responsive website on Figma.",
      },
    ];

    return res.json(experience);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
