
fetchMonster()
createForm()
document.querySelector('#monster-form').addEventListener('submit', (event) => {
  event.preventDefault()

  let name = document.getElementById('name-Id').value 
  let age = document.getElementById('age-Id').value 
  let description = document.getElementById('descript-Id').value 

  monsterObj = {
    name, 
    age,
    description
  }
  console.log(monsterObj)

postNewMonster(monsterObj)
  
})



// /?_limit=50&_page=1

//fetch from http://localhost:3000/monsters
//show forEach monster age, name and description
//show data


function fetchMonster() {
  const monsterContainer = document.getElementById('monster-container')
  fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(resp => resp.json())
    .then(monsterData => {
      console.log(monsterData)
      monsterData.forEach((monster) => {

        let card = document.createElement('div')
        let name = document.createElement('h2')
        let age = document.createElement('h4')
        let description = document.createElement('p')

        name.innerText = `Name: ${monster.name}`
        age.innerText = `Age: ${monster.age}`
        description.innerText = `Bio: ${monster.description}`

        card.append(name, age, description)
        monsterContainer.append(card)
      })
    })
}

function createForm() {
  const formContainer = document.getElementById('create-monster')
  const form = document.createElement('form')

  form.id = 'monster-form'

  const nameInput = document.createElement('input')
  const nameId = nameInput.setAttribute('id', 'name-Id')
  nameInput.setAttribute('placeholder', 'Name...')

  const ageInput = document.createElement('input')
  const ageId = ageInput.setAttribute('id', 'age-Id')
  ageInput.setAttribute('placeholder', 'Age...')

  const descriptionInput = document.createElement('input')
  const descriptId = descriptionInput.setAttribute('id', 'descript-Id')
  descriptionInput.setAttribute('placeholder', 'Description...')

  const createButton = document.createElement('button')
  createButton.textContent = 'Create'

  

  form.append(nameInput, ageInput, descriptionInput, createButton)
  formContainer.append(form)
}


function postNewMonster(name, age, description) {
  fetch('http://localhost:3000/monsters', {
    method: 'POST',
    header: {
    "Content-Type": "application/json",
    Accept: "application/json"
    },

    body: {
      name, age, description
    }

  })
  .then(resp => resp.json())
  .then(monster => console.log(monster))
    
}


/*
POST http://localhost:3000/monsters
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body:
{ name: string, age: number, description: string }
*/


















/*

nameInput()
innerName()
innerAge()
innerDescript()
buttonGrab()
createButton()






function nameInput() {
  const grabId = document.getElementById('create-monster');

  const nameInput = document.createElement('div')
  const att = nameInput.setAttribute('id', 'inner-monster')

  grabId.appendChild(nameInput)
}

function innerName() {
  const create = document.createElement('input')
  const nameId = create.setAttribute('id', 'name-Id')
  const grabInnerId = document.getElementById('inner-monster')
  create.setAttribute('placeholder', 'Name')
  grabInnerId.appendChild(create)
}

function innerAge() {
  const create = document.createElement('input')
  const ageId = create.setAttribute('id', 'age-Id')
  const grabInnerId = document.getElementById('inner-monster')
  create.setAttribute('placeholder', 'Age')
  grabInnerId.appendChild(create)
}

function innerDescript() {
  const create = document.createElement('input')
  const descriptId = create.setAttribute('id', 'descript-Id')
  const grabInnerId = document.getElementById('inner-monster')
  create.setAttribute('placeholder', 'Description')
  grabInnerId.appendChild(create)
}


function createButton() {
  const createBut = document.createElement('button')
  const descriptId = createBut.setAttribute('id', 'button-Id')
  const grabInnerId = document.getElementById('inner-monster')
  createBut.textContent = 'Create'
  grabInnerId.appendChild(createBut)
}

function buttonGrab() {
  const forwardBut = document.getElementById('button-Id');
  const event = forwardBut.addEventListener('submit', () => {
    console.log('empty submit')
  })
}


function buttonGrab() {
  const forwardBut = document.getElementById('forward');
  const event = forwardBut.addEventListener('click', () => {
    console.log('empty click')
  })
}

function buttonGrab() {
  const backBut = document.getElementById('back');
  const backEvent = backBut.addEventListener('click', () => {
    alert('Aint no monsters here')
  })
}



*/