'use strict';
document.addEventListener('DOMContentLoaded', function() {


    const tabsParent = document.querySelector('.tabheader__items'), // Контайнер табов
        tabs = document.querySelectorAll('.tabheader__item'),        // Табы
        tabsContent = document.querySelectorAll('.tabcontent')       // Текст табов

    function hideTabsContent() {                               // Функция для скрытия всех элементов из tabs
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






















})
