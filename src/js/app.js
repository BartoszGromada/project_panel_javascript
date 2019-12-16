/* eslint-disable linebreak-style */

import {select, className} from './settings.js';

const app = {
  initChart: function () {
    const thisApp = this;

    thisApp.ctx = document.getElementById('myChart').getContext('2d');
    thisApp.chart = new Chart(thisApp.ctx, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
          label: 'Signups',
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
          hidden: true,
        }
        ]
      },
    });
  },
  initListener: function() {
    const thisApp = this;

    thisApp.menuElements = document.querySelectorAll(select.listOf.menuElements);

    for (let element of thisApp.menuElements) {
      element.addEventListener('click', function(event) {
        event.preventdefault;
        thisApp.changeSection();
      });
    }

    thisApp.hamburger = document.querySelector(select.hamburger);
    thisApp.hamburger.addEventListener('click', function(event) {
      event.preventdefault;
      thisApp.changeMenu();
    })
  },
  changeSection: function() {
    const thisApp = this;

    thisApp.clickedElement = event.target;
    thisApp.clickedSection = thisApp.clickedElement.getAttribute(select.data.section);
    thisApp.activeSections = document.querySelectorAll(select.all.activeSection);

    for (let activeSection of thisApp.activeSections) {
      activeSection.classList.remove(className.active);
      activeSection.classList.add(className.deactive);
    }

    thisApp.newActiveSection = document.querySelector('.' + thisApp.clickedSection);

    thisApp.newActiveSection.classList.remove(className.deactive);
    thisApp.newActiveSection.classList.add(className.active);
  },
  changeMenu: function() {
    const thisApp = this;

    thisApp.sidebar = document.querySelector(select.sidebar);
    thisApp.container = document.querySelector(select.main);

    thisApp.sidebar.classList.toggle('sidebar--change');
    thisApp.container.classList.toggle('container-main--change');
  },
  init: function () {
    const thisApp = this;

    thisApp.initChart();
    thisApp.initListener();

  },
};

app.init();
