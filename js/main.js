window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        tab = document.querySelectorAll('.info-header-tab');
    function hideTab(a, b) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
        for (let i = b; i < tab.length; i++){
            tab[i].classList.remove('info-header-tab-active');
        };
    }
    hideTab(1, 1);

    function showTab(c) {
        if (tabContent[c].classList.contains('hide')) {
            tabContent[c].classList.add('show');
            tabContent[c].classList.remove('hide');
                   tab[c].classList.add('info-header-tab-active');
        }
    }

    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTab(0,0);
                    showTab(i);
                    break;
                }
            }
        }
    });


    // timer
    let deadline = '2020-04-28';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            // hours = Math.floor((t/(1000*60*60) % 24)),
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor((t/(1000*60*60*24)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // days.textContent = t.days;
            // hours.textContent = t.hours;
            // minutes.textContent = t.minutes;
            // seconds.textContent = t.seconds;
            function zero(z) {
                if(z > 9){
                    return z;
                }else {
                    return '0' + z;
                }
            }
            days.textContent = zero(t.days);
            hours.textContent = zero(t.hours);
            minutes.textContent = zero(t.minutes);
            seconds.textContent = zero(t.seconds);

            if (t.total <= 0 || t.days <= 0 || t.hours <= 0 || seconds <= 0){
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }

        }
    }

    setClock('timer', deadline);

});