let burger = document.getElementById("burger")
let menuElements = document.querySelectorAll(".menu li a")
const images = ["Media/landing.jpg", "Media/landing6.jpg", "Media/landing7.jpg", "Media/landing8.jpg", "Media/landing9.jpg"];
let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const bullets = Array.from(document.querySelectorAll(".bullet"));
const loading = document.getElementById("loading")

window.onload = _ => loading.style.display = "none";
// Set the initial image and active bullet
sliderImage.src = images[currentIndex];
bullets[currentIndex].classList.add("active");

// prev button event listener
prevButton.addEventListener("click", () =>
{
    updateSlide(-1);
});

// next button event listener
nextButton.addEventListener("click", () =>
{
    updateSlide(1);
});

// bullet event listeners
bullets.forEach((bullet, index) =>
{
    bullet.addEventListener("click", () =>
    {
        console.log(index, currentIndex)
        updateSlide(index - currentIndex);
    });
});

// set interval to slide the images automatically
setInterval(() =>
{
    updateSlide(1);
}, 3000);

// update slide function
function updateSlide(step)
{
    // Remove the active class from the current bullet
    bullets[currentIndex].classList.remove("active");

    // Update the current index
    currentIndex += step;
    if (currentIndex < 0)
    {
        currentIndex = images.length - 1;
    } else if (currentIndex === images.length)
    {
        currentIndex = 0;
    }

    // Update the image and add the active class to the new bullet
    sliderImage.src = images[currentIndex];
    bullets[currentIndex].classList.add("active");
}

burger.addEventListener("click", _ =>
{
    burger.classList.toggle("active");
})
menuElements.forEach((a) =>
{

    a.addEventListener("click", (e) =>
    {
        menuElements.forEach((links) =>
        {
            links.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})