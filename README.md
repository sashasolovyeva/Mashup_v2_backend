# Mash Up Like the Masters, ver. 2
The second iteration of "Mash Up Like the Masters project" as it was enhanced with a public gallery where the users can share their collages.
The second part of the project was developed in NYU class Web Development and Programming with professor Craig Kapp.

## Technical documentation
- **Backend with PHP and AJAX to let the user save their work to the public gallery and add their name and a note about their creative process**
	- **To encourage people to share their discoveries while collaging and compile creative work into a gallery, I have added a server-side component to this project! If the user clicks on "save to our library to share with others!", they are prompted to input their name and a comment. All of this data then gets packages into a JSON file which is parsed on an imagegallery.php page into a full-fledged gallery**
- **With a base-64 conversion algorithm, a feature that lets the user upload their own image to use in a collage**
- An off-screen buffer for the canvas (p5.js)
- Tabbing logic (js) to navigate between different panels
- A dropdown filter that controls which assets get generated for each artist (js)
- An onclick function allowing to choose an asset and make it appear on the canvas based on the mouse position (js + p5.js)
- HTML buttons with event handlers to let the user modify the objects or canvas in various ways 