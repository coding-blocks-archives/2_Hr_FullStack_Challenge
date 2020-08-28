alert('hello ')

console.log('debugging this')

// variables
let x = 10
let y = "sfhsf"
let z = true

console.log('x is ', (typeof x))
console.log('y is ', (typeof y))
console.log('z is ', (typeof z))

x = "Shsh"
y = null 
z = 3

console.log('x is ', (typeof x))
console.log('y is ', (typeof y))
console.log('z is ', (typeof z))

function sayHello(name) {
  console.log('Hello ' + name)
}

let inpUser = document.getElementById('inpUser')
let helloBtn = document.getElementById('helloBtn')

helloBtn.onclick = function () {
  let name = inpUser.value
  alert(' Hello ' +  name)
}
