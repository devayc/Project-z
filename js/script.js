document.addEventListener('DOMContentLoaded',function(){
    $('.question__item-quest').click(function(){
        $(this).next().slideToggle()
        $(this).toggleClass('active')
        if($(this).hasClass('active')){
            $(this).find('.question__item-quest__icon').html(`<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="25.5" transform="rotate(90 26 26)" fill="white" stroke="#566946"/>
            <path d="M26 24.0274L31.5555 28.7893C31.9225 29.1038 32.4748 29.0613 32.7893 28.6944C33.1038 28.3275 33.0613 27.7751 32.6944 27.4606L26.5694 22.2106C26.2418 21.9298 25.7582 21.9298 25.4306 22.2106L19.3056 27.4606C18.9387 27.7751 18.8962 28.3275 19.2107 28.6944C19.5252 29.0613 20.0775 29.1038 20.4445 28.7893L26 24.0274Z" fill="#566946"/>
            </svg>`)
        }else{
            $(this).find('.question__item-quest__icon').html(`<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="26" transform="rotate(90 26 26)" fill="#ECECEC"/>
            <path d="M26 27.9726L31.5555 23.2107C31.9225 22.8962 32.4748 22.9387 32.7893 23.3056C33.1038 23.6725 33.0613 24.2249 32.6944 24.5394L26.5694 29.7894C26.2418 30.0702 25.7582 30.0702 25.4306 29.7894L19.3056 24.5394C18.9387 24.2249 18.8962 23.6725 19.2107 23.3056C19.5252 22.9387 20.0775 22.8962 20.4445 23.2107L26 27.9726Z" fill="#ADADAD"/>
        </svg>`)
        }
    })
}) 