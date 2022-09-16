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
