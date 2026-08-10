const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const phone = document.getElementById("phone").value;

    if (phone.length !== 10 || isNaN(phone)) {
        message.textContent = "Please enter a valid 10-digit phone number.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Student registered successfully!";
    message.style.color = "green";

    console.log("Registration successful");

    form.reset();
});