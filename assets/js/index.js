/*
    Show elements as a user scrolls
*/
const scrollShowOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let scrollShowTarget = document.querySelectorAll(".fade-in");
const scrollShow = new IntersectionObserver(function (entries, scrollShow) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      scrollShow.unobserve(entry.target);
    }
  });
}, scrollShowOption);

function scrollShowListener() {
  scrollShowTarget.forEach((target) => {
    scrollShow.observe(target);
  });
}

$(() => {
  setTimeout(scrollShowListener, 200);
});

/*
    show toTheTop button everytime user sees the bottom of the page
*/
toTheTopOption = {threshold: 0.5};

let toTheTopTarget = document.querySelector('#toTopNav');
const toTheTop = new IntersectionObserver(function (entries, toTheTop) {
    entries.forEach(entry => {
        // mitigate riks of toggling mismatch
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
        console.log(entry.target);
    })
}, toTheTopOption);
toTheTop.observe(toTheTopTarget);

/*
    click nav link to scroll to specific section
*/

$("#scrollToSkill").on("click", () => {
  setTimeout(() => {
    $("#skillSection")[0].scrollIntoView({ behavior: "smooth" });
  }, 200);
});

$("#scrollToProject").on("click", () => {
  setTimeout(() => {
    $("#projectSection")[0].scrollIntoView({ behavior: "smooth" });
  }, 200);
});

$("#scrollToContact").on("click", () => {
    setTimeout(() => {
        $("#contactSection")[0].scrollIntoView({ behavior: "smooth" });
    }, 200);
});

$("#toTopNav").on("click", () => {
    setTimeout(() => {
        $("#topNav")[0].scrollIntoView({ behavior: "smooth"});
    }, 200);
});