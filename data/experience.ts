export interface ExperienceType {
  id: string;
  company: string;
  role: string;
  workplaceType: string;
  duration: string;
  logo: string;
  bullets: string[];
  isWhiteBgLogo?: boolean;
}

export const experienceData: ExperienceType[] = [
  {
    id: "1",
    company: "Color Papers India Pvt. Ltd.",
    role: "Data Analyst Intern",
    workplaceType: "Hybrid",
    duration: "May 2026 – June 2026",
    logo: "/images/logos/color-papers-india.webp",
    isWhiteBgLogo: true,
    bullets: [
      "Analyzed sales and customer data using SQL and Excel to identify trends and support data-driven business decisions.",
      "Built Power BI dashboards to visualize key sales and customer metrics for clearer reporting.",
      "Translated business requirements into structured analysis and reports, presenting actionable insights to management.",
    ],
  },
  {
    id: "2",
    company: "DJSCE Trinity",
    role: "Volunteer Leadership Team Member",
    workplaceType: "Mumbai, India",
    duration: "2025",
    logo: "/images/logos/djsce-trinity.webp",
    bullets: [
      "Led volunteer teams across security, operations, and event management for the college's annual festivals, handling task allocation and on-ground execution.",
      "Coordinated with multiple teams and resolved operational issues during live events.",
    ],
  },
];
