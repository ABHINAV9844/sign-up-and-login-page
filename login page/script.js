// Toggle between login and sign-up
function showSignUp() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
}

function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("signupContainer").style.display = "none";
}

// Handle sign-up
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    alert("Sign-Up Successful! You can now log in.");
    showLogin();
});

// Handle login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        alert("Login Successful!");
    } else {
        alert("Invalid username or password!");
    }
});

// Chatbot functionality
function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    const chatbox = document.getElementById("chatbox");

    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    const userMessageElement = document.createElement("p");
    userMessageElement.textContent = 'You ${userMessage}';
    chatbox.appendChild(userMessageElement);

    const botMessageElement = document.createElement("p");
    if (userMessage.toLowerCase().includes("hello")) {
        botMessageElement.textContent = "Chatbot: Hi there! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("login")) {
        botMessageElement.textContent = "Chatbot: Use your credentials to log in.";
    } else {
        botMessageElement.textContent = "Chatbot: I'm not sure about that. Can you clarify?";
    }

    chatbox.appendChild(botMessageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
    chatInput.value = "";
}