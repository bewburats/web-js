const changeBtn = document.querySelector('#buttonChange');
const showTextContent = document.querySelector('#showtext');
const showImgContent = document.querySelector('#showImg');

showTextContent.setAttribute("style",'display : none;')
showImgContent.setAttribute("style",'display : none;')

changeBtn.onclick = function showText() {
    let showtext = document.getElementById("showtext");
    let showImg = document.getElementById("showImg");

    if (showtext.style.display === "none" || showImg.style.display === "none") {
        changeBtn.textContent='💞 HAPPY 4TH MOUTH WITH YOU 🦋';
        showtext.style.display = "block";
        showImg.style.display = "block";

    } else {
 
        changeBtn.textContent='✨ PLEASE CLICK HERE ✨';
        showtext.style.display = "none";
        showImg.style.display = "none";
    }
  }
