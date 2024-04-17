/*-------------------------------------
  Template name:      Hexadash tailwind css
  Version:            1.0
  Author Name:        dashboardmarket
---------------------------------------*/

"use strict";

/* Preloader */
function preloader(param) {
  let preloader = document.querySelector(param);
  window.addEventListener('load', function () {
    if (preloader) {
      preloader.classList.add("show")
    }
  });
};


/* Search Dropdown trigger */
function searchTrigger(selector, target) {
  const searchToggle = document.querySelector(selector);
  const searchFormTopMenu = document.querySelector(target);
  if (searchToggle) {
    searchToggle.addEventListener('click', function () {
      this.classList.toggle('close');
      searchFormTopMenu.classList.toggle('visible');
    });
  }
};

/* Dark Switch Button */
function darkMode() {
  const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
  const darkModeToggle = document.querySelector('.dark-single-switch');
  const darkModeSwitch = document.querySelector('#darkModeToggle');
  const darkMode = document.querySelector('body');

  function setDarkMode(enabled) {
    if (enabled) {
      darkMode.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      if (darkModeSwitch) {
        darkModeSwitch.checked = true;
      }
    } else {
      darkMode.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      if (darkModeSwitch) {
        darkModeSwitch.checked = false;
      }
    }
  }

  function toggleDarkMode() {
    const darkModeState = darkMode.classList.contains('dark');

    setDarkMode(!darkModeState);
    if (darkModeToggle) {
      darkModeToggle.classList.toggle('active', !darkModeState);
    }
  }

  setDarkMode(isDarkModeEnabled);

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }

  if (darkModeSwitch) {
    darkModeSwitch.addEventListener('change', toggleDarkMode);
  }
}

/* RTL LTR Switch */
function rtlSwitch() {
  const rtlToggle = document.getElementById('rtlToggle');

  if (rtlToggle) {
    function setDirection() {
      const isRtl = rtlToggle.checked;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
      localStorage.setItem('isRtl', isRtl); // Store the state
    }

    rtlToggle.addEventListener('change', setDirection);

    const isRtlStored = localStorage.getItem('isRtl');
    if (isRtlStored === 'true') {
      rtlToggle.checked = true;
    } else {
      rtlToggle.checked = false;
    }

    setDirection();
  }
}

/* Top Menu Toggle */
function topMenuToggle() {
  const topMenuToggle = document.getElementById('topMenuToggle');
  const target = document.getElementById('asideBar');
  const target2 = document.getElementById('navBar');
  const body = document.getElementById('content');
  const limToggler = document.getElementById('slim-toggler');
  const topMenuWrapper = document.getElementById('topMenuWrapper');

  if (topMenuToggle && target && body && limToggler && topMenuWrapper) {
    function setTopMenuStyle() {
      target.classList.toggle('collapsed')
      target2.classList.toggle('collapsed')
      body.classList.toggle('expanded')
      limToggler.classList.toggle('hide', topMenuToggle.checked);
      topMenuWrapper.classList.toggle('flex', topMenuToggle.checked);
      topMenuWrapper.style.transition = topMenuToggle.checked ? 'all 0.3s linear 0s' : 'all 0.3s linear 0s';
      localStorage.setItem('isTopMenuChecked', topMenuToggle.checked);
    }

    topMenuToggle.addEventListener('change', setTopMenuStyle);
    const isTopMenuChecked = localStorage.getItem('isTopMenuChecked');
    if (isTopMenuChecked === 'true') {
      topMenuToggle.checked = true;
      setTopMenuStyle();
    } else {
      topMenuToggle.checked = false;
    }
  }
};

/* sidebar dropdown */
function sidebarDropdown() {
  let submenus = document.querySelectorAll('aside .sub-item-wrapper');
  let direction = document.querySelector('html').getAttribute('dir');
  submenus.forEach(item => {
    item.addEventListener('mouseover', function () {
      let menuItem = this;
      let menuItemRect = menuItem.getBoundingClientRect()
      let submenuWrapper = menuItem.querySelector('.sub-item');
      submenuWrapper.style.top = `${menuItemRect.top}px`;
    })
  });
}

