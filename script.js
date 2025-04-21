document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.querySelectorAll(".toggle-btn");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let details = button.nextElementSibling;
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    }


    let form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 


        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let nameError = document.getElementById("name-error");
        let emailError = document.getElementById("email-error");
        let messageError = document.getElementById("message-error");

        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";

        let isValid = true;


        if (name === "") {
            nameError.textContent = "Name is required";
            nameError.style.display = "block";
            isValid = false;
        }


        if (email === "" || !email.includes("@")) {
            emailError.textContent = "Valid email is required";
            emailError.style.display = "block";
            isValid = false;
        }


        if (message === "") {
            messageError.textContent = "Message is required";
            messageError.style.display = "block";
            isValid = false;
        }


        if (isValid) {
            console.log("Form submitted successfully:", { name, email, message });
            form.reset(); 
        }
    });
});

const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        const category = this.getAttribute("data-category");
        projects.forEach(project => {
            if (category === "all" || project.getAttribute("data-category") === category) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});