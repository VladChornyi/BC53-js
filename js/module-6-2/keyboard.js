const keyCode = document.getElementById("keyCode"); // показує код клавіші на яку було нажато
const keyName = document.getElementById("keyName"); // показує клавішу на яку було нажато
const shiftKey = document.getElementById("shiftKey"); // якщо shiftKey було нажато показує 'Pressed' інакше 'Not Pressed'
const ctrlKey = document.getElementById("ctrlKey"); // якщо ctrlKey було нажато показує 'Pressed' інакше 'Not Pressed'
const altKey = document.getElementById("altKey"); // якщо altKey було нажато показує 'Pressed' інакше 'Not Pressed'
const capsLock = document.getElementById("capsLock"); // якщо capsLock увімкнено показує 'On' інакше 'Off'

document.addEventListener('keydown', (event) => {
    keyCode.textContent = event.code
    keyName.textContent = event.key
    shiftKey.textContent = event.shiftKey
    ctrlKey.textContent =event.ctrlKey
    altKey.textContent = event.altKey
    capsLock.textContent = event.getModifierState("CapsLock") ? 'on':'off'

})