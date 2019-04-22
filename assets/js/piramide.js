const boton=document.getElementById("boton")
        
boton.addEventListener("click", piramide)
        
function piramide() {
    const tamaño=document.getElementById("entrada").value
    const simbolo=document.getElementById("entrada2").value
    const entrada3=document.getElementById("entrada3")
    const color=entrada3.options[entrada3.selectedIndex].text
    let ast=simbolo
    let text=" "
    for(var i=0;i<tamaño;i++) {
        text+=ast+"<br>"
        console.log(ast)
        const v=simbolo
        ast+=v
    }
    console.log(color)
    document.getElementById("demo").style.color=color
    document.getElementById("demo").innerHTML=text
}