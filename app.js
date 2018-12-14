const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
var ul = document.querySelector('ul');
var liis = document.querySelectorAll('li');
const listUl = listDiv.querySelector('ul');
let lis = ul.children;
let elis = ul.querySelectorAll('li');
//let upClass =  document.querySelectorAll('.Up');


function ButtonsCreate(enterelement) {
let remove = document.createElement('button');
  let down = document.createElement('button');
  let up = document.createElement('button');
  remove.textContent = "Remove";
  remove.className = "Remove"
  down.textContent = "Down";
  down.className = "Down";
  up.textContent = "Up";
  up.className = "Up"
  enterelement.appendChild(up);
  enterelement.appendChild(down);
  enterelement.appendChild(remove);
}

for (let i=0; i<elis.length; i++) {
  ButtonsCreate(lis[i]);
} 

const upButtons = ul.querySelectorAll('.Up');
const downButtons = ul.querySelectorAll('.Down');


function redundantButton() {
let funcul = document.querySelector('ul');
  
let topLi = funcul.firstElementChild;
let topUpButton = funcul.firstElementChild.querySelector('.Up');
let topDownButton = funcul.firstElementChild.querySelector('.Down');
let bottomDownButton = funcul.lastElementChild.querySelector('.Down');
topUpButton.style.backgroundColor = "#fff";
topUpButton.style.border = "none";
bottomDownButton.style.backgroundColor = "#fff";
bottomDownButton.style.border = "none";
}


toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

  
//removeItemButton.addEventListener('click', () => {
//  let ul = document.getElementsByTagName('ul')[0];
//  let li = document.querySelector('li:last-child');
//  ul.removeChild(li);
//});

  

  listUl.addEventListener('click', (event) => { 
  

    
    
    if (event.target.textContent === "Remove") {
let parent = event.target.parentNode;
let grandparent = parent.parentNode;     
      grandparent.removeChild(parent);
    }

if (event.target.textContent === "Up") {

//  let listTop = listDiv.querySelectorAll('.Uper')[0]; removed mobility restriction based on class
  
//  console.log(listDiv); Check to see that list Div actually changes on a local level -- not Global -- after each click. so listTop always references the top .Uper element
  // Can do below or (event.target.previousElementSibling === null) as if condition
  
  if (event.target.parentNode.previousElementSibling === null) {
  
  } else {
  
let parent = event.target.parentNode;
let grandparent = parent.parentNode; 
//  console.log(parent.previousElementSibling);
  grandparent.insertBefore(parent, parent.previousElementSibling);
  
  }

}
    
if (event.target.textContent === "Down") {  
  
      let parent = event.target.parentNode;
      let uncle = parent.nextElementSibling;
      let grandparent = parent.parentNode;
  
  if (uncle === null) {
  
  
  } else{
  grandparent.insertBefore(uncle, parent);
  }
  
//  redundantButton();
    }
    
    //       if (event.target.textContent === "Up") { 
//let listitem = event.target.parentNode;
//let itemabove = listitem.previousElementSibling;     
//let itemstore = itemabove.innerHTML;   
//        itemabove.innerHTML = listitem.innerHTML;
//        listitem.innerHTML = itemstore;
    //
//         My solution to switching items around. Maybe not the cleanest but I like it'

      //    event.target.textContent= event.target.textContent.toUpperCase();

//      let parent = event.target.parentNode; /*Alternative less clean resolution to focusing only on ul li buttons using IF*/
//
//      if (grandparent.tagName === "UL"){
//      grandparent.removeChild(parent);
//      }

 //   }
 
    
    for (let i=0; i<ul.children.length; i++){
      upButtons[i].style.backgroundColor = "#52bab3";
      downButtons[i].style.backgroundColor = "#508abc";   
    }
    
    redundantButton();
    
  });

// ADD new item event handler

 addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li); 
ButtonsCreate(li);
addItemInput.value = '';
});
  
redundantButton();
