const adviceText = document.getElementById("advice");
const button = document.getElementById("new-advice");

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent = "Please Try Again Later! Error Occurred.";
  }
};

button.addEventListener("click", fetchAdvice);
