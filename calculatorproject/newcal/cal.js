    function clearN() {
    document.getElementById('inputbox').value = '';
}

function del() {
    let currentvalue = document.getElementById('inputbox').value.split("");
    currentvalue.pop('')
    document.getElementById('inputbox').value = currentvalue.join('');

}

function display(val) {
    let output = document.getElementById('inputbox')
    console.log(output, val);


    console.log("output value", output.value);
    if (val == "+" || val == "-" || val == "*" || val == "/") {
        if (output.value.includes('+')) {
            console.log("output", output);
            let plus = output.value.split('+')
            let total = Number(plus[0]) + Number(plus[1])
            output.value = total
        } else if (output.value.includes('-')) {
            let minus = output.value.split('-')
            let total = Number(minus[0]) - Number(minus[1])
            output.value = total
        } else if (output.value.includes('*')) {
            let multi = output.value.split('*')
            let total = Number(multi[0]) * Number(multi[1])
            output.value = total
        } else if (output.value.includes('/')) {
            let division = output.value.split('/')
            let total = Number(division[0]) / Number(division[1])
            output.value = total
        }
    }
    output.value += val

}

function cal() {
    let output = document.getElementById('inputbox')

    if (output.value.includes('+')) {
        let plus = output.value.split('+')
        console.log(plus);
        let total = parseInt(plus[0]) + parseInt(plus[1])
        output.value = total
    } else if (output.value.includes('-')) {
        let minus = output.value.split('-')
        let total = parseInt(minus[0]) - parseInt(minus[1])
        output.value = total
    } else if (output.value.includes('*')) {
        let multi = output.value.split('*')
        let total = parseInt(multi[0]) * parseInt(multi[1])
        output.value = total
    } else if (output.value.includes('/')) {
        let division = output.value.split('/')
        let total = parseInt(division[0]) / parseInt(division[1])
        output.value = total
    }

}