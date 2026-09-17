
// ========================================
// STUDENT INFORMATION
// Change the information below
// ========================================

const student = {

    name: "Your Name",

    major: "Information Technology Student",

    about: "Hello! I am a student interested in technology, programming, and learning new skills.",

    github: "https://github.com/",

    linkedin: "https://www.linkedin.com/",

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ],

    interests: [
        "Technology",
        "Programming",
        "AI"
    ],

    projects: [
        {
            name: "My First Website",
            description: "A simple website created using HTML and CSS."
        },

        {
            name: "My JavaScript Project",
            description: "A small project using JavaScript."
        }
    ]
};


// ========================================
// DISPLAY STUDENT INFORMATION
// ========================================

document.getElementById("name").textContent = student.name;

document.getElementById("major").textContent = student.major;

document.getElementById("about").textContent = student.about;


// First letter of name

document.getElementById("avatar").textContent =
    student.name.charAt(0).toUpperCase();


// Social links

document.getElementById("github").href = student.github;

document.getElementById("linkedin").href = student.linkedin;


// ========================================
// SKILLS
// ========================================

const skillsContainer = document.getElementById("skills");

student.skills.forEach(function(skill) {

    const element = document.createElement("span");

    element.className = "skill";

    element.textContent = skill;

    skillsContainer.appendChild(element);

});


// ========================================
// INTERESTS
// ========================================

const interestsContainer = document.getElementById("interests");

student.interests.forEach(function(interest) {

    const element = document.createElement("span");

    element.className = "skill";

    element.textContent = interest;

    interestsContainer.appendChild(element);

});


// ========================================
// PROJECTS
// ========================================

const projectsContainer = document.getElementById("projects");

student.projects.forEach(function(project) {

    const element = document.createElement("div");

    element.className = "project";

    element.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;

    projectsContainer.appendChild(element);

});


// ========================================
// JAVASCRIPT BUTTON
// ========================================

function showMessage() {

    document.getElementById("message").textContent =
        "Welcome to my profile!";

}

