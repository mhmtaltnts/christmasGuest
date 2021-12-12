const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]





//Solution One
function writeList() {    
    /* for (let i=0; i<guests.length; i++){
      var node = document.createElement("li")
      var textNode = document.createTextNode(`${guests[i]}`)
      node.appendChild(textNode)
      guestList.appendChild(node)  
    } */
    let list =""
    guests.forEach((item, index)=> {
        list += `<li>${item}<i class="fa fa-trash" id="icon" onclick="deleteGuest(${index})"></i></li>`
        
    })

    guestList.innerHTML = list  
    input.value = ""
}


 function add(){
    let userValue = input.value
    guests.push(userValue)
    writeList()
    console.log(guests)
 }
 btn.addEventListener("click", add) 

 function deleteGuest(index){
    guests.splice(index, 1)
    console.log(index)
    writeList()
     
 }

/* btn.onclick = ()=> {
    let userValue = input.value
    guests.push(userValue)
    writeList()
    console.log(guests)
}
 */
writeList()

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


