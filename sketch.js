let currentImage = false
let layer1
let elemArray = []
let currentElement = false
let currentElementEdit = false
let moveMode = false
let clearCanvas = false
let editMode = false
let animateMode = false
let removeMode = false
let bg = false
let showText = false
let origText = true
let moveCursor

function preload(){
	moveCursor = loadImage('assets/moveMode.png')
}

function setup(){
	imageMode(CENTER)
	rectMode(CENTER)
	let mycanvas = createCanvas(600, 600)
	mycanvas.parent("canvasdiv")

	layer1 = createGraphics(600, 600)
	layer1.imageMode(CENTER)
	layer1.rectMode(CENTER)
}


function draw(){
	textAlign(CENTER, CENTER)
	textSize(16)
	cursor(ARROW)

	if(bg == false){
		background(255)
	} else {
		imageMode(CORNER)
		background(bg)
		imageMode(CENTER)
	}
	layer1.clear()

	if(currentElement != false){
		currentElement.move(mouseX, mouseY)
	}


	for(let i = 0; i < elemArray.length; i++){
		elemArray[i].display()
	}

	// previously dropped elements
	image(layer1, width/2, height/2)

	// hover image
	if(moveMode == false && editMode == false && removeMode == false && mouseIsPressed == false && currentImage != false){
		image(currentImage, mouseX, mouseY)
	}

	if(clearCanvas){
		for(let i = 0; i < elemArray.length; i++){
			elemArray.splice(i, 1)
			i = i - 1
		}
	}

	if(moveMode){
		noCursor()
		image(moveCursor, mouseX, mouseY)
	}

	if(removeMode){
		noCursor()
		image(moveCursor, mouseX, mouseY)
	}

	if(animateMode){
		for(let i = 0; i < elemArray.length; i++){
			elemArray[i].motion()
		}
	}

	if(showText){
		fill(0)
		text("Click anywhere on the canvas to place the element", width/2, 50)
	}
	if(editMode){
		noCursor()
		image(moveCursor, mouseX, mouseY)

		fill(0)
		text("First click on an element the size of which you want to change", width/2, 50)
	}
	if(origText){
		fill(0)
		text("Choose and click on an element on the right. Do not drag and drop!", width/2, 50)
	}

}

function mousePressed(){
	currentElement = false
	clearCanvas = false

	if(moveMode){
		for(let i = 0; i < elemArray.length; i++){
			elemArray[i].drawRect = false
		}
		for(let i = 0; i < elemArray.length; i++){
			let result = elemArray[i].check()
			if(result == true){
				elemArray[i].drawRect = true
				currentElement = elemArray[i]
				break
			}
		}
	}

	if(editMode){
		for(let i = 0; i < elemArray.length; i++){
			elemArray[i].drawRect = false
		}
		for(let i = 0; i < elemArray.length; i++){
			let editResult = elemArray[i].check()
			if(editResult == true){
				currentElementEdit = elemArray[i]
				elemArray[i].drawRect = true
				document.getElementById('width_object').value = currentElementEdit.myWidth
				document.getElementById('height_object').value = currentElementEdit.myHeight
				break
			}
		}
	}

	if(removeMode){
		for(let i = 0; i < elemArray.length; i++){
			let editRemoveResult = elemArray[i].check()
			if(editRemoveResult == true){
				elemArray.splice(i, 1)
				i = i - 1
				break
			}
		}
	}

	if(currentElement == false && currentImage != false && mouseX > 0 &&
		mouseX < width && mouseY > 0 && mouseY < height && moveMode != true &&
		editMode != true && removeMode != true){

		let temp = new Element(mouseX, mouseY, currentImage)
		elemArray.push(temp)
		showText = false

	}
}

function mouseReleased(){
	currentElement = false
}

class Element {
	constructor(x, y, myPicture){
		this.x = x
		this.y = y
		this.myPicture = myPicture
		this.myWidth = this.myPicture.width
		this.myHeight = this.myPicture.height
		this.xSpeed = random(-5, 5)
		this.ySpeed = random(-5, 5)
		this.drawRect = false
	}

	display(){
		layer1.image(this.myPicture, this.x, this.y, this.myWidth, this.myHeight)
		if(this.drawRect){
			noFill()
			rect(this.x, this.y, this.myWidth, this.myHeight)
		}
	}

	check(){
		if(mouseIsPressed
		&& mouseX >= this.x - this.myPicture.width/2 && mouseX <= this.x + this.myPicture.width/2
		&& mouseY >= this.y - this.myPicture.height/2 && mouseY <= this.y + this.myPicture.height/2)
		{
			return true
		}
	}

	move(x, y){
		this.x = x
		this.y = y
	}

	resize(){
		this.myWidth *= 1.2
		this.myHeight *= 1.2
	}

	motion(){
		this.x += this.xSpeed
		this.y += this.ySpeed

		if(this.x - this.myWidth/2 > width){
			this.x = -this.myWidth/2
			this.xSpeed = random(-5, 5)
		}
		else if(this.x + this.myWidth/2 < 0){
			this.x = width + this.myWidth/2
			this.xSpeed = random(-5, 5)
		}

		if(this.y - this.myHeight/2 > height){
			this.y = -this.myHeight/2
			this.ySpeed = random(-5, 5)
		}
		else if(this.y + this.myHeight/2 < 0){
			this.y = height + this.myHeight/2
			this.ySpeed = random(-5, 5)
		}
	}
}
