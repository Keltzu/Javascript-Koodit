
const picArray = [
    { medium: 'kuvat/Game.jpg', large: 'kuvat/Game_Large.jpg', description: 'Game image' },
    { medium: 'kuvat/Goofy.jpg', large: 'kuvat/Goofy_Large.jpg', description: 'Goofy image' },
    { medium: 'kuvat/PS5.jpg', large: 'kuvat/PS5_Large.jpg', description: 'PS5 image' }
];


const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');


closeModal.addEventListener('click', () => {
    imageModal.close();
});


function openModal(largeImageSrc) {
    modalImage.src = largeImageSrc;
    modalImage.alt = 'Large Image';
    imageModal.showModal();
}


const contentDiv = document.getElementById('content');

picArray.forEach((item, index) => {
    const article = document.createElement('article');
    article.classList.add('card');


    const img = document.createElement('img');
    img.src = item.medium; // Use the medium image for the article
    img.alt = item.description;
    const description = document.createElement('p');
    description.textContent = item.description;


    article.appendChild(img);
    article.appendChild(description);


    article.addEventListener('click', () => openModal(item.large));


    contentDiv.appendChild(article);
});
