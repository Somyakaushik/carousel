const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
console.log(slides);
var count = 0;

slides.forEach(
        (slide,index)=>{
            slide.style.left = `${index * 100}%`
        }
)

const updateDots = () => {
    dots.forEach((dot, index) => {
        if (index === count) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    })
}

const goPrev = () => {
    if (count > 0) {
        count--;
    } else {
        count = slides.length - 1; 
    }
    slideImage();
}

const goNext = () => {
    if (count < slides.length - 1) {
        count++;
    } else {
        count = 0; 
    }
    slideImage();
}

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
    updateDots();
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        count = index;
        slideImage();
    });
});

const autoSlide = () => {
    setInterval(() => {
        goNext();
    }, 5000);
};

autoSlide();
updateDots();