/* Password visibility */
function passVisible() {
  const passwordToggle = document.querySelector('.js-password-toggle');
  const passwords = document.querySelectorAll('.js-password');
  const passwordLabel = document.querySelector('.js-password-label i');

  if (passwordToggle) {
    passwordToggle.addEventListener('change', function () {
      passwords.forEach(password => {
        if (password.type === 'password') {
          password.type = 'text';
          passwordLabel.classList.add('uil-eye');
          passwordLabel.classList.remove('uil-eye-slash');
        } else {
          password.type = 'password';
          passwordLabel.classList.remove('uil-eye');
          passwordLabel.classList.add('uil-eye-slash');
        }

        password.focus();
      });
    });
  }
};

/* Redirect index page */
function redirectIndex() {
  const form = document.getElementById('admin-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm()) {
        window.location.href = 'index.html';
      }
    });

    function validateForm() {
      const passwordField = document.getElementById('password');
      if (
        (passwordField.value.trim() === '')
      ) {
        alert('Password is required.');
        return false;
      }
      return true;
    }
  }
};

/* Current Year */
function currentYear() {
  const elements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  if (currentYear) {
    elements.forEach(element => {
      element.innerHTML = currentYear;
    });
  }
};

/* Count days (plugin) */
function countDays() {

  var daysElement = document.querySelector("#countDays");
  var hoursElement = document.querySelector("#countHours");
  var minutesElement = document.querySelector("#countMinutes");
  var secondsElement = document.querySelector("#countSeconds");
  var containerElement = document.querySelector(".counting");
  var endDate = (new Date().getFullYear() + 1) + "/01/01";

  if (containerElement) {
    var myCountDown = new ysCountDown(endDate, function (remaining, finished) {

      if (finished) {
        containerElement.textContent = "Expired";
      }

      daysElement.textContent = remaining.totalDays;
      hoursElement.textContent = remaining.hours;
      minutesElement.textContent = remaining.minutes;
      secondsElement.textContent = remaining.seconds;

    });
  }
};

/* Blog details sticky social */
function stickySocial() {
  var shareGroup = document.getElementById("sticky-social");
  if (shareGroup) {
    if (window.scrollY <= 700) {
      shareGroup.classList.remove("show");
    } else {
      shareGroup.classList.add("show");
    }
  }
};

/* Slim Header */
function slimToggler() {
  const sidebarToggle = document.querySelector("#slim-toggler");
  const sidebar = document.querySelector("#asideBar");
  const navbar = document.querySelector("#navBar");
  const contents = document.querySelector("#content");
  const rightEllipsis = document.querySelector("#right-ellipsis")

  function toggleSidebar() {
    if (sidebar) {
      sidebar.classList.toggle("collapsed");
      navbar.classList.toggle("collapsed");
    }
    if (contents) {
      contents.classList.toggle("expanded");
    }
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function (e) {
      toggleSidebar();
    });
  }

  function toggleRightEllipsis() {
    if (rightEllipsis) {
      contents.classList.toggle("active");
    }
  }

  if (rightEllipsis) {
    rightEllipsis.addEventListener("click", function (e) {
      toggleRightEllipsis();
    });
  }

  document.addEventListener("click", function (e) {
    const target = e.target; // Clicked element
    if (window.innerWidth <= 1199 && !sidebar.contains(target) && !sidebarToggle.contains(target)) {
      // Check if the sidebar or toggle button was not clicked
      if (sidebar.classList.contains("collapsed")) {
        // If sidebar is collapsed, remove the classes
        sidebar.classList.remove("collapsed");
        navbar.classList.remove("collapsed");
        if (contents) {
          contents.classList.remove("expanded");
        }
      }
    }
  });
};

/* Sidebar Toggle ul */
function sidebarToggler() {
  document.querySelectorAll(".navBar .sub-item-wrapper > a").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      var parent = this.parentNode;
      var siblingUl = parent.querySelector("ul");

      document.querySelectorAll(".navBar .sub-item-wrapper").forEach(function (item) {
        if (item !== parent) {
          item.classList.remove("open");
          item.querySelector("ul").style.display = "none";
        }
      });

      parent.classList.toggle("open");
      siblingUl.style.display = parent.classList.contains("open") ? "block" : "none";
    });
  });
}


