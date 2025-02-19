import './MyProjects.css'
function MyProjects(){

    return(
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project" id="projects">

            <div className="Card">
                <h3>Product Management Application</h3>
                <p><strong>Description:</strong>Created a simple web application that performs create,read,update and delete(CRUD) operations on product data.<br/>
                The product data is stored as encrypted data in the local storage and displayed in a data table.<br/>
                <strong>Tools Used:</strong>CSS, React.js, React Data Table
                 </p>
                 <a href="https://github.com/MissTee11/Web-Development-Training/tree/main/Assignment%208-%20CRUD%20operations-Product%20management/src" className="gitRepo">GitHub</a>
                </div>
                
                <div className="Card">
                <h3>Online Shopping Platform</h3>
                <p><strong>Description:</strong>Created an online shopping application that allows users to select and view products. It includes cart functionalities that allow
                 <br/> users to add or remove products in cart as well as automatic calculations for price totals and subtotals and tracking of number of items in cart. <br/>
                 In this project I utilized an API to retrieve and display the product data dynamically.<br/>
                <strong>Tools Used:</strong>React.js, React Redux, Axios
                 </p>
                 <a href=" https://github.com/MissTee11/Web-Development-Training/tree/main/Online%20Shopping%20Platform/src" className="gitRepo">GitHub</a>
                </div>
            </div>
               
                
            
        </div>
    )
}
export default MyProjects;