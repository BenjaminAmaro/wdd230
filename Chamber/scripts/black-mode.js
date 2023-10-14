const modeButton = document.querySelector("#mode");
const body = document.body; 
const header = document.querySelector("header"); 
const events = document.querySelector(".event"); 
const weather = document.querySelector(".weather"); 
const pubOne = document.querySelector(".publicity-1"); 
const pubTwo = document.querySelector(".publicity-2"); 
const PubThree = document.querySelector(".publicity-3"); 


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode")) {
		body.style.backgroundColor = "#000"; 
		header.style.color = "#fff"; 
		// event
		events.style.backgroundColor = "#213b44"; 
		events.style.color = "#fff"; 
		// weather
		weather.style.backgroundColor = "#213b44"; 
		weather.style.color = "#fff"; 
		// pubOne
		pubOne.style.backgroundColor = "#213b44"; 
		pubOne.style.color = "#fff"; 
		// pubTwo
		pubTwo.style.backgroundColor = "#213b44"; 
		pubTwo.style.color = "#fff"; 
		// PubThree
		PubThree.style.backgroundColor = "#213b44"; 
		PubThree.style.color = "#fff"; 

		modeButton.textContent = "Light Mode";
	} else {
		body.style.backgroundColor = "white"; 
		header.style.color = "#000"; 
		body.style.backgroundColor = "white"; 
		header.style.color = ""; 
		// event
		events.style.backgroundColor = "#F4A261"; 
		events.style.color = "#000"; 
		// weather
		weather.style.backgroundColor = "#F4A261"; 
		weather.style.color = "#000"; 
		// pubOne
		pubOne.style.backgroundColor = "#F4A261"; 
		pubOne.style.color = "#000"; 
		// pubTwo
		pubTwo.style.backgroundColor = "#F4A261"; 
		pubTwo.style.color = "#000"; 
		// PubThree
		PubThree.style.backgroundColor = "#F4A261"; 
		PubThree.style.color = "#000"; 

		modeButton.textContent = "Dark Mode";
	}
});
