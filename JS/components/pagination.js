export const pagination = () => {
    const nextButton = document.getElementById('nextPageMain');
    const backButton = document.getElementById('backPage');
    const mainPage = document.getElementById('mainPage')
    const profilePage = document.getElementById('profilePage')
    const addressPage = document.getElementById('addressPage')
    const shippingPage = document.getElementById('shippingPage')
    const finishPage = document.getElementById('finishPage')
    const thankPage = document.getElementById('thankPage')

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            mainPage.classList.add('hidden')
            profilePage.classList.remove('hidden')
        });
    }

    function handleClickNextPage() {
        alert('Button was clicked!');
        console.log('Button clicked');
    }
};
