const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('#year').innerHTML += currentYear;

const lastModification = document.querySelector('#last-modification');
lastModification.textContent += document.lastModified;
const modification = document.querySelector('#timestamp');
modification.textContent += document.lastModified;