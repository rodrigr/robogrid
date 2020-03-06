const head = document.querySelector("#head")
const neck = document.querySelector("#neck")
const body = document.querySelector("#body")
const leftArm = document.querySelector("#left-arm")
const rightArm = document.querySelector("#right-arm")
const arms = document.querySelectorAll(".arm")
const leftHand = document.querySelector("#left-hand")
const rightHand = document.querySelector("#right-arm")
const hands = document.querySelectorAll(".hand")
const leftLeg = document.querySelector("#left-leg")
const rightLeg = document.querySelector("#right-leg")
const legs = document.querySelectorAll(".leg")
const leftFoot = document.querySelector("#left-foot")
const rightFoot = document.querySelector("#right-foot")
const feet = document.querySelectorAll(".foot")
const colorWheel = document.querySelector("#color-wheel")

function paint(event){

	if(event){
		document.querySelector("#palette div.selected").classList.remove("selected")
		event.target.classList.add("selected")
	}
	
	let color = document.querySelector("#palette div.selected").style.backgroundColor
	colorWheel.dataset.color = color

	document.querySelectorAll('.background>div')
		.forEach(div => div.style.backgroundColor = colorWheel.dataset.color)
	
}

paint()

function palette(){
	let actions = document.querySelector("#actions")
	let palette = document.querySelector("#palette")
	if(colorWheel.checked){
		actions.classList.add("hide")
		actions.classList.remove("show")
		palette.classList.remove("hide")
		palette.classList.add("show")
	} else{
		actions.classList.remove("hide")
		actions.classList.add("show")
		palette.classList.add("hide")
		palette.classList.remove("show")
	}
}

function walk(){
	document.querySelectorAll(".arm,.hand,.leg,.foot").forEach(e => e.classList.add("upAndDown"))
	document.querySelectorAll("#right-arm,#right-hand,#left-leg,#left-foot").forEach(e => e.classList.add("delay"))
}

function blink(){
	document.querySelector("#left-eye").classList.add("blink")
}

function beat(){
	document.querySelector("#heart").classList.add("zoomInOut")
}

function eat(){
	document.querySelector("#lip").classList.add("shrinkUp")
}

function greet(){
	document.querySelector("#left-hand").classList.add("hide")
	document.querySelector("#left-arm").classList.add("leftLift")
	let style = document.createElement('STYLE')
	style.innerText = `.leftLift.arm::after{
		background-color: ${document.querySelector("#left-hand").style.backgroundColor}
	}`
	document.querySelector("head").appendChild(style)
}

function jump(){
	document.querySelector("#left-hand").classList.add("hide")
	document.querySelector("#left-arm").classList.add("leftLift")
	document.querySelector("#right-hand").classList.add("hide")
	document.querySelector("#right-arm").classList.add("rightLift")
	document.querySelector("#left-foot").classList.add("hide")
	document.querySelector("#left-leg").classList.add("leftLift")
	document.querySelector("#right-foot").classList.add("hide")
	document.querySelector("#right-leg").classList.add("rightLift")
	let style = document.createElement('STYLE')
	style.innerText = `#left-arm::after,#right-arm::after,#left-leg::after,#right-leg::after{
		background-color: ${document.querySelector("#left-hand").style.backgroundColor}
	}`
	document.querySelector("head").appendChild(style)
}

function dance(){
	document.querySelector("#left-hand").classList.add("hide")
	document.querySelector("#left-arm").classList.add("leftLift")
	document.querySelector("#right-hand").classList.add("hide")
	document.querySelector("#right-arm").classList.add("leftLift")
	document.querySelector("#right-leg").classList.add("rightLift")
	document.querySelector("#right-foot").classList.add("hide")

	let style = document.createElement('STYLE')
	style.innerText = `#left-arm::after,#right-arm::after,#left-leg::after,#right-leg::after{
		background-color: ${document.querySelector("#left-hand").style.backgroundColor}
	}`
	document.querySelector("head").appendChild(style)
}

function stop(classArr){
	document.querySelectorAll(".background div").forEach(e => {
		for(let i = 0; i<classArr.length; i++){
			e.classList.remove(classArr[i])
		}
	})
	
}

function entrance(){
	document.querySelectorAll('#body,#neck').forEach(e => e.classList.add('fadeInUp'))
	head.classList.add('headEntrance')
	document.querySelectorAll('#left-arm,#left-hand').forEach(e => e.classList.add('leftEntrance'))
	document.querySelectorAll('#right-arm,#right-hand').forEach(e => e.classList.add('rightEntrance'))
	legs.forEach(e => e.classList.add('legEntrance'))
	feet.forEach(e => e.classList.add('feetEntrance'))

	setTimeout(function(){
		stop(['fadeInUp','headEntrance','leftEntrance','rightEntrance','legEntrance','feetEntrance'])
		greet()
		setTimeout(() => stop(['leftLift','hide']),1500)
	},5000)
	
}

