const modeButton = document.querySelector("#mode");
const body = document.body; // Select the body element
const header = document.querySelector("header"); // Select the header element

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode")) {
		body.style.backgroundColor = "#000"; // Change the background color of the body
		header.style.color = "#fff"; // Change the text color of the header
		modeButton.textContent = "Light Mode";
	} else {
		body.style.backgroundColor = "white"; // Change the background color of the body
		header.style.color = "#000"; // Change the text color of the header
		modeButton.textContent = "Dark Mode";
	}
});
