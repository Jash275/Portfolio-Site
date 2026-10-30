export interface EducationType {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  location: string;
  logo: string;
}

export const educationData: EducationType[] = [
  {
    id: "1",
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    degree: "B.Tech in Information Technology (Honors in DevOps)",
    duration: "2023 – 2027",
    score: "GPA: 8.99 / 10.00",
    location: "Mumbai, India",
    logo: "/images/logos/djsce-degree.webp",
  },
  {
    id: "2",
    institution: "SVP Vidyalaya Junior College",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2021 – 2023",
    score: "82.33%",
    location: "Mumbai, India",
    logo: "/images/logos/svp-vidyalaya.webp",
  },
  {
    id: "3",
    institution: "Shantinagar High School",
    degree: "Secondary School Certificate (SSC)",
    duration: "2021",
    score: "87.60%",
    location: "Mumbai, India",
    logo: "/images/logos/shantinagar-high-school.webp",
  },
];
