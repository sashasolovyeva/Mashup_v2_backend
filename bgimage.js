$(document).ready(function() {

      // some DOM refs
      let form = document.getElementById('uploadform')
      let btn = document.getElementById('uploadbg')
      let filedata

      btn.onclick = function(event) {
        event.preventDefault();

        // we have to package up our file uplaod into a FormData object -- this
        // is required due to the fact that we aren't sending standard ASCII
        // strings to the server with this request
        var fd = new FormData();
        var files = $('#filename')[0].files[0];

        getBase64(files, function(event){
          bg = loadImage(event.target.result)
        })



      }

      // function from: https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript

      function getBase64(file, callback) {
         var reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = callback;
         reader.onerror = function (error) {
           console.log('Error: ', error);
         };
      }


    })
