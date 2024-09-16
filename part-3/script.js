let initalPath = `M 150 250 Q 400 250 850 250`;
let finalPath = `M 150 250 Q 400 250 850 250`;

var string = document.querySelector(".string");

string.addEventListener("mousemove", (dets) => {
    // console.log(dets.x);
    // console.log(dets.y);

    gsap.from(" .string svg path", {
        attr: { d:`M 150 250 Q ${dets.x} ${dets.y} 850 250`},
        duration:.1,
        ease:"power3.out"
    }
    )
})

string.addEventListener("mouseleave", (dets) => {
    // console.log(dets.x);
    // console.log(dets.y);
    
    gsap.to(" .string svg path", {
        attr: { d:finalPath},
        duration:1.5,
        ease:"elastic.out(.5,.08)"
    }
    )
})

//  string.addEventListener("mouseleave",()=>{
//     console.log("leaved")
//  })

//  string.addEventListener("mousemove",()=>{
//     console.log("moving")
//  })