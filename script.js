document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if(name === "" || email === "" || message === "") {
        document.getElementById("status").innerText = "Please fill all fields!";
        return;
    }

    // Fake success (no backend)
    document.getElementById("status").innerText = "Message sent successfully!";

    // Clear form
    document.getElementById("contactForm").reset();
});