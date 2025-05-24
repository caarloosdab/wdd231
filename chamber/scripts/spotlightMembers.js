// spotlightMembers.js

async function spotlightChamberMembers() {
    const memberContainer = document.getElementById("chamber-members");

    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        // Filter for Silver (2) and Gold (3) members
        const spotlightMembers = data.members.filter(member => member.membership === 2 || member.membership === 3);

        // Shuffle the array randomly
        const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());

        // Select up to 3 spotlighted members
        shuffled.slice(0, 3).forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            // Determine membership level as text
            const membershipLevel = member.membership === 3 ? "Gold" : "Silver";

            memberCard.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name} logo">
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${membershipLevel}</p>
            `;

            memberContainer.appendChild(memberCard);
        });

    } catch (error) {
        console.error('Error fetching chamber member data:', error);
        memberContainer.innerHTML = "<p>Unable to load member data at this time.</p>";
    }
}

spotlightChamberMembers();

