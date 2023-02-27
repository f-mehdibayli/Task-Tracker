const inputDiv=document.querySelector('.input-div')
const btn=document.querySelector('.add')

let sort = 'azalan'
const deleteIcon = document.querySelector(".delete-icon")

const listIcon=document.querySelector('.list')

listIcon.addEventListener('click',(e)=>{
  customSort()
  if (sort === 'azalan') {
    listIcon.children[0].src='./img/up_arrow_black.svg';
    sort = 'coxalan'
  } else {
    listIcon.children[0].src='./img/down_arrow_black.svg';
    sort = 'azalan'
  } 
})


function customSort() {
  const sonuncuEl = [...inputDiv.childNodes].find(item => !item.childNodes[0]?.value || item.childNodes[0]?.value === '');
  const allTodos = document.querySelectorAll('.input-div-child');
  let allTodosArr = [...allTodos].filter(item => item.children[0].value !== '' );
  let sortedArr = []
  if (sort === 'coxalan') {
    sortedArr = allTodosArr.sort((a, b) => {
      const aDeyeri = a.children[0].value;
      const bDeyeri = b.children[0].value;
      if (aDeyeri > bDeyeri) return -1
      if (aDeyeri < bDeyeri) return 1
      return 0
    })
  } else {
    sortedArr = allTodosArr.sort((a, b) => {
      const aDeyeri = a.children[0].value;
      const bDeyeri = b.children[0].value;
      if (aDeyeri > bDeyeri) return 1
      if (aDeyeri < bDeyeri) return -1
      return 0
    })
  }
  console.log('SortedArr: ', sortedArr);
  sortedArr.forEach(element => {
    inputDiv.insertBefore(element, sonuncuEl)
  });
}

listIcon.addEventListener('mouseenter',(e)=>{
  if (sort === 'azalan') {
    listIcon.children[0].src='./img/down_arrow_black.svg';
  } else {
    listIcon.children[0].src='./img/up_arrow_black.svg';
  } 
})
listIcon.addEventListener('mouseleave',(e)=>{
  if (sort === 'azalan') {
    listIcon.children[0].src='./img/down_arrow_gray.svg';
  } else {
    listIcon.children[0].src='./img/up_arrow_gray.svg';
  } 
})

const addDeleteFunction = (el) => { 6
    el.addEventListener('click', (e) => {
      if(inputDiv.children.length >1){
      e.currentTarget.parentElement.remove();
    }
    })
  
  
  
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

  const newInput=document.createElement('input');
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
  newInput.addEventListener('input', e => {
  newInput.value = e.target.value

  })
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