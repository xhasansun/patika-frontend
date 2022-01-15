

let userList = document.querySelector('#list')
userList.addEventListener('onclick', newElement)

function newElement() {
    const TASK = document.querySelector('#task')
    if (!TASK.value) {
        $('.error').toast('show')
        console.log('boş')
    } else {
        addItem(TASK.value)
        TASK.value = ""
        $('.success').toast('show')
    }
    key()
    deleteFunction()
}


function addItem(task) {
    let liDOM = document.createElement('li')
    let spanDOM = document.createElement('span')
    let close = document.createTextNode('x')
    spanDOM.append(close)
    spanDOM.classList = "close"
    let taskInput = document.createTextNode(`${task}`)
    liDOM.append(spanDOM)
    liDOM.append(taskInput)
    userList.append(liDOM)
}

function deleteFunction(){
    
    let close = document.getElementsByClassName("close");

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function key(){
    document.getElementById('liveToastBtn')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });
}


let list = document.querySelector('#list');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);

