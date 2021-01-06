import uoft from '../Assets/Pictures/uoftlogo.png'
import Rlogo from '../Assets/Pictures/Rlogo.svg'
import jsLogo from '../Assets/Pictures/jsLogo.png'
import sqlLogo from '../Assets/Pictures/sqlLogo.png'
import kroger from '../Assets/Pictures/kroger.png'
import ucLogo from '../Assets/Pictures/ucLogo.png'
import cLogo from '../Assets/Pictures/cLogo.png'
import javaLogo from '../Assets/Pictures/javaLogo.png'
import kindenLogo from '../Assets/Pictures/kindenLogo.png'
import reactLogo from '../Assets/Pictures/reactLogo.png'
import mongoLogo from '../Assets/Pictures/mongoDB.png'
import sample1 from '../Assets/Pictures/sample1.png'
import sample2 from '../Assets/Pictures/sample2.png'
import sample3 from '../Assets/Pictures/sample3.png'

let resume = [
    //U of t 
    {
        title: "Bachelors of Science",
        subtitle: "University of Toronto",
        titleDescription: "Statistics, Mathematics, and Philosophy",
        img: uoft,
        height: 450,
        imgWidth: "90%",
        logoMargin: "0px",
        imgCardWidth: "84%",
        cardMargin: "17px",
        type: "education",
        chip: "Education",
        key: 1,
        date: "September, 2014 - May, 2020",
        bodySummary: "\n I graduated from the University of Toronto with a degree in Statistics, Mathematics, and Philosophy. In my undergradaute years I learned how to become more comfortable with complex logical thinking, which includes but is not limited to complex calculations and visualization of 3D space through vector representations. My statistics courses taught me how to evaluate numbers, specifically its significance in the context of the problem and potential consequences that may arise in the context of statistical analysis." +
            "\n Throughout my undergraduate program, I have also taken multiple Computer Science courses that focused on the theory and implementation of each concept, because I had a passion for programming and enjoyed the challenge that came with logical thinking." +
            "\n  In my Statistics courses, I excelled in all my courses that used R, because I would make functions that would automate all of the data collection processes." +
            " I had a strong interest in all my data sampling courses which taught effective sampling strategies. For example, calculating the minimum sample size to have a confidence interval of 95%, deciding whether to proceed with cluster or stratified sampling, and accessing the pros and cons of each sampling type." +
            "\n My mathematics courses that taught advanced integrals and matrix algebra aided my understanding of my statistics courses, especially in the calculation of MANOVA and MANCOVA in a multivariate analysis that required a good understanding of vector calculations of integration of vectors. " +
            "\n Philosophy helped me engage in critical thinking, which was different from the way of thinking in my statistics, mathematics, or computer sciences, it taught me to think about problems from different angles which helped in my multivariate analysis. " +
            "\n Listed below are the courses I took that have relevance in programming and data analysis." +
            "\n Statistics: " + "\n \f \v STA437H1: Methods for Multivariate Data \v STA305H1: Design and Analysis of Experiments \v STA303H1: Methods of Data Analysis II \v STA304H1: Surveys, Sampling and Observational Data \v STA302H1: Methods of Data Analysis I \v STA248H1: Statistics for Computer Scientists" +
            "\n Computer Science: " + "\n \f \v CSC343H1: Introduction to Databases \v CSC309H1: Programming on the Web \vCSC209H1: Software Tools and Systems Programming \v CSC207H1: Software Design" +
            "\n Mathematics: " + "\n \f \v MAT334H1: Complex Variables \v MAT235Y1: Calculus II \v MAT223H1: Linear Algebra I \v MAT224H1: Linear Algebra II \v MAT246H1: Concepts in Abstract Mathematics",
        additionalImage: false,
        cardSubtitleMargin: 0,
        cardSubtitle: "September, 2014 - May, 2020"
    },
    // Kroger
    {
        title: "App Developer",
        subtitle: "at Kroger",
        img: kroger,
        height: 450,
        imgWidth: "68%",
        imgCardWidth: "72%",
        logoMargin: "13px",
        cardMargin: "26px",
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
    // IT intern
    {
        title: "IT Intern",
        subtitle: "at Kinden Phils.",
        height: 450,
        type: "experience",
        logoPadding: "10px",
        logoMargin: "10px",
        img: kindenLogo,
        imgWidth: "78%",
        imgCardWidth: "66%",
        cardMargin: "35px",
        chip: "Experience",
        titleDescription: "IT Internship",
        date: "June, 2016 - August, 2016 \n( 3 months )",
        bodySummary: "\n My responsibilities as an IT intern was to fix and maintain all physical and virtual networks. Attend to all physical network issues such as faulty wiring anzd made sure it was fixed promptly and efficiently." +
            "\n I contributed to the implementation of a new server that would upgrade the existing server and would be estimated to save the corporation at least 4 hours of network downtime per week. Under the supervision of the IT manager, I learned how to migrate existing data from the old servers to the new servers and was also informed how to set up the security of the servers to prevent any malicious access. " +
            "\n My other responsibilities were... " + "(a) Collaborated with several employees, at least 4 employers out of the 40 working employers per day to determine the cause of hardware, software or network issues; (b) Checking file integrity on computers when visiting storage facilities; (c) Performing weekly backups on the server every Saturday",
        cardSubtitle: "June, 2016 - August, 2016 \n( 3 months )",
        key: 9
    },
    // React
    {
        title: "React JS",
        subtitle: "Web Framework",
        img: reactLogo,
        height: 450,
        imgWidth: "63%",
        imgCardWidth: "75%",
        cardMargin: "16px",
        type: "coding",
        chip: "Skill",
        key: 11,
        titleDescription: "Web Framework",
        date: "September, 2020 - Present",
        bodySummary: "\n For the past several months I have learned, practiced, and implemented React, making use of its unique component style design event, handling with useState and useEffect, as well as breaking complex designs into simpler functional components. This website is created using React JS along with Material UI for the design. For the animations, I learned how to utilize React-Spring as well as interpolate property which calculates and animates the card transition from one vector location to another." +
            "\n I have also created another website that I used to keep track of daily events. The purpose of this website was for me to practice data manipulation with tables and forms. I also learned how to use React-Redux to further optimize my code, making sure that data was passed along to the children efficiently. \n Below are some sample pictures. This website can be accessed at \r https://life-tracker-7fb87.web.app/main-menu/dashboard\.",
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
        height: 450,
        imgWidth: "40%",
        logoMargin: "10px",
        imgCardWidth: "35%",
        cardMargin: "24px",
        type: "coding",
        chip: "Skill",
        key: 3,
        titleDescription: "Learned in CSC309 - Web Development",
        date: "September, 2018 - Present",
        bodySummary: "\n  My knowledge of JS and web development comes from my CSC309 web development course taught by Professor Mark Kazakevich. The focus of the course was mainly the deployment of a website using Node JS. We were taught everything from styling and animating components on the DOM to implementing hashing to ensure secure user authentication and managing browser tokens to ensure a secure connection between the client and host." +
            "\n Below is a list of the concepts that I learned from this course." +
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
        logoMargin: "19px",
        imgCardWidth: "72%",
        cardMargin: "44px",
        height: 450,
        imgWidth: "77%",
        type: "coding",
        chip: "Skill",
        key: 12,
        titleDescription: "Learned in CSC309 - Web Development",
        date: "September, 2018 - December, 2018",
        bodySummary: "\n My knowledge of Mongo DB comes from my web development course where the first half of the course focused on styling the DOM elements and the latter half focused on the backend and server-side functionalities. We learned and implemented Node JS that was responsible for handling the communications from Mongoose and the client." +
            "\n I have also learned how to implement a website using Firebase and Firestore. This website and my task managing website coded in React JS both were deployed using Firebase. ",
        cardSubtitle: "Experience - 4 months",
        cardSubtitleMargin: 1,
    },
    // R
    {
        title: "R",
        subtitle: "Programming Language",
        img: Rlogo,
        height: 450,
        imgHeight: "35%",
        imgWidth: "35%",
        logoMargin: "4px",
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
        height: 450,
        imgWidth: "69%",
        logoMargin: "14px",
        imgCardWidth: "71%",
        cardMargin: "28px",
        type: "coding",
        chip: "Skill",
        key: 4,
        titleDescription: "Learned in CSC343 - Introduction to Databases",
        date: "September, 2019 - December, 2019",
        bodySummary: "\n My knowledge of SQL and databases comes from my ' Introduction to Databases ' course. In this course, I learned relational data models, relational algebra, and querying language used to update databases. As a final project, I was tasked to implement queries used to retrieve, add, and update data on PostgreSQL." +
            "\n I completed 3 assignments throughout this course that challenged my practical knowledge of the subject. " +
            "\n The first assignment tested my knowledge in Relational Algebra where I was tasked to read a new relational schema and determine whether or not a particular instance was valid. I was also tasked to identify whether or not a certain problem could be solved using relational algebra. " +
            "\n The second assignment focused on SQL schema and required to write SQL queries, design datasets to test the schema, learn, and understand Embed SQL in Java using JDBC. This assignment made me understand the limits and power standard SQL." +
            "\n The third assignment focused on designing SQL schemas where I was tasked to create a relational model that had reasonable choices such as functional dependencies. " +
            "\n Below is a list of the concepts that I learned from this course." +
            "\n \f \v The relational data model \v Relational algebra \v Querying and updating databases \v Application programming with SQL \v Integrity constraints, normal forms, and database design",
        cardSubtitle: "Experience - 4 months",
        cardSubtitleMargin: 1,
    },
    //C
    {
        title: "C",
        subtitle: "Programming Language",
        height: 450,
        type: "coding",
        img: cLogo,
        imgWidth: "33%",
        imgCardWidth: "50%",
        cardMargin: "16px",
        chip: "Skill",
        logoMargin: "11px",
        key: 7,
        titleDescription: "Learned in CSC209 - Software Tools and Systems Programming",
        date: "Experience - 4 months",
        bodySummary: "\n My knowledge of C comes from the course CSC209 Software tools and systems programming which I took in my third year.  In this course, I learned how to code in C, learned about dynamic memory allocation, learned shell/file systems, and pipes/processes. " +
            "\n Below is a list of the concepts that I learned from this course." +
            "\n \f \v Shell and File System \v Pointers \v Dynamic Memory \v Structs and Streams \v Header Files \v Low Level I/O \v Funtion Pointers \v Processes and Signals \v Sockets and Select \v Shell Programming" +
            "\n This course was structured in a way that the concepts and applications were learned in lectures, which were followed by labs at the end of every week where our knowledge was assessed through series of problems presented by the professor. ",
        cardSubtitle: "Experience - 4 months",
        cardSubtitleMargin: 1,
    },
    // Java
    {
        title: "Java",
        subtitle: "Programming Language",
        height: 450,
        type: "coding",
        img: javaLogo,
        imgWidth: "55%",
        logoMargin: "12px",
        imgCardWidth: "52%",
        cardMargin: "29px",
        chip: "Skill",
        key: 8,
        titleDescription: "Learned in CSC209 - Software Tools and Systems Programming",
        date: "Experience - 1 year",
        bodySummary: "\n My knowledge of Java comes from the course CSC207 Software Design and I was first exposed to the language in my programming course I took in the International Baccalaureate higher-level Computer Science course. As a final assessment of my CSC207 course, we were required to build an android application using Android Studio in a team of 3. " +
            "\n Below is a list of the concepts that I learned from this course." +
            "\n \f \v Version Control \v Unit Testting \v Refactoring \v OOP Design and Development \v Design Patterns \v IDE Usage, \v Regular Expressions ",
        cardSubtitle: "Experience - 1 year",
        cardSubtitleMargin: 1,
    },
]

export default resume;