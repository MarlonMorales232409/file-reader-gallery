"use strict";

// Leer unb solo archivo 
/*
const readFile = (ar)=>{
	const reader = new FileReader();
	reader.readAsText(ar);
	reader.addEventListener('load',(e)=>{
		console.log(e.currentTarget.result)
	})
}

const file = document.getElementById("files");

file.addEventListener('change',(e)=>{
	readFile(file.files[0])
}) 

*/
 
// Leer multiples archivos

/*
const file = document.getElementById("files");
file.addEventListener('change',(e)=>{
	readFile(file.files)
}) 

const readFile = (ar)=>{
	for(let i = 0; i < ar.length; i++){
		const reader = new FileReader();
		reader.readAsText(ar[i]);
		reader.addEventListener('load',(e)=>{
			console.log(e.currentTarget.result)
		})
	}
}
*/

// Uso de readAsDataURL
const file = document.getElementById("files");
file.addEventListener('change',(e)=>{
	readFile(file.files)
}) 

const readFile = (ar)=>{
	for(let i = 0; i < ar.length; i++){
		const reader = new FileReader();
		reader.readAsDataURL(ar[i]);
		reader.addEventListener('load',(e)=>{
			let image = `<img src='${e.currentTarget.result}'>`
			document.querySelector(".resultado").innerHTML += image;
		})
	}
}

