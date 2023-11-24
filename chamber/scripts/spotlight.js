const urlspot = 'https://benjaminamaro.github.io/wdd230/chamber/data/directory.json';
const cards = document.querySelector('#spotLight');

async function getCompanyData() {
    const response = await fetch(urlspot);
    const data = await response.json();
    
    // Filter golden and silver members
    const goldenSilverMembers = data.companies.filter(company => company.membership_level === 'Gold' || company.membership_level === 'Silver');
    
    // Randomly choose 3 members
    const selectedMembers = getRandomMembers(goldenSilverMembers, 3);
    
    // Display selected members in the HTML container
    displayCompanies(selectedMembers);
}

function getRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, count);
}

function displayCompanies(companies) {
    cards.innerHTML = ''; // Clear previous content

    companies.forEach(company => {
        const card = document.createElement('span');
        card.classList.add('spotlightcards');

        // Add company details to the card
        card.innerHTML = `
            <img src="${company.image}" alt="${company.name}">
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <a href="${company.website}" target="_blank">Visit Website</a>
            <p>${company.other_information}</p>
        `;

        cards.appendChild(card);
    });
}

// Call the function to get and display the data
getCompanyData();