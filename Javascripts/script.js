let inputShow = document.getElementById("result");

function Reset() {
  inputShow.value = "";
}

function Delete() {
  inputShow.value = inputShow.value.substr(0, inputShow.value.length - 1);
}
function Equal() {
  //  console.log(inputShow.value)
  if (inputShow.value && inputShow.value === "undefined") {
    inputShow.value = 0;
    console.log('xx',inputShow.value)
  } else inputShow.value = eval(inputShow.value);
}
