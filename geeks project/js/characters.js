async function fetchAndDisplayCards() {
    const cardContainer = document.getElementById('card-container');

    if (!cardContainer) {
        console.error("Error: Card container not found.");
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const posts = await response.json();
        const limitedPosts = posts.slice(0, 10);

        limitedPosts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
            <img src="../img/fon.jpg" alt="Card Image">
            <div class="card-title">${post.title}</div>
            <div class="card-body">${post.body}</div>
          `;

            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayCards);