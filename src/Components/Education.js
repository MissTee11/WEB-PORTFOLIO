import './Education.css'

function MyEducation(){
    return(
        <div id="education">
           <h2 className="eduTitle">Education & Experience</h2>
            <div className="education">
                <h3>Web Development Training Program</h3>
                <p><strong>Company: </strong>Dure Technologies</p>
                <p><strong>Duration: </strong>August 2024- December 2024</p>
                <p><strong>Description: </strong>As part of my web development training with Dure Technologies, I started from the basics, learning HTML,CSS and JavaScript<br/>
                before progressing to more advanced topics like React.js and Redux. The training invlolved hands-on assignments and mini-projects<br/>
                to reinforce each concept.
                </p>
                <p>
                    The full collection of coursework and assignments is hosted in one GitHub repository, where you can explore the various stages of my learning journey:    
                </p>
                <a href="https://github.com/MissTee11/Web-Development-Training" target='blank' className="gitRepo">GitHub Repository</a>

            </div>

            <div className="education">
                <h3>Bachelor of Computer Engineering</h3>
                <p><strong>University:</strong>Sakarya University</p>
                <p><strong>Year:</strong>2022-Present</p>
                <p><strong>Key Coursework:</strong>Web Technologies, Database Management Systems, Data Structures</p>
                <p><strong>Course Projects:</strong></p>
                <ul>
                    <li>Developed a basic portfolio in Web Technologies using CSS,HTML, Javascript and Vue.js</li>
                    <li>Developed a hospital management system using React.js, Node.js and PostgreSQL</li>
                </ul>

            </div>

            <div className="education">
                <h3>High School Dilpoma</h3>
                <p><strong>School:</strong>Wise Owl Secondary School</p>
                <p><strong>Graduation Year:</strong> 2021</p>
                <p><strong>Highlights:</strong></p>
                <ul>
                    <li>Headgirl: leadership, communication and team work skills</li>
                    <li>Studied Mathematics, Physics, Chemistry and Accounting</li>
                    <li>Active Participation in public speaking</li>
                </ul>

            </div>

        </div>
    )
}

export default MyEducation;