/* Sidebar scroll sync menu item */
function scrollMenuActive(selector,target) {

  var activeMenuItems = document.querySelectorAll(selector);
  var navBar = document.querySelector(target);

  if(activeMenuItems){
    activeMenuItems.forEach(function (menuItem) {
      var rect = menuItem.getBoundingClientRect();
      var topValue = rect.top;
  
      function scrollWin(topValue) {
        if (navBar) {
  
          var scrollPosition = (topValue - 300);
          navBar.scrollTop = scrollPosition;
        }
      }
  
      window.onload = function () {
        scrollWin(topValue);
      };
    });
  }
};


/* list Item active class */

function listItemActive(selector, toggleClass) {
  const links = document.querySelectorAll(selector);

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((e) => {
        e.classList.remove(toggleClass)
      })
      this.classList.add(toggleClass)
    })
  })
};

/* Inbox utility */
function inbox() {
  //toggle star
  const toggleStars = document.querySelectorAll(".inboxToggleStar");
  toggleStars.forEach((toggleStar) => {
    toggleStar.addEventListener("click", function () {
      if (toggleStar.classList.contains("active")) {
        toggleStar.classList.remove("active");
      } else {
        toggleStar.classList.add("active");
      }
    });

  });

  /* Add Label */
  function addNewLabel() {
    const labelName = document.getElementById('newLabelInput').value;
    if (labelName) {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.className = 'font-normal text-[15px] relative flex items-center bg-transparent text-body dark:text-subtitle-dark px-[15px] py-[10px] gap-[15px] rounded-md capitalize hover-bg-primary/10 hover-text-primary';
      anchor.innerHTML = `
                <i class="uil uil-list-ul"></i>
                ${labelName}
            `;
      listItem.appendChild(anchor);
      const labelList = document.getElementById('label-list');
      labelList.appendChild(listItem);
      document.getElementById('newLabelInput').value = ''; // Clear the input field
    }
  }
  const addLabelButton = document.getElementById('addLabelButton');
  if (addLabelButton) {
    addLabelButton.addEventListener('click', addNewLabel);
  }

};

/* Show and Hide Div */
function toggleDiv(a, b) {
  const replyResult = document.querySelector(a);
  if (replyResult) {
    replyResult.addEventListener('click', function () {
      var div = document.querySelector(b);
      if (div.classList.contains('hidden')) {
        div.classList.remove('hidden');
        div.classList.add('visible');
        replyResult.classList.add('active');
      } else {
        replyResult.classList.remove('active');
        div.classList.remove('visible');
        div.classList.add('hidden');
      }
    });
  }
};

/* Editor inbox (Plugin) */
function editorInbox(param) {
  const selector = document.querySelector(param);

  if (selector) {
    var quill = new Quill(param, {
      theme: 'snow',
      placeholder: 'Type Your message...',
    });
  }
};

/* Remove free api console warning */
function consoleErrorRemove(param) {
  const auxElements = document.querySelectorAll(param);
  auxElements.forEach(function (auxElement) {
    auxElement.style.display = 'none';
  });
};

/* Toggle Class */
function classAddRemove(selector, targetSelector, toggleClass) {
  const myButtons = document.querySelectorAll(selector);
  const targetDiv = document.querySelector(targetSelector);

  if (myButtons && targetDiv) {
    myButtons.forEach(myButton => {
      myButton.addEventListener("click", () => {
        targetDiv.classList.toggle(toggleClass);
      });
    });
  }
};

/* Checkbox Group Toggle */
function checkboxGroupToggle(target) {
  const checkboxes = document.querySelectorAll(target);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      if (this.checked) {
        checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });
};

/* DateRangePicker (plugin) */

function dateRangePicker(target) {
  const elem = document.getElementById(target);
  if (elem) {
    const rangepicker = new DateRangePicker(elem, {});
  }
};

/* Datepicker (plugin) */
function datepicker(target) {
  const elem = document.getElementById(target);
  if (elem) {
    const datepicker = new Datepicker(elem, {
      nextArrow: '<i class="uil uil-angle-right-b"></i>',
      prevArrow: '<i class="uil uil-angle-left-b"></i>'
    });
  }
};
/* Number counter */
function numberCounter(selector, target, duration) {

  let startTime;
  const countElements = document.querySelectorAll(selector);

  countElements.forEach(function (element) {

    const countNumberElement = element.querySelector(target);
    const maxNumber = parseInt(element.getAttribute('data-number'), 10);
    let currentNumber = 0;

    function updateNumber() {

      if (!startTime) {
        startTime = Date.now();
      }

      const elapsed = Date.now() - startTime;
      if (elapsed > duration) return;

      duration -= elapsed;

      if (currentNumber >= maxNumber) {
        countNumberElement.textContent = maxNumber.toLocaleString();
      } else {
        currentNumber += 1;
        countNumberElement.textContent = currentNumber.toLocaleString();
      }

      if (currentNumber < maxNumber) {
        setTimeout(updateNumber, 1);
      }

      if (duration <= 0) {
        startTime = null;
        duration = 200;
      }

    }

    updateNumber();

  });

};

