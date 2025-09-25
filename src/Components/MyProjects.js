import './MyProjects.css'
function MyProjects(){

    return(
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project" id="projects">

            <div className="Card">
                <h3>Product Management Application (Frontend Project)</h3>
                <p><strong>Description:</strong>Created a simple web application that performs create,read,update and delete(CRUD) operations on product data.<br/>
                The product data is stored as encrypted data in the local storage and displayed in a data table.<br/>
                <strong>Tools Used:</strong>CSS, React.js, React Data Table
                 </p>
                 <a href="https://github.com/MissTee11/Web-Development-Training/tree/main/Assignment%208-%20CRUD%20operations-Product%20management/src" target="_blank" className="gitRepo">GitHub</a>
                </div>
                
                <div className="Card">
                <h3>Online Shopping Platform (Frontend Project)</h3>
                <p><strong>Description:</strong>Created an online shopping application that allows users to browse and view products, with cart functionalities to add or remove items,<br/>
                tract quantities, and automatically calculate subtotals and totals. The appplication retrieves product data dynamically through an API for a more realistic shopping experience<br/>
                 Originally built as a capstone project for my web development training, I continue to revist and polish this application as I learn new skills, improving performance,<br/>
                 refining the user interface and expanding functionality over time.
                 In this project I utilized an API to retrieve and display the product data dynamically.<br/>
                <strong>Tools Used:</strong>React.js,Redux, Axios, CSS
                 </p>
                 <div className='links'>
                    <a href="https://miss-tee11.github.io/Online-Shopping-Platform/" target="_blank" className="liveSite">Live Site</a><a href=" https://github.com/MissTee11/Web-Development-Training/tree/main/Online%20Shopping%20Platform/src" className="gitRepo" target="_blank">GitHub</a>
                     <a href="https://online-shopping-platform-pi.vercel.app/Products" target="_blank" className="liveSite">Live Site</a><a href=" https://github.com/MissTee11/Web-Development-Training/tree/main/Online%20Shopping%20Platform/src" className="gitRepo" target="_blank">Online Demo</a>
                 </div>
                </div>

                <div className="Card">
                <h3>Hospital Management System (Full Stack Project)</h3>
                <p><strong>Description:</strong>This is a full stack hospital management system I built to strengthen my Node.js, React, and PostgreSQL skills. The system features<br/>
                an admin dashboard that displays live statistics on patients, doctors, staff and daily appointments, along with a calendar for managing schedules. It also supports<br/>
                While the core features are functional, I'm still polishing the project, improving state management, refining the UI/UX, adding role-based access with secure authentication,<br/>
                and adding validations and error handling. This project reflects both my technical growth and my commitment to continuously learning and improving my work.<br/>
                <strong>Tools Used:</strong>React.js, Redux, Css, Node.js, Express.js, PostgreSQL, Bcrypt, Git, GitHub
                 </p>
                 <a href="https://github.com/MissTee11/my-fullstack-app" target="_blank" className="gitRepo">GitHub</a>
                </div>
            </div>
               
                
            
        </div>
    )
}
export default MyProjects;