// Image List
const imagesList = [
    "https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg",
    "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg",
    "https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
    "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
    "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg",
    "https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg"
];

// Selecting html output
const imageWrapper = document.getElementById("wrapper-images");

// Selecting active element
let activeElement = 0;

// Creating loop for ImageList
for (let imageSlide = 0; imageSlide < imagesList.length; imageSlide++) {
    // Creating a new image (element)
    const newImage = document.createElement("img");

    // Giving attributes to the new image (element)
    newImage.setAttribute("src", imagesList[imageSlide]);

    // Giving conditions to active class
    if (imageSlide === activeElement) {
        newImage.classList.add("active");
    }

    // Adding element to the parent
    imageWrapper.appendChild(newImage);
}

// Defining buttons
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

// Selecting all imgs in the html div
const imageSelect = document.querySelectorAll("#wrapper-images img");

// Next button
nextBtn.addEventListener("click", function () {
    imageSelect[activeElement].classList.remove("active");
    activeElement = (activeElement + 1) % imagesList.length;
    imageSelect[activeElement].classList.add("active");
});

// Previous button
prevBtn.addEventListener("click", function () {
    imageSelect[activeElement].classList.remove("active");
    activeElement = (activeElement - 1 + imagesList.length) % imagesList.length;
    imageSelect[activeElement].classList.add("active");
});
