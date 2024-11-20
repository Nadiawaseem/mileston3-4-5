import events from "inquirer/lib/utils/events";
import { encode } from "node:punycode";
import { json } from "node:stream/consumers";

 // Get refrences to the form and display area
 const form= document.getElementById('resume-form') as HTMLDivElement;
 const resumeDisplayElement = document.getElementById('resume display') as HTMLDivElement
 HTMLDivElement;
 const shareableLinkElement = document.getElementById('shareable-link-
    Container') as HTMlDivElement;
    const shareableLinkElement = document.getElementById('shareable-link') as
    HTMLAnchorElement;
    const downlodpdfbutton = document.getElementById('downlod-pdf') as
    HTMLButtonElement;

 // Handle form sumbission
 form.addEventListener('submit',(event:Event) => {
    event.preventDefault(); // prevent page relode

    // collect input values
    const Username =(document.getElementById('Username')as HTMLInputElement).value
    const email =(document.getElementById('email')as HTMLInputElement).value
    const phone =(document.getElementById('phone')as HTMLInputElement).value
    const education =(document.getElementById('education')as HTMLTextAreaElement).value
    const exprience = (documens.getElementById('experience') as HTMLTextAreaElement).value;
    const skills =(document.getElementById('skills')as HTMLTextAreaElement).value

    // sav form data in localStorage with the resume as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        exprience,
        skills
        
    };
    localStorage.setItem(Username,json.stringify(resumeData));  // saving the data locally

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contentedable="true">${name}</span></p>
     <p><b>Email:</b> <span contentedable="true">${email}</span></p>
      <p><b>Phone:</b><span contentedable="true">${phone}</span></p>

      <h3>Education</h3>
      <p <span contentedable="true">${education}</p>

      
      <h3>Exprience</h3>
      <p <span contentedable="true">$(exprience)</p>

      
      <h3>Skills</h3>
      <p <span contentedable="true">$(skills)</p>
    `;

    //Display the genrated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.');

        //Genrate a shareable URL with the Username only
        const shareableURL = 
        `${window.location.origin}?Username=${encodeURIComponent(Username)}`;

        //display the shareable link
        shareableLinkContainer.style. display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement?.textContent = shareableURL
    }
    
 });