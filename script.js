const buttonAdd=document.querySelector('.add')
const inputDiv=document.querySelector('.input-div')





console.log(inputDiv)
let i;

// for(i=0; i<myNodelist.length; i++){

// }

const enterValue=document.querySelector('enter')
const deleteIcon=document.querySelector('.delete-icon')

deleteIcon.addEventListener('click',event=>{
  event.preventDefault();
  console.log(event.currentTarget.parentElement)
  event.currentTarget.parentElement.remove()
})
const inputDivChild=document.querySelector('.input-div-child')
buttonAdd.addEventListener('click',(event)=>{
    const newBtn=document.createElement('input')
    const newDiv=document.createElement('div')
    const newDeleteIcon=document.createElement('img')

    newDiv.classList.add('input-div-new')
    newDeleteIcon.src='./img/delete_icon.svg'
    newDeleteIcon.classList.add('creat-delete')
    newBtn.classList.add('new-button')

    newDiv.appendChild(newBtn)
    newDiv.appendChild(newDeleteIcon)
    inputDiv.insertBefore(newDiv,inputDiv.lastElementChild);
    event.preventDefault();
    

})