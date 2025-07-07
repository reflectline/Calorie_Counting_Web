'use strict';
document.addEventListener('DOMContentLoaded', function() {

// TABS-----------------------------------------------------------------------------------------------------------------
    const   tabsParent = document.querySelector('.tabheader__items'),          // Контайнер табов
            tabs = document.querySelectorAll('.tabheader__item'),   // Табы
            tabsContent = document.querySelectorAll('.tabcontent')  // Текст табов

    function hideTabsContent() {                        // Функция для скрытия всех элементов из tabs
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })
        tabs.forEach(item => {             // Функция для скрытия активного элемента
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabsContent(i = 0) {          // Функция для отображения элемента tabs
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            })

        }
    })

// DISCOUNT DATE--------------------------------------------------------------------------------------------------------
    const   deadline = '2026-01-01'

    function timeDifference(endtime){                            // Функция разницы между дедлайном и нашим текущем временем
        let t = Date.parse(endtime) - Date.parse(new Date()); // Перевели всё в миллисек (разница между текущ и deadline)
        let days = Math.floor(t / (1000*60*60*24));        // Получили количество дней до окончания deadline
        let hours = Math.floor((t / (1000*60*60*24) % 24))    // Получили количество часов до окончания deadline
        let minutes = Math.floor((t / 1000 / 60) % 60)     // Получили количество часов до окончания deadline
        let seconds = Math.floor((t / 1000) % 60)          // Получили количество секунд до окончания deadline

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

   function setTime(selector,endtime){                         // Функция ввода разницы в структуру HTML
       const timer = document.querySelector(selector);           // Доступ к timer
       const days = timer.querySelector('#days');           // Доступ к days
       const hours = timer.querySelector('#hours');         // Доступ к hours
       const minutes = timer.querySelector('#minutes');     // Доступ к minutes
       const seconds = timer.querySelector('#seconds');     // Доступ к seconds

       updateClock ()                                                 // Пост-процесс: вызываем функцию заранее для избежания мигания цифр на сайте
       function updateClock (){                                 // Функция ввода разницы
           const t = timeDifference(endtime);
           days.textContent = getZeroInTimer(t.days);
           hours.textContent = getZeroInTimer(t.hours);
           minutes.textContent = getZeroInTimer(t.minutes);
           seconds.textContent = getZeroInTimer(t.seconds);

           if (t.total <= 0){                                         // Условие отключения таймера
               clearInterval(timeInterval);
           }
       }

       const timeInterval = setInterval(updateClock, 1000)  // Запуск функции ввода каждую секунду
   }


   function getZeroInTimer(num){                     // Пост-процесс: Добавляем 0 в числа таймера
        if (num >= 0 && num <= 10){
            return `0${num}`;
        } else {
            return num;
        }
   }

   setTime ('.timer',deadline);














































})
