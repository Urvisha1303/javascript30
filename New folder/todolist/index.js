let TODO = []

const adddata = ()=>{
    let Adddata = document.getElementById('textinput').value
   
    console.log(Adddata);
    TODO.push(Adddata)
    document.getElementById('textinput').value = ''
    console.log(TODO);
    displaydata(TODO)

}

const displaydata = (TODO)=>{
    console.log('todo', TODO);
    let addingdata = document.getElementById('boxclear')
    console.log(addingdata);
    document.getElementById('boxclear').innerText = ''
    
    // console.log(addingdata);

    TODO.forEach((value, index) => {
        let todoitem = document.createElement('div')
        todoitem.setAttribute('id', 'add')
        console.log(todoitem);
        let ptag = document.createElement('p')
        let buttontag = document.createElement('button')
        buttontag.addEventListener('click',() =>  deletedata(index))
        ptag.innerText = value
        buttontag.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
        todoitem.appendChild(ptag)
        todoitem.appendChild(buttontag)


        addingdata.append(todoitem)

    });

}

const deletedata = (index)=>{
    TODO.splice(index, 1)
    displaydata(TODO)
}