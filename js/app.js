const form = document.querySelector("form");



//---------FUNCIÓN PARA VALIDAR SÓLO NÚMEROS ------------
const onlyNumbers = e => {
  const key = window.event ? e.which : e.keyCode;
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}


//---------FUNCIÓN PARA VALIDAR TARJETA ------------
const numberCardValidation = (number) => {
  let cardNumber = number.value.split(""); //convertimos en array
  let inverse = cardNumber.reverse();//87541... números al revés
  let odd = 0;
  let even = 0;
  let evenPlus = 0;

    for(let i = 0; i < 16; i++){ //aquí sacamos la suma de numeros impares
      if(i % 2 !== 1){
        odd = odd + parseInt(inverse[i]);
      }
    }

        for(let j = 1; j < 16; j++){
          //sacamos el números pares menores a 4 y multiplicamos por 2
          if (j % 2 === 1 && parseInt(inverse[j]) <= 4){
            even = even + (parseInt(inverse[j])*2);
            // de aquí en adelante reasiganamos los valores mayores del
          } else if (j % 2 === 1 && inverse[j] == 5){
             evenPlus = evenPlus + parseInt(1);
          } else if (j % 2 === 1 && inverse[j] == 6){
             evenPlus = evenPlus + parseInt(3);
          } else if (j % 2 === 1 && inverse[j] == 7){
             evenPlus = evenPlus + parseInt(5);
          } else if (j % 2 === 1 && inverse[j] == 8){
             evenPlus = evenPlus + parseInt(7);
          } else if (j % 2 === 1 && inverse[j] == 9){
             evenPlus = evenPlus + parseInt(9);
          }
        }
      //hacemos la de nuestros numeros pares, pares mayores e impares y comprobamos si son módulo de 10
      let ckeckCard = even + odd + evenPlus;
      if(ckeckCard % 10 === 0){
        number.classList.add("sucess");
        return true;
      } else {
        number.classList.add("error");
        return false;
      }

}


//---------FUNCIÓN PARA VALIDAR MES Y AÑO ------------
const monthAndYear = number => {
  if (number.value.length == 2) {
    number.classList.add("sucess");
    return true;
  } else {
    number.classList.add("error");
    return false;
  }
}



//---------FUNCIÓN PARA VALIDAR CVV ------------
const cvvValidation = number => {
  if(number.value.length == 3){
    number.classList.add("sucess");
    return true;
  } else {
    number.classList.add("error");
    return false;
  }
}



//---------FUNCIÓN PARA NOMBRE Y APELLIDO ------------
const nameOwnCard = string => {
  const nameValue = string.value;
  const arrayName =  nameValue.split(" ");
  if(arrayName.length >= 2){
    string.classList.add("sucess");
    return true;
  } else {
    string.classList.add("error");
    return false;
  }
}


const validateCardDetails = element => {
  const arrayForm =  Array.from(element);
  const numberCard = arrayForm[0];
  const dueMonthCard = arrayForm[1];
  const dueYearCard = arrayForm[2];
  const cvvCard = arrayForm[3];
  const nameCard = arrayForm[4];

  cvvValidation(cvvCard);
  monthAndYear(dueMonthCard);
  monthAndYear(dueYearCard);
  numberCardValidation(numberCard);
  nameOwnCard(nameCard);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  if(validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});



//--------- ------------
const numberCard = document.getElementById('cn')
const cvvCard = document.getElementById('cvv')

numberCard.addEventListener("keypress", onlyNumbers, false);
cvvCard.addEventListener("keypress", onlyNumbers, false);




//4152313059935309
//4915665457040406
