  $(document).ready(function() {

// The save window gets activated in managep5.js
// Every other piece of saving logic is done from here

// close the save window
popupwindow = document.getElementById('savepopup')
xButton = document.getElementById('closefirstpopup')
overlay = document.querySelector('.popupoverlay')

xButton.addEventListener('click', function(){
  popupwindow.style.display = 'none'
  overlay.style.display = 'none'
})

savetodevice = document.getElementById('savetodevice')

savetodevice.addEventListener('click', function(){
  save('sketch.png')
})

savetolibrary = document.getElementById('savetolibrary')

signin = document.getElementById('signinfrompopup')
guest = document.getElementById('guestsave')
savediv = document.getElementById('savepopup')

canvas = document.querySelector('canvas')

submissionpanel = document.getElementById('submitworkpopup')
imagetopublish = document.querySelector('.imagetopublish')

savetolibrary.addEventListener('click', function(){
  checkSetName()
  var imgURL = canvas.toDataURL()

  imagetopublish.innerHTML = '<img width="100%" height="auto" src="' + imgURL + '">';
  submissionpanel.style.display = 'flex'
})


submitbutton = document.getElementById('submit')
messagepanel = document.getElementById('msgpanel')

submitbutton.addEventListener('click', function(event){

  event.preventDefault()

  var usersname = document.getElementById('pseudonym').value
  var userscomment = document.getElementById('userscomment').value
  var imgSrc = imagetopublish.querySelector('img').src

  $.ajax({
    type: "POST",
    url: "publicationvalidation.php",
    data: {
      imgURL: imgSrc,
      name: usersname,
      comment: userscomment
    },
    success: function(data, status){
      msgpanel.innerHTML = data;
      if(data == "<p>Your image was added successfully! Check in the <a href='imagegallery.php' class='savelink'>gallery</a></p>"){
        submitbutton.style.display = 'none';
      }
    }
  })


})


xButton2 = document.getElementById('closesecondpopup')
xButton2.addEventListener('click', function(){
  popupwindow.style.display = 'none'
  overlay.style.display = 'none'
  submissionpanel.style.display = 'none'
})


function checkSetName(){
  $.ajax ({
      url: 'name_cookie.php',
      type: 'POST',
      data: {},
      success: function(data, status) {
        document.getElementById('pseudonym').value = data;
      }
  })
}



})
