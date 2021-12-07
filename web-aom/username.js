let typeName = document.querySelector("#name");
checkName();

function checkName() {
    let name = prompt("please input * your nickname *");
    document.getElementById("name").innerHTML = name;
  if (name !== 'aom' || name == null) {
    let contenttext = "Warning! This web not for you 🥺 .";
    document.getElementById("content").innerHTML = contenttext;
    let blockButton = document.querySelector("#buttonChange");
    blockButton.setAttribute("style","display : none;");
}else{
    localStorage.setItem('username', name);
    typeName.innerHTML = name;
}

}


