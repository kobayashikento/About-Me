import uoft from '../Assets/uoftlogo.png'
import Rlogo from '../Assets/Rlogo.svg'
import jsLogo from '../Assets/jsLogo.png'
import sqlLogo from '../Assets/sqlLogo.jpeg'
import kroger from '../Assets/kroger.png'
import ucLogo from '../Assets/ucLogo.png'
import cLogo from '../Assets/cLogo.jpeg'
import javaLogo from '../Assets/javaLogo.png'
import kindeLogo from '../Assets/kindeLogo.jpg'
import ismLogo from '../Assets/ismLogo.jpg'
import reactLogo from '../Assets/reactLogo.png'
import mongoLogo from '../Assets/mongoDB.png'
import sample1 from '../Assets/sample1.png'
import sample2 from '../Assets/sample2.png'
import sample3 from '../Assets/sample3.png'

let resume = [
    {
        title: "Honours Bachelors of Science",
        subtitle: "University of Toronto",
        titleDescription: "Statistics, Mathematics, and Philosophy",
        img: uoft,
        height: 500,
        imgHeight: "40%",
        imgWidth: "60%",
        type: "education",
        chip: "Education",
        key: 1,
        date: "September, 2014 - May, 2020",
        bodySummary: "\n I graduated from the University of Toronto with a major in Statistics and a minor in Mathematics and Philsophy. Throughout my undergraduate program I have also taken computer science courses, because I had a passion for programming and the enjoyed the challenge that came with logical thinking." +
            "\n In my Statistics courses I excelled in all my courses that used R, because I would make funcitons that would automate all of the data collection process." +
            "I had a strong interest in all my data sampling courses which taught effective sampling strategies. For example, calculating the minimum sample size to have confidence interval of 95%. Deciding whether to proceed with cluster or stratified sampling and accessing the pros and cons of each sampling type." +
            "\n My mathematics courses that taught advanced integrals and matrix alebra helped in my statistics courses especially in calculating MANOVA and MANCOVA in multivariate analysis. " +
            "\n Philosophy helped me engage in critical thinking, which was different from the way of thinking in my statistics, mathematics, or computer sciences courses where everything was analytical. My Philosophy courses taught me to think about problems from different angles." +
            "\n Listed below are the courses I took that have relevance in programming and data analysis." +
            "\n Statistics: " + "\n \t STA437H1: Methods for Multivariate Data \t \t STA305H1: Design and Analysis of Experiments" + "\n \t STA303H1: Methods of Data Analysis II \t \t STA304H1: Surveys, Sampling and Observational Data" +
            "\n \t STA302H1: Methods of Data Analysis I \t \t STA248H1: Statistics for Computer Scientists" +
            "\n Computer Science: " + "\n \t CSC343H1: Introduction to Databases \t \t CSC309H1: Programming on the Web" + "\n \t CSC209H1: Software Tools and Systems Programming" + "\n \t CSC207H1: Software Design" +
            "\n Mathematics: " + "\n \t MAT334H1: Complex Variables \t \t \t \t MAT235Y1: Calculus II " + "\n \t MAT223H1: Linear Algebra I \t \t \t \t MAT224H1: Linear Algebra II" + "\n \t MAT246H1: Concepts in Abstract Mathematics",
        additionalImage: false,
    },
    {
        title: "React JS",
        subtitle: "Web Framework",
        img: reactLogo,
        height: 500,
        imgHeight: "34%",
        imgWidth: "52%",
        type: "coding",
        chip: "Skill",
        key: 11,
        titleDescription: "Web Framework",
        date: "September, 2020 - Present",
        bodySummary: "\n This website is created using React JS along with Material UI for the design. For the past several months I have learned, practiced and implemented React, making use of its unique component style design event, handling with useState and useEffect, as well as breaking complex designs into simplier functional components." +
            "\n I have also created another website that I used to keep track of daily events. The purpose of this website was for myself to practice data manipulation with tables and forms. I also learned how to use React Redux to further optimize my code making sure that data was passed along the childrens efficiently. \n Below are some sample pictures. This website can be accessed at \r https://life-tracker-7fb87.web.app/main-menu/dashboard\.",
        urlDescription: "Gym Life Tracker.",
        additionalImage: true,
        additionalSrc: [
            {
                src: sample1,
                description: "Display Statistics Menu",
                subtitle: "Plot points on a graph to see your progress overtime"
            },
            {
                src: sample2,
                description: "Data Management Menu",
                subtitle: "Add, delete or edit data and updates the firebase database once action is completed"
            },
            {
                src: sample3,
                description: "Add Workout Popup",
                subtitle: "Pop up modal that is used to add data entries to the database"
            }
        ]
    },
    {
        title: "JavaScript",
        subtitle: "Programming Language",
        img: jsLogo,
        height: 500,
        imgHeight: "34%",
        imgWidth: "32%",
        type: "coding",
        chip: "Skill",
        key: 3,
        titleDescription: "Learned in CSC309 - Web Development",
        date: "September, 2018 - Present",
        bodySummary: "\n I learned how to create and deploy website in my CSC309 web development course taught by Professor Mark Kazakevich. Below is a list of the concepts we learned in this course." +
            "\n \f \v HTML \v CSS \v DOM \v Sessions and Cookies \v Canvas \v Javascript \v Bootstrap \v NodeJS \v AJAX \v XML \v JSON \v JQuery \v Rest API \v Mongoose and Mongo DB \v Express JS " +
            "\n For our final project, we were put into groups of 3 to deploy a website on Heroku using Monago DB as the database. Together with Ray Kwan and Kavan Lam we created a web site that aims to aid the course selection process of university students. Given a list of courses the website will indicate whether a conflict exists and is also able create a schedule ensures that least amount of time is spent on campus. We were also tasked to make user authentications with tokens and hashed passwords. My team and I achieved a grade of 96% on our project."
    },
    {
        title: "Mongo DB",
        subtitle: "Database",
        img: mongoLogo,
        height: 500,
        imgHeight: "26%",
        imgWidth: "74%",
        type: "coding",
        chip: "Skill",
        key: 12
    },
    {
        title: "R",
        subtitle: "Programming Language",
        img: Rlogo,
        height: 500,
        imgHeight: "35%",
        imgWidth: "35%",
        type: "coding",
        chip: "Skill",
        key: 2
    },
    {
        title: "SQL",
        subtitle: "Programming Language",
        img: sqlLogo,
        height: 500,
        imgHeight: "35%",
        imgWidth: "62%",
        type: "coding",
        chip: "Skill",
        key: 4
    },
    {
        title: "Application Developer",
        subtitle: "at Kroger",
        img: kroger,
        height: 500,
        imgHeight: "31%",
        imgWidth: "45%",
        type: "experience",
        chip: "Experience",
        key: 5
    },
    {
        title: "UC Dragon Boat",
        subtitle: "Paddler",
        height: 500,
        type: "extra",
        img: ucLogo,
        imgHeight: "30%",
        imgWidth: "29%",
        chip: "Athletic Activity",
        key: 6
    },
    {
        title: "C",
        subtitle: "Programming Language",
        height: 500,
        type: "coding",
        img: cLogo,
        imgHeight: "34%",
        imgWidth: "30%",
        chip: "Skill",
        key: 7
    },
    {
        title: "Java",
        subtitle: "Programming Language",
        height: 500,
        type: "coding",
        img: javaLogo,
        imgHeight: "29%",
        imgWidth: "48%",
        chip: "Skill",
        key: 8
    },
    {
        title: "IT Intern",
        subtitle: "at Kinden Phils.",
        height: 500,
        type: "experience",
        img: kindeLogo,
        imgHeight: "23%",
        imgWidth: "54%",
        chip: "Experience",
        key: 9
    },
    {
        title: "IB Dipolma",
        subtitle: "International School Manila",
        height: 500,
        type: "education",
        img: ismLogo,
        imgHeight: "29%",
        imgWidth: "26%",
        chip: "Education",
        key: 10
    },
]

export default resume;