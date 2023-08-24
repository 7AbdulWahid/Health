//              ------------------------> Making timelines <------------------------
let tl_1 = gsap.timeline();
let tl_2 = gsap.timeline();
let tl_3 = gsap.timeline();



//              ------------------------> Home section animations <------------------------

gsap.from(".hero_btns ", {
    transform: "translate(0, 100%)",
    opacity: 0,
    duration: 0.2
});

gsap.from("nav", {
    top: "-100%",
    duration: 0.5
});

tl_1.from(".num_hed", {
    delay: 0.4,
    scale: 0,
    duration: 0.3
});

tl_1.from(".num_para", {
    transform: "translate(-100%)",
    opacity: 0,
    duration: 0.2
});

tl_2.from(".hed_top", {
    transform: "translate(-100%)",
    duration: 0.25,
    opacity: 0
});

tl_2.from(".hed_mn", {
    transform: "translate(-100%)",
    duration: 0.25,
    opacity: 0
});

tl_3.from(".left_part", {
    top: "-10%",
    duration: 0.2
});

tl_3.from(".bottom_part", {
    right: "-100%",
    duration: 0.2
});

//              ------------------------> The heading_1 typing effect <------------------------

//    ===========================> Some Use of Chat GPT 😉 <=================================== 👇

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Loop through each ".heading_1" element
    gsap.utils.toArray(".heading_1").forEach(function (element) {
        gsap.from(element, {
            delay: 0.2,
            width: 0,
            borderRight: "2px solid",
            overflow: "hidden",
            duration: 0.6,
            scrollTrigger: {
                trigger: element, // Set the trigger to the current element
                //  markers: true,   // Display markers for testing
                start: "top bottom  ", // Animation starts when element is at the center of the viewport
                end: "bottom  ", // Animation ends when element's bottom is at the center of the viewport
            }
        });
    });
});
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\


//              ------------------------> What we do section animation <------------------------
gsap.from(".serv_card_1", {
    transform: "translate(100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: ".serv_card_1",
        scroll: ".smooth-scroll",
        start: "top bottom  ",
        end: "bottom  ",
    }
});
gsap.from(".serv_card_2", {
    transform: "translate(100%)",
    opacity: 0,
    display: "none",
    delay: 0.2,
    scrollTrigger: {
        trigger: ".serv_card_2",
        scroll: ".smooth-scroll",
        start: "top bottom  ",
        end: "bottom  ",
    }
});
gsap.from(".serv_card_3", {
    transform: "translate(100%)",
    opacity: 0,
    display: "none",
    delay: 0.4,
    scrollTrigger: {
        trigger: ".serv_card_3",
        scroll: ".smooth-scroll",
        start: "top bottom  ",
        end: "bottom  ",
    }
});


//              ------------------------> About section animation <------------------------
gsap.from(".abt_card_1", {
    transform: "translate(100%)",
    opacity: 0,
    display: "none",
    scrollTrigger: {
        trigger: ".abt_card_1",
        scroll: ".smooth-scroll",
        start: "top bottom  ",
        end: "bottom  ",
    }
});
gsap.from(".abt_card_2", {
    transform: "translate(100%)",
    opacity: 0,
    display: "none",
    delay: 0.15,
    scrollTrigger: {
        trigger: ".abt_card_2",
        scroll: ".smooth-scroll",
        start: "top bottom  ",
        end: "bottom  ",
    }
});
gsap.from(".abt_card_3", {
    transform: "translate(100%)",
    opacity: 0,
    display: "none",
    delay: 0.3,
    scrollTrigger: {
        trigger: ".abt_card_3",
        scroll: ".smooth-scroll",
        start: "top bottom  ",
        end: "bottom  ",
    }
});

//              ------------------------> Why choose Health section animation <------------------------

let line = document.querySelectorAll(".w_line");
delay1 = 0;
line.forEach((el) => {
    gsap.from(el, {
        transform: "translate(100%)",
        display: "none",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            scroll: ".smooth-scroll",
            start: "top bottom  ",
            end: "bottom  ",
        }
    });
    delay1 += 0.15
});
gsap.from(".A_doctors", {
    top: "0%",
    display: "none",
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".A_doctors",
        scroll: ".smooth-scroll",
        start: "100% bottom",
        end: "200%",
    }
});

//              ------------------------> Doctors section animation <------------------------
gsap.from(".doc-cards-sec", {
    transform: "translateY(100%)",
    duration: 0.75,
    opacity: 0,
    scrollTrigger: {
        trigger: ".doc-cards-sec",
        scroll: ".smooth-scroll",
        start: "top bottom",
        end: "bottom",
    }
});

//              ------------------------> Review section animation <------------------------
gsap.from(".line-1", {
    transform: "translate(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: ".line-1",
        scroll: ".smooth-scroll",
    }
})

gsap.from(".top_comma", {
    duration: 1,
    left: "-20%",
    top: "-10%",
    scrollTrigger: {
        trigger: ".top_comma",
        scroll: ".smooth-scroll",
        start: "top bottom",
        end: "bottom",
    }
});

gsap.from(".bottom_comma", {
    duration: 1,
    right: "-20%",
    display: "none",
    bottom: "-10%",
    scrollTrigger: {
        trigger: ".top_comma",
        scroll: ".smooth-scroll",
        start: "top bottom",
        end: "bottom",
    }
});