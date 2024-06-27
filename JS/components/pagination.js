 export const pagination = () => {

const nextButton = document.querySelectorAll('[data-next]')
const backButton = document.getElementById('backPage')
const mainPage = document.getElementsByClassName('--main')
if (nextButton) {
    nextButton.addEventListener('click', handleClickNextPage);
}


 const handleClickNextPage = ()  => {
    alert('Button was clicked!');
    console.log('button on')
}
nextButton.addEventListener('click', handleClickNextPage)
 }