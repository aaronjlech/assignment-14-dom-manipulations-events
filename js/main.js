// GO!
// TASK 1 -- Show/Hide Nav
var btnSelector = document.querySelector(".nav-btn")
var navMenuSelector = document.querySelector(".nav-menu")
var chngClass = function(evt){
   console.log(evt.srcElement.innerText)
   if(navMenuSelector.className === "nav-menu"){
      evt.srcElement.innerText = 'show nav'
      navMenuSelector.className = "nav-menu nav-menu-hidden"
   }else{
      navMenuSelector.className = "nav-menu"
      evt.srcElement.innerText = 'hide nav'
   }




}




//
btnSelector.addEventListener('click', chngClass )







// TASK 2 -- Select an Icon
var optSelector = document.querySelector('.wish-list')

var highlightOpt = function(evt){
   if(evt.target.className === "option"){
      evt.target.className = "option selected"

   }else if(evt.target.className === "option selected"){

      evt.target.className = "option"


   }


}

optSelector.addEventListener('click', highlightOpt)






// TASK 3 -- Move Item From List to List
var allLiEls = document.querySelectorAll('.standing-list li')
var goodList = document.querySelector('.good-standing-list')
var badList = document.querySelector('.probation-list')

var changeList = function(evt){

   var parentList = evt.target.parentNode.className
   if(parentList === "good-standing-list standing-list"){
      badList.appendChild(evt.target)
   }else{goodList.appendChild(evt.target)}


}
for(var i = 0; i < allLiEls.length; i++){
   allLiEls[i].addEventListener('click', changeList)
}



// TASK 4 -- Add Guest to List
// var createLi = document.addElement('li')
var inpSelector = document.querySelector('input')
var guestList = document.querySelector('.guest-list')
var addName = function(evt){

   if(evt.keyCode == 13){
      var createLiNode = document.createElement('li')
      console.log(inpSelector.value)

      createLiNode.textContent = inpSelector.value

      guestList.appendChild(createLiNode)
      createLiNode.className = "guest"
      inpSelector.value = ''


   }

}

inpSelector.addEventListener('keydown', addName)

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
