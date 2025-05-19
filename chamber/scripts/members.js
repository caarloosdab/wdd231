const container = document.querySelector('#directory');
const gridBtn = document.querySelector('#grid-btn');
const listBtn = document.querySelector('#list-btn');

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

function displayMembers(members) {
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p class="membership-level level-${member.membership}">Membership: ${['','Member','Silver','Gold'][member.membership]}</p>
        `;

        container.appendChild(card);
    });
}

// Toggle view
gridBtn.addEventListener('click', () => {
    container.classList.add('grid');
    container.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list');
    container.classList.remove('grid');
});

// Load data
fetchMembers();
