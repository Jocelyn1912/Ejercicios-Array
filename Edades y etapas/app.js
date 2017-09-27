// Pidiendo la edad en años, para determinar su etapa
var age = parseInt(prompt("¿Cuántos años Tienes?"));
if (age >=1 && age <3) {
	alert("Según tu edad estás en la etapa Toddler");
} else if (age >=3 && age <5){
	alert("Según tu edad estás en la etapa Preschooler");
} else if (age >=5 && age <12){
	alert("Según tu edad estás en la etapa Grande Schooler");
} else if (age >=12 && age <18){
	alert("Según tu edad estás en la etapa Teennager");
} else if (age >=18 && age <21){
	alert("Según tu edad estás en la etapa Young Adult");
} else if (age >=21){
	alert("Según tu edad estás en la etapa Adult");
} else {alert("Error, no has ingresado tu edad o no la ingresaste en años, por favor vuelvelo a intentar");
};