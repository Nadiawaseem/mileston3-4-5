"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume display');
// Handle form sumbission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page relode
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contentedable=\"true\">".concat(name, "</span></p>\n     <p><b>Email:</b> <span contentedable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b><span contentedable=\"true\">").concat(phone, "</span></p>\n\n      <h3>Education</h3>\n      <p <span contentedable=\"true\">").concat(education, "</p>\n\n      \n      <h3>Exprience</h3>\n      <p <span contentedable=\"true\">$(exprience)</p>\n\n      \n      <h3>Skills</h3>\n      <p <span contentedable=\"true\">$(skills)</p>\n    ");
    //Display the genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
