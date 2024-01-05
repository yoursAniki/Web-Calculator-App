// Обновить надпись на экране

const updateScreen = () => {
	screen.textContent = screenValue;
};

const screen = document.querySelector(".calculator__input-field");
let screenValue = screen.textContent;

// Удаление всех элементов экрана (Кнопка AC)

const clearDisplay = () => {
  screenValue = "0";
  number1 = 0
  number2 = 0
  delete result
  delete operation
	updateScreen();
};

// Написать число (Кнопки от 0 до 9)

appendToDisplay = number => {
	if (screenValue === "0") {
		screenValue = number;
	} else {
		screenValue += number;
	}
	updateScreen();
};

// Выбор операции (Кнопки деления, умножения, минус, плюс, процент)

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
	if (operation) {
		number2 = parseInt(screenValue);
		switch (operation) {
			case "%":
				result = (number2 / 100) * number1;
				break;
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
		number1 = 0; // Обнуляем number1 после завершения вычислений
		screenValue = result;
		updateScreen();
	}
};
