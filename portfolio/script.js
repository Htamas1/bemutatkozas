document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FF6347"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


window.addEventListener("load", function() {
    document.body.style.opacity = "1";
});
