// function addItem(){
//     let data1 = document.getElementById('input').value
//     let five = document.createElement('h5')
//     let upp = data1.toUpperCase()
//     five.innerHTML = upp
//     document.getElementById('data').append(five)
//     document.getElementById('input').value = " "

// }



let  itm = []
function addItem(){
    let data1 = document.getElementById('input').value
    itm.push(data1)
    // console.log(itm);
    str = " "
    for(let i = 0; i< itm.length; i++){
        str += '<p>' + itm[i] + '</p>'
    
    }
    console.log(str);
    document.getElementById('data').innerHTML = str.toUpperCase()
    document.getElementById('input').value = " "
}