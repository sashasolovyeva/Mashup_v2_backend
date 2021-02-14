// TABS
let allTabs = document.querySelectorAll('.tab')

 for (let i = 0; i < allTabs.length; i++) {

   allTabs[i].onclick = function(event) {
     document.querySelector('.active_tab').classList.remove('active_tab')

     event.currentTarget.classList.add('active_tab')

     let allPanels = document.querySelectorAll('.panel')
     for (let j = 0; j < allPanels.length; j++) {
       allPanels[j].classList.add('hidden')
     }

     let myPanel = event.currentTarget.dataset.panels
     document.querySelector( myPanel ).classList.remove('hidden')
   }

 }


// LOADING DEFAULT IMAGES (MALEVICH)
let assetPanelOrig = document.getElementById('artworks')
for(let i = 0; i < 28; i++){
  let temp = document.createElement('img')
  temp.src = 'assets/malevich' + i +'.png'
  temp.dataset.filename = 'assets/malevich' + i +'.png'
  temp.classList.add('image_assets')
  assetPanelOrig.appendChild(temp)
}

//CHOOSING IMAGE FOR CANVAS
let imageAssetsOrig = document.querySelectorAll('.image_assets')
for(let i = 0; i < imageAssetsOrig.length; i++){
  imageAssetsOrig[i].onclick = function(event){
    let currSelectedOrig = document.querySelectorAll('.active_image')
    for(let j = 0; j < currSelectedOrig.length; j++){
      currSelectedOrig[j].classList.remove('active_image')
    }
    event.currentTarget.classList.add('active_image')
    origText = false
    showText = true
    moveMode = false
    clearCanvas = false
    editMode = false
    removeMode = false
    zoomBarDiv.classList.add('nodisplay')
    currentImage = loadImage(event.currentTarget.dataset.filename)

    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove('active_button')
    }
  }
}

// FILTERS
let filter = document.getElementById('filters')
filter.onchange = function(){
  let fValue = filter.value
  let numOfPics = this.selectedOptions[0].getAttribute('data-numofpics')

  // LOADING IMAGES INTO THE RIGHT PANEL BASED ON FILTER
  let assetPanel = document.getElementById('artworks')
  let existingChildren = assetPanel.childElementCount
  for(let i = 0; i < existingChildren; i++){
    assetPanel.removeChild(assetPanel.childNodes[0])
  }
  for(let i = 0; i < numOfPics; i++){
    let temp = document.createElement('img')
    temp.src = 'assets/' + fValue + i +'.png'
    temp.dataset.filename = 'assets/' + fValue + i +'.png'
    temp.classList.add('image_assets')
    assetPanel.appendChild(temp)
  }

  // CHOOSING IMAGE FOR CANVAS
  let imageAssets = document.querySelectorAll('.image_assets')
  for(let i = 0; i < imageAssets.length; i++){
    imageAssets[i].onclick = function(event){
      let currSelected = document.querySelectorAll('.active_image')
      for(let j = 0; j < currSelected.length; j++){
        currSelected[j].classList.remove('active_image')
      }
      event.currentTarget.classList.add('active_image')
      origText = false
      showText = true
      moveMode = false
      clearCanvas = false
      editMode = false
      removeMode = false
      zoomBarDiv.classList.add('nodisplay')
      currentImage = loadImage(event.currentTarget.dataset.filename)

      for(let i = 0; i < allButtons.length; i++){
          allButtons[i].classList.remove('active_button')
      }
    }
  }
}


// LOADING BACKGROUNDS
let bgPanel = document.getElementById('artwork_backgrounds')
for(let i = 0; i < 6; i++){
  let temp = document.createElement('img')
  temp.src = 'assets/background' + i +'.jpg'
  temp.dataset.filename = 'assets/background' + i +'.jpg'
  temp.classList.add('background_assets')
  bgPanel.appendChild(temp)
}

