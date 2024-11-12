import project1 from "../assets/projects/amazon.jpg";
import project2 from "../assets/projects/sql.jpg";
import project3 from "../assets/projects/fifa.jpg";
import project4 from "../assets/projects/power.jpg";

export const HERO_CONTENT = `I am a dedicated Data Analyst with a strong background in leveraging Python, SQL, Microsoft Power BI, and Excel to deliver actionable insights and drive data-driven decisions. With hands-on experience working with real-time clients, I excel in analyzing complex datasets, creating comprehensive reports, and implementing solutions that address key business challenges. My goal is to use my analytical skills and technical expertise to support business growth and enhance operational efficiency.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile Data Analyst with a passion for deriving actionable insights from complex datasets. With experience in Python, SQL, Microsoft Power BI, and Excel, I specialize in creating detailed reports and implementing data-driven solutions that drive business success. My journey in data analytics began with a keen interest in uncovering patterns and trends, and it has evolved into a career where I continuously seek to learn and adapt to new technologies and methodologies. I thrive in dynamic environments and enjoy solving challenging problems to deliver impactful results. Outside of analytics, I stay engaged with emerging tools and techniques and enjoy contributing to data-related projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Data Analysis and Scrapping",
    company: "INITIATORZ",
    description: `Led a project for a client where I scraped data from the top-ranked SPC flooring companies in Florida. Analyzed and extracted key metrics such as traffic and other critical business insights to support strategic decision-making and enhance market understanding.

`,
    technologies: ["Python", "Beautifulsoup"],
  },
 

];

export const PROJECTS = [
  {
    title: "Data/Statistical Analysis",
    image: project1,
    description:
      "Improved sales forecasting accuracy by 20%, customer satisfaction by 15%, and product tracking through comprehensive data analysis and optimization.",
    technologies: ["Python", "Numpy", "Pandas", "Matplotlib"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/Amazon.ipynb"  
  },
  {
    title: "Data Cleaning in SQL Server",
    image: project2,
    description:
      "Enhanced data accuracy by standardizing formats, resolved missing addresses, and streamlined datasets by updating values and removing redundancies.",
    technologies: ["Microsoft SQL Server"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/House-Data_cleaning_project.sql" 
  },
  {
    title: "Data Analysis/Cleaning",
    image: project3,
    description:
      "Improved data accuracy, uncovered market insights by analyzing player value and wage, and provided actionable team-building insights through attribute comparisons.",
    technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/Fifa.ipynb"  
  },
  {
    title: "Power BI Dashboard",
    image: project4,
    description:
      "Analyzed sales performance with a 0.83% decline in YTD sales and a 4.5% profit increase, revealing a 7.29% drop in quantity sold while maintaining a 5.37% profit margin, enhancing data-driven decision-making.",
    technologies: ["Microsoft Power BI"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/eCommerce.pbix"  
  },
];

export const CONTACT = {
  address: "Islamabd, Pakistan ",
  phoneNo: "+92-3346669318 ",
  email: "usayedpro@gmail.com",
};
