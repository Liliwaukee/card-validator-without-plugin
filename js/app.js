const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});


const cvvValidation = number => {
  if(number.value == 1){
    number.classList.add("sucess");
    console.log("hola");
  }
}



const validateCardDetails = element => {
  //escribe tu código aqui
  const arrayForm =  Array.from(element);

  const numberCard = arrayForm[0];
  const dueDateCard = arrayForm[1];
  const cvvCard = arrayForm[2];
  const nameCard = arrayForm[3];

  cvvValidation(cvvCard);
}
validateCardDetails(form)
/*
CVV (todas son necesarias)
No string vacio
Sean SOLO 3 digitos (no string ni boolean ni nada)
los numeros sean positivos (que numeros son positivos de 3 digitos¿)
*/
