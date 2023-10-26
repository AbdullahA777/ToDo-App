let addBtn = document.querySelector('#addBtn')
let inputBox = document.querySelector('input')
let tasks = document.querySelector('ul')

function addValue(e) {  
    if (inputBox.value == '') {
        alert('kindly fill this box ')
        saveData()
    }
    else{
        ulChild = `
        <li>${inputBox.value}<span class="cross">&#10060;</span></li>`
        tasks.innerHTML += ulChild
        saveData()
    }
    inputBox.value = ''
}

tasks.addEventListener('click', (e)=>{
    if (e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
    else if (e.target.tagName ==="LI") {
        e.target.classList.toggle('through')
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", tasks.innerHTML)
}
function showTask() {
    tasks.innerHTML = localStorage.getItem("data")
}
showTask()