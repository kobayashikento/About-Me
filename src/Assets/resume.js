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
    //U of t 
    {
        title: "Honours Bachelors of Science",
        subtitle: "University of Toronto",
        titleDescription: "Statistics, Mathematics, and Philosophy",
        img: uoft,
        height: 600,
        imgWidth: "60%",
        logoMargin: "-2px",
        imgCardWidth: "84%",
        cardMargin: "17px",
        type: "education",
        chip: "Education",
        key: 1,
        date: "September, 2014 - May, 2020",
        bodySummary: "\n I graduated from the University of Toronto with a degree in Statistics, Mathematics, and Philosophy. In my und,ergraPhilosophyearned how to become more comfortable with complex logical thinking, which includes but is not limited to complex calculations and visualization of 3D space through vector representations. My statistics courses taught me how to evaluate numbers, specifically its significance in the context of the problem and potential consequences that may arise in the context of statistical analysis." +
            "\n Throughout my undergraduate program, I have also taken multiple computer science courses that focused on the theory and implementation of each concept, because I had a passion for programming and enjoyed the challenge that came with logical thinking." +
            "\n In my Statistics courses, I excelled in all my courses that used R, because I would make functions that would automate all of the data collection processes." +
            "I had a strong interest in all my data sampling courses which taught effective sampling strategies. For example, calculating the minimum sample size to have a confidence interval of 95%. Deciding whether to proceed with cluster or stratified sampling and accessing the pros and cons of each sampling type." +
            "\n My mathematics courses that taught advanced integrals and matrix algebra aided my understanding of my statistics courses, especially in the calculation of MANOVA and MANCOVA in a multivariate analysis that required a good understanding of vector calculations of integration of vectors. " +
            "\n Philosophy helped me engage in critical thinking, which was different from the way of thinking in my statistics, mathematics, or computer sciences, it taught me to think about problems from different angles which helped in my multivariate analysis. " +
            "\n Listed below are the courses I took that have relevance in programming and data analysis." +
            "\n Statistics: " + "\n \t STA437H1: Methods for Multivariate Data \t \t STA305H1: Design and Analysis of Experiments" + "\n \t STA303H1: Methods of Data Analysis II \t \t STA304H1: Surveys, Sampling and Observational Data" +
            "\n \t STA302H1: Methods of Data Analysis I \t \t STA248H1: Statistics for Computer Scientists" +
            "\n Computer Science: " + "\n \t CSC343H1: Introduction to Databases \t \t CSC309H1: Programming on the Web" + "\n \t CSC209H1: Software Tools and Systems Programming" + "\n \t CSC207H1: Software Design" +
            "\n Mathematics: " + "\n \t MAT334H1: Complex Variables \t \t \t \t MAT235Y1: Calculus II " + "\n \t MAT223H1: Linear Algebra I \t \t \t \t MAT224H1: Linear Algebra II" + "\n \t MAT246H1: Concepts in Abstract Mathematics",
        additionalImage: false,
        cardSubtitleMargin: 0,
        cardSubtitle: "September, 2014 - May, 2020"
    },
    // React
    {
        title: "React JS",
        subtitle: "Web Framework",
        img: reactLogo,
        height: 600,
        imgHeight: "34%",
        imgWidth: "63%",
        imgCardWidth: "75%",
        cardMargin: "16px",
        type: "coding",
        chip: "Skill",
        key: 11,
        titleDescription: "Web Framework",
        date: "September, 2020 - Present",
        bodySummary: "\n For the past several months I have learned, practiced, and implemented React, making use of its unique component style design event, handling with useState and useEffect, as well as breaking complex designs into simpler functional components. This website is created using React JS along with Material UI for the design. For the animations, I learned how to utilize React-Spring as well as interpolate property which calculates and animates the card transition from one vector location to another." +
            "\n I have also created another website that I used to keep track of daily events. The purpose of this website was for me to practice data manipulation with tables and forms. I also learned how to use React-Redux to further optimize my code, making sure that data was passed along to the children efficiently. \n Below are some sample pictures. This website can be accessed at \n Below are some sample pictures. This website can be accessed at \r https://life-tracker-7fb87.web.app/main-menu/dashboard\.",
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
        ],
        cardSubtitle: "Experience - 5 months",
        cardSubtitleMargin: 1,
    },
    // JS
    {
        title: "JavaScript",
        subtitle: "Programming Language",
        img: jsLogo,
        height: 600,
        imgHeight: "25%",
        imgWidth: "28%",
        logoMargin: "10px",
        imgCardWidth: "35%",
        cardMargin: "24px",
        type: "coding",
        chip: "Skill",
        key: 3,
        titleDescription: "Learned in CSC309 - Web Development",
        date: "September, 2018 - Present",
        bodySummary: "\n  My knowledge of JS and web development comes from my CSC309 web development course taught by Professor Mark Kazakevich. The focus of the course was mainly the deployment of a website using Node JS. We were taught everything from styling and animating components on the DOM to implementing hashing to ensure secure user authentication and managing browser tokens to ensure a secure connection between the client and host." +
            "\n Below is a list of the concepts that I acquired from this course." +
            "\n \f \v HTML \v CSS \v DOM \v Sessions and Cookies \v Canvas \v Javascript \v Bootstrap \v NodeJS \v AJAX \v XML \v JSON \v JQuery \v Rest API \v Mongoose and Mongo DB \v Express JS " +
            "\n For our final project, we were put into groups of 3 to deploy a website on Heroku using Mongo DB as the database. Together with Ray Kwan and Kavan Lam we created a website that aims to aid the course selection process of university students. Given a list of courses the website will indicate whether a conflict exists and is also able to create a schedule ensures that the least amount of time is spent on campus. We were also tasked to make user authentications with tokens and hashed passwords. My team and I achieved a grade of 96% on our project.",
        cardSubtitle: "Experience - 2 years",
        cardSubtitleMargin: 1,
    },
    // Mongo DB
    {
        title: "Mongo DB",
        subtitle: "Database",
        img: mongoLogo,
        logoMargin: "10px",
        imgCardWidth: "72%",
        cardMargin: "44px",
        height: 600,
        imgWidth: "77%",
        type: "coding",
        chip: "Skill",
        key: 12,
        titleDescription: "Learned in CSC309 - Web Development",
        date: "September, 2018 - December, 2018",
        bodySummary: "\n My knowledge of Mongo DB comes from my web development course where the first half of the course focused on styling the DOM elements and the latter half focused on the backend and server-side functionalities.   We learned and implemented Node JS that was responsible for handling the communications from Mongoose and the client." + 
        "\n I have also learned how to implement a website using Firebase and Firestore. This website and my task managing website coded in React JS both were deployed using Firebase. ",
        cardSubtitle: "Experience - 4 months",
        cardSubtitleMargin: 1,
    },
    // R
    {
        title: "R",
        subtitle: "Programming Language",
        img: Rlogo,
        height: 600,
        imgHeight: "35%",
        imgWidth: "35%",
        imgCardWidth: "48%",
        cardMargin: "28px",
        type: "coding",
        chip: "Skill",
        key: 2,
        titleDescription: "Used in all Statistical Analysis courses",
        date: "September, 2015 - December, 2019",
        bodySummary: "\n My experience of R was mainly for computations and analysis. I was able to significantly reduce the time spent calculating the variance, p-value, or t-value by hand by using R together with conditional statements and recursion. This came in extremely handy when the data set was large or/and involved multivariate analysis. " + 
        "\n I also used R-MarkDown to create and my reports for each task and ensured that the layout was easy to follow and the language was accurate and concise.",
        cardSubtitle: "Experience - 3 years",
        cardSubtitleMargin: 1,
    },
    // SQL
    {
        title: "SQL",
        subtitle: "Programming Language",
        img: sqlLogo,
        height: 600,
        imgHeight: "35%",
        imgWidth: "69%",
        imgCardWidth: "71%",
        cardMargin: "28px",
        type: "coding",
        chip: "Skill",
        key: 4,
        titleDescription: "Learned in CSC343 - Introduction to Databases",
        date: "September, 2019 - December, 2019",
        bodySummary: "\n My knowledge of SQL and databases comes from my 'introduction to databases' course. In this course, we learned relational data models, relational algebra, and querying language used to update databases. As a final project, I was tasked to implement queries used to retrieve, add, and update data on PostgreSQL." + 
        "\n Below is a list of the concepts that I acquired from this course." + 
        "\n \f \v The relational data model \v Relational algebra \v Querying and updating databases \v Application programming with SQL \v Integrity constraints, normal forms, and database design",
        cardSubtitle: "Experience - 4 months",
        cardSubtitleMargin: 1,
    },
    // Kroger
    {
        title: "Application Developer",
        subtitle: "at Kroger",
        img: kroger,
        height: 600,
        imgHeight: "31%",
        imgWidth: "53%",
        imgCardWidth: "72%",
        cardMargin: "20px",
        type: "experience",
        chip: "Experience",
        key: 5,
        titleDescription: "Application Developer",
        date: "December, 2017 - May, 2018 \n( 5 months )",
        bodySummary: "\n I was responsible for creating an iOS application (front-end) for an iPad that helped grocery store clerks keep track of soon to expire goods. This app would notify the user when a product was 1 week of expiry for non-refrigerated goods and 48 hours of expiry for refrigerated goods. It would notify the user of the location of the good and the number of goods to be removed from the shelf." +
        "\n I learned how to utilize XCode and SWIFT for the development of the app and also made sure to utilize the powerful feature of storyboards, which reduced the need to code each view from scratch. This application also had a bar code scanning functionality which was used to identify items to add or remove from the database. Finally, the data that contained all the information about products were stored on the cloud using CloudKit and tied to each store's apple account. " + 
        "\n One of the drawbacks of this application came when it was initially implemented, since the database did not contain any information about any expiry employers were required to manually enter the expiry dates of products on the current shelf. Moreover, when a new product was ordered to restock it must be entered into the database. Therefore, to reduce the amount of manual input required, I suggested and implemented the bar code functionality and also suggested that the expiry date for the restocked items was to be entered when the receiving would receive its shipments. ",
        cardSubtitle: "December, 2017 - May, 2018 \n( 5 months )",
    },
    //UC
    {
        title: "UC Dragon Boat",
        subtitle: "Paddler",
        height: 600,
        type: "extra",
        img: ucLogo,
        imgHeight: "30%",
        imgWidth: "34%",
        imgCardWidth: "50%",
        cardMargin: "23px",
        chip: "Athletic Activity",
        cardSubtitle: "Septermber, 2017 - August, 2018 \n( 11 months )",
        key: 6
    },
    //C
    {
        title: "C",
        subtitle: "Programming Language",
        height: 600,
        type: "coding",
        img: cLogo,
        imgHeight: "34%",
        imgWidth: "35%",
        imgCardWidth: "50%",
        cardMargin: "16px",
        chip: "Skill",
        key: 7,
        cardSubtitle: "Experience - 4 months",
        cardSubtitleMargin: 1,
    },
    // Java
    {
        title: "Java",
        subtitle: "Programming Language",
        height: 600,
        type: "coding",
        img: javaLogo,
        imgHeight: "29%",
        imgWidth: "48%",
        imgCardWidth: "52%",
        cardMargin: "29px",
        chip: "Skill",
        key: 8,
        cardSubtitle: "Experience - 1 year",
        cardSubtitleMargin: 1,
    },
    // IT intern
    {
        title: "IT Intern",
        subtitle: "at Kinden Phils.",
        height: 600,
        type: "experience",
        logoPadding: "10px",
        logoMargin: "10px",
        img: kindeLogo,
        imgHeight: "23%",
        imgWidth: "54%",
        imgCardWidth: "63%",
        cardMargin: "35px",
        chip: "Experience",
        cardSubtitle: "June, 2016 - August, 2016 \n( 3 months )",
        key: 9
    },
    // ISM
    {
        title: "IB Dipolma",
        subtitle: "International School Manila",
        height: 600,
        type: "education",
        img: ismLogo,
        imgHeight: "29%",
        imgWidth: "31%",
        imgCardWidth: "50%",
        cardMargin: "10px",
        chip: "Education",
        key: 10,
        cardSubtitleMargin: 1,
        cardSubtitle: "August, 2010 - May, 2014"
    },
]

export default resume;