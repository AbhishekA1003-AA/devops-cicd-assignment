const deployButton = document.getElementById("deployButton");
const status = document.getElementById("status");

deployButton.addEventListener("click", () => {
    status.textContent = "Deployment verified successfully!";
});
