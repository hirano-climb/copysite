const pageTopBtn = document.querySelector(".page-top");
pageTopBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0, 
        behavior: "smooth" 
    });
});
window.addEventListener("scroll", ()=> {
    if (window.scrollY > 100) {
        pageTopBtn.classList.add("visible");
    } else {
        pageTopBtn.classList.remove("visible");
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    accordion();
});
const accordion = () => {
    const details = document.querySelectorAll(".js_details");
    details.forEach(element => {
        const summary = element.querySelector(".js_summary");
        const content = element.querySelector(".js_content"); 
        const icon = element.querySelector(".icon");       
        summary.addEventListener("click", (event) => {
            event.preventDefault();
            if (element.open) {
                const closeText = content.animate(
                    { 
                        height: [content.offsetHeight + 'px', 0], 
                        opacity: [1, 0]
                    }, {
                        duration: 150,
                        easing: "linear"
                    }
                );
                icon.animate(
                    { 
                        rotate: "0deg" 
                    },{
                        duration: 150,
                        pseudoElement: "::before",
                        easing: 'linear',
                        fill: 'forwards'
                    }
                );

                closeText.onfinish = () => {
                    element.removeAttribute("open");
                };
            } else {
                element.setAttribute("open", "true");
                content.animate(
                    { 
                        height: [0, content.offsetHeight + 'px'],
                        opacity: [0, 1]
                    }, {
                        duration: 150,
                        easing: "linear"
                    }
                );
                icon.animate(
                    { 
                        rotate: "180deg" 
                    }, {
                        duration: 150,
                        pseudoElement: "::before",
                        easing: 'linear',
                        fill: 'forwards'
                    }
                );
                        
            }
        });
    });
}