//CHOOSING BACKGROUND FOR CANVAS
let bgsChoice = document.querySelectorAll('.background_assets')
for(let i = 0; i < bgsChoice.length; i++){
  bgsChoice[i].onclick = function(event){
    let currSelectedOrig = document.querySelectorAll('.active_image')
    for(let j = 0; j < currSelectedOrig.length; j++){
      currSelectedOrig[j].classList.remove('active_image')
    }
    event.currentTarget.classList.add('active_image')
    moveMode = false
    clearCanvas = false
    editMode = false
    removeMode = false
    zoomBarDiv.classList.add('nodisplay')
    bg = loadImage(event.currentTarget.dataset.filename)
  }
}
let noBg = document.querySelector('.nobg')
noBg.onclick = function(event){
  bg = false
  noBg.classList.add('active_image')
}


// BUTTONS

let allButtons = document.querySelectorAll('button')

let buttonClear = document.getElementById('clear')
buttonClear.onclick = function(event){
  clearCanvas = true
  moveMode = false
  editMode = false
  animateMode = false
  removeMode = false
  zoomBarDiv.classList.add('nodisplay')

  for(let i = 0; i < allButtons.length; i++){
      allButtons[i].classList.remove('active_button')
  }
  event.currentTarget.classList.add('active_button')
}

let buttonMove = document.getElementById('move')
buttonMove.onclick = function(event){
  moveMode = true
  editMode = false
  animateMode = false
  removeMode = false
  zoomBarDiv.classList.add('nodisplay')

  for(let i = 0; i < allButtons.length; i++){
      allButtons[i].classList.remove('active_button')
  }
  event.currentTarget.classList.add('active_button')
}

let buttonEdit = document.getElementById('edit')
let zoomBarDiv = document.querySelector('.ranges')
buttonEdit.onclick = function(event){
  origText = false
  editMode = true
  moveMode = false
  animateMode = false
  removeMode = false
  zoomBarDiv.classList.remove('nodisplay')

  for(let i = 0; i < allButtons.length; i++){
      allButtons[i].classList.remove('active_button')
  }
  event.currentTarget.classList.add('active_button')
}

let buttonRemove = document.getElementById('remove')
buttonRemove.onclick = function(event){
  removeMode = true
  moveMode = false
  editMode = false
  animateMode = false
  zoomBarDiv.classList.add('nodisplay')

  for(let i = 0; i < allButtons.length; i++){
      allButtons[i].classList.remove('active_button')
  }
  event.currentTarget.classList.add('active_button')
}

let zoomBarWidth = document.getElementById('width_object')
let zoomBarHeight = document.getElementById('height_object')

zoomBarWidth.onchange = function(event){
  let factor = int(zoomBarWidth.value)
  currentElementEdit.myWidth = factor
}

zoomBarHeight.onchange = function(event){
  let factor = int(zoomBarHeight.value)
  currentElementEdit.myHeight = factor
}

let buttonSave = document.getElementById('save')
buttonSave.onclick = function(event){
  showText = false
  editMode = false
  origText = false
  document.getElementById('savepopup').style.display = 'flex'
  document.querySelector('.popupoverlay').style.display = 'block'

  zoomBarDiv.classList.add('nodisplay')

  for(let i = 0; i < allButtons.length; i++){
      allButtons[i].classList.remove('active_button')
  }
  // event.currentTarget.classList.add('active_button')
}

let buttonAnimate = document.getElementById('animate')
let counter = 0
buttonAnimate.onclick = function(event){
  if(counter % 2 == 0){
    animateMode = true
    moveMode = false
    editMode = false
    removeMode = false
    zoomBarDiv.classList.add('nodisplay')
    buttonAnimate.innerHTML = 'Stop'
    counter++;
  } else {
    buttonAnimate.innerHTML = 'Animate'
    animateMode = false
    counter++;
  }

  for(let i = 0; i < allButtons.length; i++){
      allButtons[i].classList.remove('active_button')
  }
  event.currentTarget.classList.add('active_button')
}
