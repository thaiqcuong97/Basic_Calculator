let inputShow = document.getElementById("result");
let resetInput = document.getElementById("reset_input");

function Reset() {
  inputShow.value = "";
}

function Delete() {
  inputShow.value = inputShow.value.substr(0, inputShow.value.length - 1);
}

function Equal() {
  if (inputShow.value === "" || inputShow.value === undefined) {
    inputShow.value = 0;
  } else {
    inputShow.value = eval(inputShow.value);
  }
}

/* chia cho 100 */
function Percent() {
  inputShow.value = inputShow.value / 100;
}

/* chuyển số âm sang dương và ngược lại */
function ChangeValue() {
  if (inputShow.value > 0) {
    inputShow.value *= -1;
  } else inputShow.value *= -1;
}
