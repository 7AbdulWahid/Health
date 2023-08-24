// scripting the navbar
function responsiveNav() {
    let hmbrgr = document.querySelector(".hambrgr");
    let navLinks = document.querySelector(".links_part");
    let flg = 0;
    hmbrgr.addEventListener('click', function () {
        if (flg == 0) {
            navLinks.classList.add("nav_click");
            flg = 1;
            let navTl = gsap.timeline();

            navTl.to(".b-2", {
                transform: "translate(10rem)",
                duration: 0.2,
            });
            navTl.to(".b-1", {
                width: "1.17rem",
                transform: "rotate(45deg)",
                duration: 0.1
            }).to(".b-3", {
                width: "1.17rem",
                transform: "rotate(-45deg)",
                duration: 0.1
            })
        }
        else {
            navLinks.classList.remove("nav_click");
            flg = 0;
            let navTl = gsap.timeline();


            navTl.to(".b-1", {
                width: "1.75rem",
                transform: "rotate(0)",
                duration: 0.1
            }).to(".b-3", {
                width: "1.75rem",
                transform: "rotate(0)",
                duration: 0.1
            })
            navTl.to(".b-2", {
                transform: "translate(0)",
                duration: 0.2,
            });
        }
    });
}
responsiveNav();

gsap.to("nav", {
    height: "8vh",
    scrollTrigger: {
        trigger: "nav",
        scroll: ".smooth-scroll",
        start: "top -10%",
        end: "top -30%",
        scrub: 2,
        // markers: true
    }
});


  
window.onload = function() {
    document.getElementById("loader").style.display = "none";
  };