/* svgMap (plugin) */
function svgMapWrapper(target) {
  const mapSelector = document.getElementById(target);
  if (mapSelector) {
    new svgMap({
      targetElementID: target,
      initialZoom: 1.06,
      initialPan: {
        x: 30,
        y: 60
      },
      flagType: 'emoji',
      colorMax: '#DBE1E8',
      colorMin: '#DBE1E8',
      colorNoData: '#DBE1E8',
      data: window.mapData,
    });
  }
}

/* svgMap Button Custom Icon Pushed */
function addZoomIcons(buttonSelector, iconClass) {
  const zoomButton = document.querySelector(buttonSelector);

  if (zoomButton) {
    const zoomIcon = document.createElement('i');
    zoomIcon.classList.add('uil', iconClass);
    zoomButton.appendChild(zoomIcon);
  }
}

/* Check All Group */
function checkAllGroup(selector, target) {
  const checkboxes = document.querySelectorAll(target);
  const checkAll = document.getElementById(selector);

  if (checkboxes && checkAll) {
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        const checkedCount = document.querySelectorAll(`${target}:checked`).length;

        checkAll.checked = checkedCount > 0;
        checkAll.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
      });
    });

    checkAll.addEventListener('change', function () {
      checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
      });
    });
  }
};

/* Indeterminate checkbox  */
function indeterminateCheckbox(target) {
  const checkbox = document.getElementById(target);
  if (checkbox) {
    checkbox.indeterminate = true;
  }
};

/* Checked Or Disabled */
function checkedOrDisabled(target) {
  function toggleCheckbox(button) {
    const checkbox = button.parentElement.parentElement.querySelector('#checkboxOrDisabled');
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      button.textContent = checkbox.checked ? 'Uncheck' : 'Check';
    }
  }

  function toggleDisabled(button) {
    const customCheckbox = button.parentElement.parentElement.querySelector('#checkboxOrDisabled');
    if (customCheckbox) {
      customCheckbox.disabled = !customCheckbox.disabled;
      customCheckbox.classList.toggle('disabled');
      button.textContent = customCheckbox.classList.contains('disabled') ? 'Enable' : 'Disable';
    }
  }

  const checkToggleButtons = document.querySelectorAll('.btn-checkToggle');
  const activeToggleButtons = document.querySelectorAll('.btn-activeToggle');

  checkToggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      toggleCheckbox(button);
    });
  });

  activeToggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      toggleDisabled(button);
    });
  });
};

/* Gallery Filter (plugin) */
function galleryFilter(target) {
  var containerEl = document.querySelector(target);
  if (containerEl) {
    var mixer = mixitup(containerEl);
  }
};

/* Unicons (library) */

function unIcons(target) {
  const xhr = new XMLHttpRequest();
  const selector = document.querySelector(target);
  xhr.open('GET', typeof env !== "undefined" && env.iconLoaderUrl ? env.iconLoaderUrl : "data/icons.json", true);
  if (selector) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const feIcons = data.uniCons;

        const colFe = feIcons.map(icon =>
          `
          <div class="col-span-12 2xl:col-span-3 sm:col-span-6 lg:col-span-4">
           <div class="flex items-center gap-[5px]">
            <i class="text-[20px] text-body dark:text-subtitle-dark uil uil-${icon}"></i>
            <span class="text-body dark:text-subtitle-dark text-[16px]">${icon}</span>
           </div>
          </div>
          `
        ).join('');

        selector.innerHTML = colFe;
      }
    };
    xhr.send();
  }
};

