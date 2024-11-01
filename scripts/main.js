const but = document.getElementById("helloBtn");
const str = document.getElementById("helloname");
function helloWorld(name){
    alert(`Hello, ${name}!`);
}
helloWorld("GDG on Campus Sogang");
but.addEventListener("click",()=>{
    helloWorld(str.value);
})