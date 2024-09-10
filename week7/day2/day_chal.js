const gifForm = document.getElementById('gifForm');
const categoryInput = document.getElementById('categoryInput');
const gifWrapper = document.getElementById('gifWrapper');
const clearAllBtn = document.getElementById('clearAllBtn');

const giphyKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

gifForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const category = categoryInput.value;
    const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=${category}&rating=g`;

    try {
        const response = await fetch(giphyUrl);
        const result = await response.json();
        const gifLink = result.data.images.original.url;

        const gifBlock = document.createElement('div');
        const gifImage = document.createElement('img');
        gifImage.src = gifLink;
        gifImage.alt = category;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        
        gifBlock.appendChild(gifImage);
        gifBlock.appendChild(removeBtn);
        gifWrapper.appendChild(gifBlock);

        removeBtn.addEventListener('click', () => {
            gifBlock.remove();
        });

    } catch (error) {
        console.log('Error:', error);
    }
});

clearAllBtn.addEventListener('click', () => {
    gifWrapper.innerHTML = '';
});
