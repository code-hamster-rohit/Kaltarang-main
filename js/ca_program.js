gsap.registerPlugin(ScrollTrigger);

const columns = ["#column1", "#column2", "#column3", "#column4", "#column5", "#column6", "#column7", "#column8", "#column9", "#column10", "#column11", "#column12"];

columns.forEach((column, index) => {
    const direction = index % 2 === 1 ? -1 : 1;
    const xOffset = window.innerWidth < 1000 ? direction * 1000 : direction * 1000;

    gsap.from(`${column}`, {
        scrollTrigger: {
            trigger: `${column}`,
            start: "top bottom",
            end: "bottom 80%",
            scrub: window.innerWidth < 1000 ? 1 : 0.5,
            markers: false,
            toggleActions: "restart pause reverse pause",
        },
        x: xOffset,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
    });
});
