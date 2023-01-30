const buttonAdd=document.querySelector('.add')
const formElement=document.querySelector('.form')

const space=document.querySelector('.space')






buttonAdd.addEventListener('click',(event)=>{
    const newBtn=document.createElement('input')
    newBtn.classList.add('new-button')
    formElement.insertBefore(newBtn, space);
    event.preventDefault();
    

})