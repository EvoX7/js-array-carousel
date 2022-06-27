// ! Image List
const imagesList = [
    "https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg",
    "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg",
    "https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
    "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
    "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg",
    "https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg"
];

// ? Selecting html output
const imageWrapper = document.getElementById("wrapper-images");

// ? Selecting active element
let activeElement = 1;


// ! Creating loop for ImageList
for (let imageSlide = 0; imageSlide < imagesList.length; imageSlide++) {

    // * Creating a new image (element)
    const newImage = document.createElement("img");

    // // * Creating a new pointer (element)
    // const newThumb = document.createElement("i");

    // * Giving attributes to the new image (element)
    newImage.setAttribute("src", imagesList[imageSlide]);

    // // * Giving class to the new thumbnail (element)
    // newThumb.classList.add("fa-circle");


    // * Giving conditions to active class
    if (imageSlide == activeElement) {
        newImage.classList.add("active");
        // newThumb.classList.add("active");
    }

    // * Adding element to the parent
    imageWrapper.append(newImage);
    
}

// ! Defining buttons
// ? Next button
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

// ? Defining actions on click
nextBtn.addEventListener("click", function () {

    // * Getting carousels images
    const activeImage = document.querySelector(
        ".carousel-current-image img.active"
    );

    // * Removing active class
    activeImage.classList.remove("active");

    // * Adding images
    activeElement++;

    // * If at list end, restart from zero
    if (activeElement === 6) {
        activeElement = 0;
    }

    // * Adding active class
    imageSelect[activeElement].classList.add("active");
});

// * Selecting all imgs in the html div
const imageSelect = document.querySelectorAll(".carousel-current-image img");


// ! Previous button
prevBtn.addEventListener("click", function () {
    imageSelect[activeElement].classList.remove("active");

    activeElement--;

    // * If at list start, restart from -1
    if (activeElement === -1) {
        activeElement = imagesList.length - 1;
    }

    // * Adding active class
    imageSelect[activeElement].classList.add("active");
});





