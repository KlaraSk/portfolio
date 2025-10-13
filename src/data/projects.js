import imgKarlstadsSpelfolk from "../assets/project-images/karlstads-spelfolk-hobbyprojekt.png";
import imgWhereItsAt from "../assets/project-images/react-individual-project.png";
import imgShui from "../assets/project-images/shui-individual-exam-cloud.png";

export const projects = [
  {
    id: "proj-1m9s",
    imgSrc: imgKarlstadsSpelfolk,
    title: "Karlstads Spelfolk",
    description: "Pågående hobbyprojekt! En musikspelare med tillhörande databas innehållandes övningsfiler.",
    descriptionLong: "Work in progress! En samling av spelmanslagets övningsfiler i en databas med tillhörande musikspelare.",
    insights: [
      "MongoDB",
      "Bygga musikspelare",
      "MongoDB Atlas Search",
      "Koppling mellan backend och frontend",
      "Struktur i en databas",
      "Helhetstänk med allt från design till API",
    ],

    categories: ["Work in progress", "Hobbyprojekt", "React", "MongoDb", "Figma"],
    url: "",
  },
  {
    id: "proj-79ja",
    imgSrc: imgShui,
    title: "Shui",
    description: "Individuell examination inom kursen Utveckling och drift i molnmiljö.",
    descriptionLong:
      "Individuell uppgift i kursen Utveckling & driftsättning i molnmiljö. En anslagstavla byggd med React och ett serverless API i AWS.",
    insights: ["Serverless framework", "API Gateway", "DynamoDB", "Lambdafunktioner", "Databasmodellering"],

    categories: ["Molntjänster", "AWS", "DynamoDB", "React", "HTML", "CSS"],
    url: "https://ind-exam-cloud-shui.vercel.app/",
  },
  {
    id: "proj-53ps",
    imgSrc: imgWhereItsAt,
    title: "Where is's @",
    description: "Individuell examination inom kursen React.",
    descriptionLong:
      "Examinerade uppgift i kursen React. En biljettbokningsapp byggd som en SPA. Appen hanterar beställningar och genererar biljetter.",
    insights: [
      "Pages & Components",
      "useState & useEffect",
      "Props",
      "API-hantering",
      "Routing mellan Pages",
      "Avancerad statehantering med Zustand",
    ],
    categories: ["React", "HTML", "CSS"],
    url: "https://react-individual-exam-ks.vercel.app/",
  },
];
