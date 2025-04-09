import project1 from "../assets/projects/fifa.jpg";
import project2 from "../assets/projects/amazon.jpg";
import project3 from "../assets/projects/power.jpg";
import project4 from "../assets/projects/sql.jpg";

export const HERO_CONTENT = `I’m a data analyst who loves finding hidden insights in data even as a hobby, whether it’s out of curiosity or to help businesses make better decisions. I’m skilled in Python, SQL, Power BI, and Excel, and I focus on spotting trends, solving problems, and providing insights that often go unnoticed. I enjoy taking complex data and making it simple for everyone to understand, so the key metrics are crystal clear.`;

export const ABOUT_TEXT = `I’m a Data Analyst who loves digging into data and uncovering the stories it tells. I’m skilled in Python, SQL, Power BI, and Excel, and I focus on turning complex data into clear insights that drive business success and can be understood by everyone. I got into data because I’ve always been a technical person curious about finding patterns and trends in about everything, and now it’s turned into a career where I’m constantly learning and staying on top of new tools and techniques. I enjoy solving tough problems and delivering results that actually make a difference.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Dynamic Interactive Dashboard (Demo)",
    company: "CarTrust KSA",
    description: `I developed a dynamic pricing dashboard for car analysis, an Engine Power dashboard, and a Top Manufacturers Leaderboard with interactive filters. I also created a Scatter dashboard to compare acceleration and engine power. The full mobile-friendly app, built with Dash and Plotly, was deployed on Render, with DuckDB integration to optimize query speed.`,
    technologies: ["Python", "Dash", "Render", "DuckDb", "Polars", "Pandas", "Plotly"],
    link: "https://drive.google.com/file/d/1gpH4Vy1Xa9x45j_RxGRn4V8N5lXJ9OjS/view?usp=drive_link"
  }
];

export const PROJECTS = [
  {
    title: "Statistical Analysis and Predictive Modeling",
    image: project1,
    description: "Increased FIFA player market value prediction by 3.23% (R²: 0.98), reduced error by 73.9%, and identified 76.50% of market value concentrated in 23.90% of elite players through outlier removal and z-score analysis.",
    technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Sklearn"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/Fifa.ipynb"
  },
  {
    title: "Sales Performance Analysis and Insights",
    image: project2,
    description: "Identified key sales drivers behind 28,261.15% April sales growth, uncovered 78.56% sales from top regions, and analyzed cancellation impact revealing 8.80% loss.",
    technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/Amazon.ipynb"
  },
  {
    title: "Dynamic Power BI Dashboard",
    image: project3,
    description: "Analyzed sales performance with a 0.83% decline in YTD sales and a 4.5% profit increase, revealing a 7.29% drop in quantity sold while maintaining a 5.37% profit margin, enhancing data-driven decision-making.",
    technologies: ["Power BI"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/eCommerce.pbix"
  },
  {
    title: "Data Cleaning in SQL Server",
    image: project4,
    description: "Optimized a real estate dataset by cleaning and structuring key data fields, reducing null values, and improving query efficiency. Standardized addresses, converted date formats, and transformed categorical data.",
    technologies: ["Microsoft SQL Server"],
    link: "https://github.com/Usayed777/PortfolioProjects/blob/main/House-Data_cleaning_project.sql"
  }
];

export const CONTACT = {
  address: "Jeddah, Saudia Arabia ",
  phoneNo: "+966-537998748 ",
  email: "usayedafridi2003@gmail.com"
};
