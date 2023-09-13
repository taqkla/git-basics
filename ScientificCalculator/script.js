let toggle = false;
function toggleTheme() {
    let calculator = document.querySelector(".calculator");

    toggle = !toggle;

    if (toggle) {
        calculator.classList.add('dark-mode');
    } else {
        calculator.classList.remove('dark-mode');
    }
}

function append(str) {
    const val = document.getElementById('input').value;
    document.getElementById('input').value = val + str;
}

function clearDisplay() {
    document.getElementById('input').value = "";
}

function deleteCharacter() {
    const val = document.getElementById('input');
    input.value = input.value.slice(0, -1);
}

function calculate() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    // Homework : write parser to convert radian to degree from the input string.
    try {
        let result = eval(input);
        document.getElementById("input").value = result;
        output.innerText = "";
    } catch (error) {
        output.innerText = "Invalid input";
    }
}

// function eval1() {
//     let input = document.getElementById("input").value;
//     let output = document.getElementById("output");
//     // Homework : write parser to convert radian to degree from the input string.
//     try {
//         let result = eval(input);
//         document.getElementById("input").value = result;
//         output.innerText = "";
//     } catch (error) {
//         output.innerText = "Invalid input";
//     }
// }