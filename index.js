window.addEventListener("load", () => {
  //start your code here
  
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"

function onSubmit(event) {
  event.preventDefault()
  const input = document.getElementById('password-length')
  console.log(input.value)
  
  
}


document.addEventListener('submit', onSubmit)

  
  
  
});
