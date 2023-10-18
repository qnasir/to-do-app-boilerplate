// Input tag
var inputText = document.getElementById("input")

// Add Button tag
var subBtn = document.getElementById("button")

// Todo list
var todoListTag = document.getElementById("todolist")

// & Array to store all todo elements , initially empty
// if(localStorage.getItem("todoArr")!=null){
//     todoArr = JSON.parse(localStorage.getItem("todoArr"))
// } else {
//     todoArr=[]
// }
var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []


display()

// When Add Button is Clicked
subBtn.addEventListener("click" , addItemToArrray)

// Id Input is on Focus and Enter is Clicked addItemToArray should be called to Add element to array
inputText.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        addItemToArrray()
    }
})

function addItemToArrray(event){

    // ! EXTRA event.target.value==inputText.value;

    //push the value to array if its not an empty string
    if(inputText.value!=""){
        todoArr.push(inputText.value)
        localStorage.setItem("todoArr",JSON.stringify(todoArr))
    }

    //reset the value of empty string""
    inputText.value=""

    display()
}

function display(){
    // Clear out previous old ones everytime we add one item to array and display it
    todoListTag.innerHTML = "";
    todoArr.map((curr,i)=>{
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
      </li>`;
        // Insert it inside <ul id="todoList">
      todoListTag.innerHTML += listItem;
    });
}

function deleteItem(index){
    //delete the element[index] from todoArr
    todoArr.splice(index,1)
    display()
}

function editItem(index){
    //get new Value from user
    var newValue = prompt("Pls Edit");
    //Insert the value to array at that index
    todoArr.splice(index,1,newValue);
    display();
}

document.getElementById("reset").addEventListener("click",()=>{
    todoArr=[]
    display()
})

// Local Storage
var cartArr = ["Book","Pen","Eraser"]
localStorage.setItem("cart",JSON.stringify(cartArr))

cartArr.push("scale")
localStorage.setItem("cart",JSON.stringify(cartArr))

var tempArr = JSON.parse(sessiongStorage.getItem("cart"))