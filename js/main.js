window.addEventListener('DOMContentLoaded', function () {
    'use strike';

    let bodyTabs = document.querySelector('.info-header'),
        tabs = document.querySelectorAll('.info-header-tab'),
        contentTabs = document.querySelectorAll('.info-tabcontent');

    function hideTabsContent(a, c) {
        for (let i = a; i < contentTabs.length; i++){
            contentTabs[i].classList.remove('show');
            contentTabs[i].classList.add('hide');
        }
        for (let i = c; i < tabs.length; i++) {
            tabs[i].classList.remove('info-header-tab-active');
        }
    }
    hideTabsContent(1, 1);
    function showTabsContent(b) {
        if(contentTabs[b].classList.contains('hide')){
            contentTabs[b].classList.add('show');
            contentTabs[b].classList.remove('hide');
            tabs[b].classList.add('info-header-tab-active');
        }
    }
    bodyTabs.addEventListener('click', function (event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++){
                if(target == tabs[i]) {
                    hideTabsContent(0, 0);
                    showTabsContent(i);
                    break;
                }
            }
        }
    })
});