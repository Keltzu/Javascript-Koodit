
const triggerElement = document.getElementById("trigger");
const targetImage = document.getElementById("target");


const picA = "kuvat/Kurpitsa.jpg";
const picB = "kuvat/store.jpg";


triggerElement.addEventListener("mouseover", () => {
    targetImage.src = picB;
});

triggerElement.addEventListener("mouseout", () => {
    targetImage.src = picA;
});
