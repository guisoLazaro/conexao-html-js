
//post02
const postagem2 = document.getElementById("post02")
const postagem3 = document.querySelector("#post02 .post-texto")
console.log(postagem2)
console.log(postagem3)

//formulario
const formulario = document.getElementById("formulario")
console.log(formulario)

//links redes sociais
const linksRedesSociais= document.getElementsByTagName("footer")
console.log(linksRedesSociais)

//link primeiro post
const linkPrimeiroPost = document.querySelector(".post-texto a")
console.log(linkPrimeiroPost)

//negrito segundo post
const negitoSegundoPost = document.querySelector("#post02 .post-texto strong").innerText
console.log(negitoSegundoPost)

//input nome formulario
const inputNome = document.querySelector("#nome")
console.log(inputNome)


//links da lista do footer
const linksListaFooter = document.querySelector("footer ul").innerText
console.log(linksListaFooter)

//links da lista do footer
const linksListaFooter2 = document.querySelector("footer .lista_redes").innerText
console.log(linksListaFooter2)

const linksListaFooter3 = document.querySelectorAll("footer .lista_redes a")

function imprimirTodosLinks(lista){
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i].innerHTML)
    }
    console.log("Quantidade de itens na lista: " + lista.length + " elementos")
}

imprimirTodosLinks(linksListaFooter3)