entrance()

let styles = []

function reorder(backwards){

	let desktop = window.innerWidth >= 992

	let title = document.querySelector("#title1")
	let parentSize = !desktop ? title.offsetWidth : title.offsetHeight
	
	let word = backwards ? ["R","O","B","O","G","R","I","D"] : ["BY","R","O","D","R","I","G","R"]
	
	styles.forEach(e => document.querySelector("head").removeChild(e))
	document.querySelectorAll("#title1 span").forEach(e => e.className = "")
	styles = []

	let i = 1
	let j = title.children.length

	let interval = setInterval(frame,700,true)
	let interval2

	function frame(first){

		let childI = title.children[i - 1]
		let childIPos = !desktop ? childI.offsetLeft + childI.offsetWidth / 2 : childI.offsetTop + childI.offsetHeight / 2
		let childJ = title.children[j - 1]
		let childJPos = !desktop ? childJ.offsetLeft + childJ.offsetWidth / 2 : childJ.offsetTop + childJ.offsetHeight / 2

		if(i<j){

			let style = document.createElement('STYLE')

			let fromI = first ? `transform:translate${!desktop ? "X" : "Y"}(0)` : `transform:translate${!desktop ? "X" : "Y"}(${parentSize/2 - childIPos}px)`
			let toI = first ? `transform:translate${!desktop ? "X" : "Y"}(${parentSize/2 - childIPos}px)` : `transform:translate${!desktop ? "X" : "Y"}(0)`
			style.innerText = `@keyframes sort${i + (first ? "A" : "B")}{from{${fromI}}to{${toI}}}`
			style.innerText += `.sort${i + (first ? "A" : "B")}{animation: sort${i + (first ? "A" : "B")} .7s forwards}`

			let fromJ = first ? `transform:translate${!desktop ? "X" : "Y"}(0)` : `transform:translate${!desktop ? "X" : "Y"}(${parentSize/2 - childJPos}px)`
			let toJ = first ? `transform:translate${!desktop ? "X" : "Y"}(${parentSize/2 - childJPos}px)` : `transform:translate${!desktop ? "X" : "Y"}(0)`
			style.innerText += `@keyframes sort${j + (first ? "A" : "B")}{from{${fromJ}}to{${toJ}}}`
			style.innerText += `.sort${j + (first ? "A" : "B")}{animation: sort${j + (first ? "A" : "B")} .7s forwards}`

			document.querySelector("head").appendChild(style)
			styles.push(style)

			childI.classList.add(`sort${i + (first ? "A" : "B")}`)
			childJ.classList.add(`sort${j + (first ? "A" : "B")}`)

			if(!first){
				childI.innerText = word[i - 1]
				childJ.innerText = word[j - 1]
			}
			
			i++
			j--
		}else{
			clearInterval(first ? interval : interval2)
			if(first){
				i = 1
				j = title.children.length
				interval2 = setInterval(frame,700,false)
			}else{
				if(!backwards){
					reorder(true)
				}
			}
			
		}
	}
}

/*=================
===================
Event Handling
===================
=================*/



document.querySelector('#color-wheel').addEventListener("change",palette)

document.querySelectorAll("#palette>div").forEach(e => e.addEventListener("click",paint))

document.querySelector("#palette .close").addEventListener("click", () => colorWheel.click())

document.querySelector("#walk").addEventListener("change",event => event.target.checked ? walk() : stop(["upAndDown","delay"]))

document.querySelector("#blink").addEventListener("change", event => event.target.checked ? blink() : stop(["blink"]))

document.querySelector("#beat").addEventListener("change", event => event.target.checked ? beat() : stop(["zoomInOut"]))

document.querySelector("#eat").addEventListener("change", event => event.target.checked ? eat() : stop(["shrinkUp"]))

document.querySelector("#greet").addEventListener("change", event => event.target.checked ? greet() : stop(["leftLift","hide"]))

document.querySelector("#jump").addEventListener("change", event => event.target.checked ? jump() : stop(["leftLift","rightLift","hide"]))

document.querySelector("#dance").addEventListener("change", event => event.target.checked ? dance() : stop(["leftLift","rightLift","hide"]))

head.addEventListener("click", () => head.classList.toggle("rotate"))

document.querySelector(".credits small").addEventListener("click",() => reorder(false))

