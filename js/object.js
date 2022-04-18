
let btnid = document.querySelector('.btnid');
let box = document.querySelector('.demo')
btnid.addEventListener('click', ()=> {
    let outRequest = new XMLHttpRequest();
    
    outRequest.open(
        "Get", "https://learnwebcode.github.io/json-example/animals-1.json"
    );

    outRequest.onload = function() {
        let outData = JSON.parse(outRequest.responseText);
        renderHtml(outData)
    };
    outRequest.send()
})
function renderHtml(obj) {

    stringData = ""
    obj.forEach(element => {
        stringData += "<p>" +  element.name  + " is a " + element.species + "</p> " ;
        box.innerHTML =stringData
    });
}