/* Randomly increase and decrease number */
function randomNum(target, increase, decrease) {
  const badgeNumber = document.getElementById(target);
  const increaseButton = document.getElementById(increase);
  const decreaseButton = document.getElementById(decrease);

  if (badgeNumber && increaseButton && decreaseButton) {
    increaseButton.addEventListener('click', () => {

      const currentNumber = parseInt(badgeNumber.getAttribute('data-number'));
      badgeNumber.setAttribute('data-number', currentNumber + 1);
      badgeNumber.textContent = currentNumber + 1;
    });

    decreaseButton.addEventListener('click', () => {

      const currentNumber = parseInt(badgeNumber.getAttribute('data-number'));
      if (currentNumber > 0) {
        badgeNumber.setAttribute('data-number', currentNumber - 1);
        badgeNumber.textContent = currentNumber - 1;
      }
    });
  }
};

/* Switch toggle class */
function switchClass(selector, target, class1) {
  // Get the switch selector element
  const switchSelector = document.getElementById(selector);

  // Get the switch-on element
  const switchOn = document.getElementById(target);

  if (switchSelector && switchOn) {
    function applyToggleClass() {
      // Check if the switch selector is checked
      if (switchSelector.checked) {
        // Add the toggle class to the switch-on element
        switchOn.classList.add(class1);
      } else {
        // Remove the toggle class from the switch-on element
        switchOn.classList.remove(class1);
      }
    }
    switchSelector.addEventListener('change', applyToggleClass);
  }
}

function outsideToggleClass(target, selector, toggleClass) {
  var button = document.getElementById(target);
  var ul = document.getElementById(selector);

  if (button) {
    button.addEventListener('click', function () {
      ul.classList.toggle(toggleClass);
    });

    document.addEventListener('click', function (event) {
      var isClickInsideButton = button.contains(event.target);
      var isClickInsideUl = ul.contains(event.target);

      if (!isClickInsideButton && !isClickInsideUl) {
        ul.classList.remove(toggleClass);
      }
    });
  }
}


function content_ready_scripts() {
  preloader('.preloader');
  searchTrigger('.theme-dropdown-trigger', '.theme-dropdown');
  darkMode();
  rtlSwitch();
  topMenuToggle();
  sidebarDropdown();
  passVisible();
  redirectIndex();
  currentYear();
  countDays();
  stickySocial();
  slimToggler();
  sidebarToggler();
  scrollMenuActive('.navBar li a.active','.navBar');
  listItemActive('.listItemActive li a', 'active');
  inbox();
  toggleDiv('.user-reply-1', '.user-reply-1-result');
  toggleDiv('.user-reply-2', '.user-reply-2-result');
  toggleDiv('.email-overlay-btn', '.email-overlay-message');
  toggleDiv('.email-overlay-message-close', '.email-overlay-message');
  editorInbox('.editorCompose');
  editorInbox('.editorMessage');
  editorInbox('.editorMessage-two');
  classAddRemove('.full-window-trigger', '.email-overlay-message', 'window-full');
  checkboxGroupToggle('.radio-group input');
  dateRangePicker('dateRangePicker');
  datepicker('mini-datepicker');
  datepicker('singleDatepicker');
  numberCounter(".countCategories", ".countNumber");
  svgMapWrapper('svgMap');
  addZoomIcons('.svgMap-zoom-in-button', 'uil-plus');
  addZoomIcons('.svgMap-zoom-out-button', 'uil-minus');
  checkAllGroup('inboxIndeterminate', 'input.checkboxItem');
  checkAllGroup('checkAll', 'input.checkboxItem');
  checkAllGroup('flexCheckIndeterminate', 'input.checkboxItem');
  indeterminateCheckbox('indeterminate');
  checkedOrDisabled();
  galleryFilter('.mixitup-gallery');
  unIcons('.feIcon-list-box');
  randomNum('badge-number', 'badge-number-increase', 'badge-number-decrease');
  switchClass('switch-selector', 'switch-on', 'active');
  outsideToggleClass('author-dropdown', 'right-ellipsis-trigger', 'active');
  outsideToggleClass('inbox-sidebar-selector', 'inbox-sidebar-target', 'nav-open');
  outsideToggleClass('chat-sidebar-selector', 'chat-sidebar-target', 'nav-open');
  outsideToggleClass('faq-sidebar-selector', 'faq-sidebar-target', 'nav-open');

}

setTimeout(function () {
     
}, 2000);

window.addEventListener('resize', function () {

});

window.addEventListener('scroll', function () {
  stickySocial();
  
});

document.addEventListener('DOMContentLoaded', function () {
  content_ready_scripts();
});