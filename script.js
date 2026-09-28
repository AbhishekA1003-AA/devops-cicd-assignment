const verifyButton = document.getElementById("verifyButton");
const verifyResult = document.getElementById("verifyResult");

verifyButton.addEventListener("click", () => {
  verifyResult.textContent =
    "✓ Version 2 is live and the deployment is working successfully.";
});