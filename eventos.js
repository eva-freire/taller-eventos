document.getElementById("divBtn").addEventListener("click", () => {
    alert ("Hola, soy el div!");
} )

function saludar(event){
    alert('Hola!');
    event.stopPropagation();
}