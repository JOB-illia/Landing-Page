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
      for (let i = b; i < tab.length; i++) {
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
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
               hideTab(0, 0);
               showTab(i);
               break;
            }
         }
      }
   });


   // timer
   let deadline = Date.parse('2020-04-25');
   function getTimeRemaining(endtime) {
      let t = endtime - Date.parse(new Date()),
         seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor((t / 1000 / 60 / 60) % 24),
         days = Math.floor((t / (1000 * 60 * 60 * 24)));
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
         function zero(z) {
            if (z > 9) {
               return z;
            } else {
               return '0' + z;
            }
         }
         days.innerHTML = zero(t.days);
         hours.textContent = zero(t.hours);
         minutes.textContent = zero(t.minutes);
         seconds.textContent = zero(t.seconds);

         if (t.total <= 0 || t.days <= 0 || t.hours <= 0 || seconds <= 0) {
            clearInterval(timeInterval);
            deadline += 864000000;
            setClock('timer', deadline);

         }

      }
   }

   setClock('timer', deadline);


   // modal 
   let more = document.querySelectorAll('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');
   more.forEach(function (item) {
      item.addEventListener('click', function () {
         openModal();
      });
   });
   function openModal() {
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
   }
   close.addEventListener('click', function () {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
   });
});




// timer
//let deadline = Date.parse('2020-04-25');
//function getTimeRemaining(endtime) {
//    let t = endtime - Date.parse(new Date()),
//        seconds = Math.floor((t/1000) % 60),
//        minutes = Math.floor((t/1000/60) % 60),
//        hours = Math.floor((t/1000/60/60) % 24),
//        days = Math.floor((t/(1000*60*60*24)));
//    return {
//        'total': t,
//        'hours': hours,
//        'minutes': minutes,
//        'seconds': seconds,
//        'days': days,
//    };
//}
//function setClock(id, endtime) {
//    let timer = document.getElementById(id),
//        days = timer.querySelector('.days'),
//        hours = timer.querySelector('.hourse'),
//        minutes = timer.querySelector('.minutes'),
//        seconds = timer.querySelector('.seconds'),
//        timeInterval = setInterval(updateClock, 1000);

//    function updateClock() {
//        let t = getTimeRemaining(endtime);
//        function zero(z) {
//            if(z > 9){
//                return z;
//            }else {
//                return '0' + z;
//            }
//        }
//        days.innerHTML = '<p class="parseString">' + zero(t.days) + '</p>';
//        hours.innerHTML = '<p class="parseStringH">' + zero(t.hours) + '</p>';
//        minutes.innerHTML = '<p class="parseStringM">' + zero(t.minutes) + '</p>';
//        seconds.innerHTML = '<p class="parseStringS">' + zero(t.seconds) + '</p>';
//        //days
//        let parseInt = document.querySelector('.parseString').textContent;
//        let numberParseSpan  = parseInt.replace(/(.)/g, '<span>$1</span>');
//        document.querySelector('.parseString').innerHTML = numberParseSpan;
//        // hours
//        let parseIntH = document.querySelector('.parseStringH').textContent;
//        let numberParseSpanH  = parseIntH.replace(/(.)/g, '<span>$1</span>');
//        document.querySelector('.parseStringH').innerHTML = numberParseSpanH;
//        // minutes
//        let parseIntM = document.querySelector('.parseStringM').textContent;
//        let numberParseSpanM  = parseIntM.replace(/(.)/g, '<span>$1</span>');
//        document.querySelector('.parseStringM').innerHTML = numberParseSpanM;
//        // seconds
//        let parseIntS = document.querySelector('.parseStringS').textContent;
//        let numberParseSpanS  = parseIntS.replace(/(.)/g, '<span>$1</span>');
//        document.querySelector('.parseStringS').innerHTML = numberParseSpanS;

//        if (t.total <= 0 || t.days <= 0 || t.hours <= 0 || seconds <= 0){
//            clearInterval(timeInterval);
//            deadline += 864000000;
//            setClock('timer', deadline);

//        }

//    }
//}
//setClock('timer', deadline);

