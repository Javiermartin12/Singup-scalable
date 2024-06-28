export const pagination = () => {

    const nextButtonMain = document.getElementById('nextPageMain');
    const mainPage = document.getElementById('mainPage')
    const profilePage = document.getElementById('profilePage')

    if (nextButtonMain) {
        nextButtonMain.addEventListener('click', () => {
            mainPage.classList.add('hidden')
            profilePage.classList.remove('hidden')
            
        });
    }
    
    const nextPageProfile = document.getElementById('nextPageProfile');
    const backPageProfile = document.getElementById('backPageProfile')
    const addressPage = document.getElementById('addressPage')

    if(nextPageProfile){
        nextPageProfile.addEventListener('click', () => {
            profilePage.classList.add('hidden')
            addressPage.classList.remove('hidden')
        })
    }

    if(backPageProfile){
        backPageProfile.addEventListener('click', () => {
            profilePage.classList.add('hidden')
            mainPage.classList.remove('hidden')

        })
    }
    const nextPageAddress = document.getElementById('nextPageAddress')
    const backPageAddress = document.getElementById('backPageAddress')
    const shippingPage = document.getElementById('shippingPage')
    
    if(nextPageAddress){
        nextPageAddress.addEventListener('click', () => {
            addressPage.classList.add('hidden')
            shippingPage.classList.remove('hidden')
        })
    }

    if(backPageAddress){
        backPageAddress.addEventListener('click', () => {
            addressPage.classList.add('hidden')
            profilePage.classList.remove('hidden')

        })
    }
    
    const finishPage = document.getElementById('finishPage')
    const nextPageShipping = document.getElementById('nextPageShipping')
    const backPageShipping = document.getElementById('backPageShipping')

    if(nextPageShipping){
        nextPageShipping.addEventListener('click', () => {
            shippingPage.classList.add('hidden')
            finishPage.classList.remove('hidden')
        })
    }
    if (backPageShipping) {
        backPageShipping.addEventListener('click', () => {
            shippingPage.classList.add('hidden');
            addressPage.classList.remove('hidden');
        });
    }
    
    const thankPage = document.getElementById('thankPage')
    const nextPageFinish = document.getElementById('nextPageFinish')
    const backPageFinish = document.getElementById('backPageFinish')
    
    if (nextPageFinish){
        nextPageFinish.addEventListener('click', () => {
            finishPage.classList.add('hidden')
            thankPage.classList.remove('hidden')
        })
    }
    if(backPageFinish){
        backPageFinish.addEventListener('click', () => {
            finishPage.classList.add('hidden')
            shippingPage.classList.remove('hidden');

        })
    }

    const comeMainPage = document.getElementById('comeMainPage')
    if (comeMainPage) {
        comeMainPage.addEventListener('click', () => {
            thankPage.classList.add('hidden')
            mainPage.classList.remove('hidden');
        });
    }
   
};
