/**
 * 
 */
let xhr = new XMLHttpRequest();

window.onload = function()
{
	document.getElementById("btnReadIndividual").addEventListener("click", ReadIndividual);
}

function ReadIndividual()
{
	xhr.onload = funcionCallBack;
	let idProduct = document.getElementById("txtIdProduct").value;
	
	let miFormulario = new FormData();
	miFormulario.append("idProduct", idProduct);
	
	xhr.open("POST","ReadIndividualServlet");
	xhr.send(miFormulario);
}

function funcionCallBack()
{
	document.getElementById("resultado").innerHTML = xhr.responseText;
}