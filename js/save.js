
var input = document.querySelector('.input'); 
var saveBtn = document.getElementById('save'); //Button to press


const saveData = (data, fileName) => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var json = JSON.stringify(data); 
    const blob = new Blob([json], {type: "text/plain; charset=utf-8"}); 

    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
}




