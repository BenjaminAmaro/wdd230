const urlspot = 'https://benjaminamaro.github.io/wdd230/chamber/data/directory.json';
const cards = document.querySelector('#spotLight');

async function getCompanyData() {
    const response = await fetch(urlspot);
    const data = await response.json();
    
    const goldenSilverMembers = data.companies.filter(company => 
    company.membership_level === 'Gold' || company.membership_level === 'Silver');
    
    const selectedMembers = getRandomMembers(goldenSilverMembers, 3);
    
    displaySpotlights(selectedMembers);
}

function getRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, count);
}

function displaySpotlights(companies) {
    cards.innerHTML = ''; 

    companies.forEach(company => {
        const card = document.createElement('span');
        card.classList.add('spotlightcards');

        card.innerHTML = `
            <img src="${company.image}" alt="${company.name}" width='100px' height='100px'>
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <a href="${company.website}" target="_blank">${company.name} Website</a>
            <p>${company.other_information}</p>
    `;

        cards.appendChild(card);
    });
}

getCompanyData();