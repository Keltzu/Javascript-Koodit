
const picArray = [
    {
        title: "pelipaita",
        mediumImage: "kuvat/Game.jpg",
        caption: "pelipaita pelaajille",
        description: "isokokoisia pelipaitoja"
    },
    {
        title: "Goofy ahh pumpkin",
        mediumImage: "kuvat/Goofy.jpg",
        caption: "hieno kurpitsa",
        description: "kaiverrettu eritavalla"
    },
    {
        title: "PlayStation 5",
        mediumImage: "kuvat/PS5.jpg",
        caption: "pelikonsoli",
        description: "hyvä konsoli"
    }
];


const targetSection = document.getElementById("target");


picArray.forEach(item => {

    const article = document.createElement("article");
    article.className = "card";


    const heading = document.createElement("h2");
    heading.textContent = item.title;


    const figure = document.createElement("figure");


    const img = document.createElement("img");
    img.src = item.mediumImage;
    img.alt = item.title;


    const figcaption = document.createElement("figcaption");
    figcaption.textContent = item.caption;


    figure.appendChild(img);
    figure.appendChild(figcaption);


    const description = document.createElement("p");
    description.textContent = item.description;


    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(description);


    targetSection.appendChild(article);
});
