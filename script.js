// Обновить надпись на экране

const updateScreen = () => {
	screen.textContent = screenValue;
};

const screen = document.querySelector(".calculator__input-field");
let screenValue = screen.textContent;

// Удаление всех элементов экрана (Кнопка AC)

const clearDisplay = () => {
	screenValue = "0";
	updateScreen();
};

// Написать число (Кнопки от 0 до 9)

appendToDisplay = number => {
	if (screenValue === "0") {
		screenValue = number;
		updateScreen();
	} else {
		screenValue += number;
		updateScreen();
	}
};

// Выбор операции (Кнопки деления, умножения, минус, плюс)

let operation;
let number1 = 0;
let number2 = 0;

const chooseOperation = op => {
	operation = op;
	number1 = parseInt(screenValue);
	screenValue = "0";
	updateScreen();
};

// Вычислить (Кнопка "=")

let result;

const calculate = () => {
  //todo прм продолжителном нажатии на '=' выполнять op
  
	if (operation && !result) {
		number2 = parseInt(screenValue);
		switch (operation) {
			case "÷":
				result = number1 / number2;
				break;
			case "×":
				result = number1 * number2;
				break;
			case "-":
				result = number1 - number2;
				break;
			case "+":
				result = number1 + number2;
				break;
		}
		screenValue = result;
		updateScreen();
  } else if (operation && result) {
    number1 = result
		switch (operation) {
			case "÷":
				result = number1 / number2;
				break;
			case "×":
				result = number1 * number2;
				break;
			case "-":
				result = number1 - number2;
				break;
			case "+":
				result = number1 + number2;
				break;
		}
		screenValue = result;
		updateScreen();
	}
};
