var number = prompt("Напиши число от 1 до 20" , "");
for (i = 1; i <= 10; i++) {
  if (number >= 1 && number <= 20); {
  console.log(number + ":" + " " + number + "x" + i + "=" + number * i);
  }
}

// проверку следует вынести из цикла, возможно обернуть в do while пока не получит валидное значение number
// посмотрите вашу конкатинацию, она избыточна в месте ":" + " "
