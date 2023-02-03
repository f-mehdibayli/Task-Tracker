const inputDiv=document.querySelector('.input-div')
const btn=document.querySelector('.add')

const deleteIcon = document.querySelector(".delete-icon")

const listIcon=document.querySelector('.list')
listIcon.addEventListener('click',(e)=>{
  e.preventDefault();
  // e.children[0].src='./img/down_arrow_black.svg';
  console.log(e.children)
 const input=document.querySelectorAll('.enter')
 input.value.sort((a,b)=> a>b  )
  

})



const addDeleteFunction = (el) => {
  el.addEventListener('click', (e) => {
    e.currentTarget.parentElement.remove();
  });
  
  el.addEventListener('mouseenter', () => {
    console.log('children', el.children)
    el.children[0].src = "./img/delete_icon_color.svg";
  })
  el.addEventListener('mouseleave', () => {
    el.children[0].src = "./img/delete_icon.svg";
 })
}
addDeleteFunction(deleteIcon)

function newElement(e){
  e.preventDefault()
  const newDiv=document.createElement('div')
  newDiv.classList.add("input-div-child")
  const newInput=document.createElement('input')
  newInput.classList.add("enter");
  newInput.type = "text";
  const newSpan=document.createElement('span');

  addDeleteFunction(newSpan)
  newSpan.classList.add("delete-icon");
  const newImg=document.createElement('img')
  newImg.src = "./img/delete_icon.svg";
  newSpan.appendChild(newImg);
  newDiv.appendChild(newInput);
  newDiv.appendChild(newSpan);
  inputDiv.appendChild(newDiv)
}

btn.addEventListener('click',newElement)























// const enterValue=document.querySelector('enter')
// const deleteIcon=document.querySelectorAll('.delete-icon')

// deleteIcon.addEventListener('click',event=>{
//   event.preventDefault();
//   console.log(event.currentTarget.parentElement)
//   event.currentTarget.parentElement.remove()
// })


// const inputDivChild=document.querySelector('.input-div-child')
// buttonAdd.addEventListener('click',(event)=>{
//     const newBtn=document.createElement('input')
//     const newDiv=document.createElement('div')
//     const newDeleteIcon=document.createElement('img')

//     newDiv.classList.add('input-div-new')
//     newDeleteIcon.src='./img/delete_icon.svg'
//     newDeleteIcon.classList.add('.delete-icon')
//     newBtn.classList.add('new-button')

//     newDiv.appendChild(newBtn)
//     newDiv.appendChild(newDeleteIcon)
//     inputDiv.insertBefore(newDiv,inputDiv.lastElementChild);
//     event.preventDefault();
    

// })