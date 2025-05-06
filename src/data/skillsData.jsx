import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';

export const skillsData = [
  {
    id: 1,
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      {
        name: "React/Next.js",
        level: "Expert",
        percentage: 95
      },
      {
        name: "JavaScript/TypeScript",
        level: "Expert",
        percentage: 90
      },
      {
        name: "HTML/CSS",
        level: "Expert",
        percentage: 95
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        percentage: 85
      },
      {
        name: "Redux/Zustand",
        level: "Advanced",
        percentage: 80
      }
    ]
  },
  {
    id: 2,
    title: "Backend",
    icon: <FaDatabase />,
    skills: [
      {
        name: "Node.js/Express",
        level: "Advanced",
        percentage: 85
      },
      {
        name: "PostgreSQL/MySQL",
        level: "Advanced",
        percentage: 80
      },
      {
        name: "MongoDB",
        level: "Intermediate",
        percentage: 75
      },
      {
        name: "GraphQL",
        level: "Intermediate",
        percentage: 70
      },
      {
        name: "Docker",
        level: "Intermediate",
        percentage: 65
      }
    ]
  },
  {
    id: 3,
    title: "Other Skills",
    icon: <FaTools />,
    skills: [
      {
        name: "Git/GitHub",
        level: "Advanced",
        percentage: 90
      },
      {
        name: "CI/CD",
        level: "Intermediate",
        percentage: 75
      },
      {
        name: "Testing (Jest, Cypress)",
        level: "Advanced",
        percentage: 85
      },
      {
        name: "Agile/Scrum",
        level: "Advanced",
        percentage: 80
      },
      {
        name: "UI/UX Design",
        level: "Intermediate",
        percentage: 70
      }
    ]
  }
];