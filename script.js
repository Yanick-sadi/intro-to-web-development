function changeBackgroundColor(color){
let section = document.getElementById('coding-journey');
section.style.backgroundcolor = color;
}
console.log("ran")
document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#2CA02C"))
document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#FF7F0E"))
document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"))
