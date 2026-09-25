const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const result = await response.json();

        if (result.success) {

            // Store name for welcome page
            localStorage.setItem("studentName", result.name);

            // Redirect to welcome page
            window.location.href = "welcome.html";

        } else {

            message.textContent = "Invalid email or password.";
            message.style.color = "red";
        }

    } catch (error) {

        console.error(error);

        message.textContent = "Server is not running!";
        message.style.color = "red";
    }
});

 