
const form = document.getElementById("nameForm");
const targetParagraph = document.getElementById("target");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;


    targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
});
