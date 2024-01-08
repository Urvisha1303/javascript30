function display(value) {
    document.getElementById('inputbox').value += value;
}

function display(value) {
    var inputBox = document.getElementById('inputbox');

    switch (value) {
        case 'Ac':
            inputBox.value = '';
            break;
        case 'DE':
            inputBox.value = inputBox.value.slice(0, -1);
            break;
        case '=':
            try {
                inputBox.value = eval(inputBox.value);
            } catch (error) {
                inputBox.value = 'Error';
            }
            break;
        default:
            inputBox.value += value;
            break;
    }
}