const button = document.querySelector("#btn");

button.onmouseleave = (e) => {
    e.target.style.background = "#3a3a3a";
    button.style.setProperty("--border-color", "none");
};

button.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(146, 108, 146, 1) 1px, rgba(58, 58, 58, 1))`;
    button.style.setProperty("--border-color", `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(128, 0, 128, 0.7),rgba(128, 0, 128, 0) )`);
});
