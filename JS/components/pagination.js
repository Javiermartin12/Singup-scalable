export const pagination = () => {
    const nextButton = document.getElementById('nextPageMain');
    const backButton = document.getElementById('backPage');
    const mainPage = document.getElementsByClassName('--main');

    if (nextButton) {
        nextButton.addEventListener('click', () => {

        });
    }

    function handleClickNextPage() {
        alert('Button was clicked!');
        console.log('Button clicked');
    }
};
