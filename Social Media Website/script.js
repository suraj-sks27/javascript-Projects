//! LEFT SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//! MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//! THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//! create POST
const createPostForm = document.querySelector('.create-post');
const createPostInput = document.querySelector('#create-post');

//!========================== SIDEBAR ==============================

//todo----------------------- NOTIFICATION -------------------------
//?remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove('active');
  });
};

//?adding active class on click to menu items
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');

    let not = document.querySelector('.notification-popup');
    console.log(not);

    // NOTIFICATION show or hide
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none';
    } else {
      //if notification popup is already open close it
      if (not.style.display == 'block') {
        not.style.display = 'none';
      } else {
        document.querySelector('.notification-popup').style.display = 'block';
        document.querySelector('.notification-count').style.display = 'none';
      }
    }
  });
});

//todo----------------------- MESSAGES -------------------------
//?searches chats based on input key
const searchMessage = () => {
  let val = messageSearch.value.toLowerCase();

  message.forEach((chat) => {
    let name = chat.querySelectorAll('h5')[0].textContent.toLowerCase();

    //*matching name with the input value character by character
    //if the input val is inside of the name i.e not outside the string index then display it otherwise don't
    if (name.indexOf(val) != -1) {
      chat.style.display = 'flex';
    } else {
      chat.style.display = 'none';
    }
  });
};

//?search chat based on input key
messageSearch.addEventListener('keyup', searchMessage);

//?highlights messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotification.querySelector('.notification-count').style.display =
    'none';
  //removing boxshadow after 2 seconds
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});

//!================= THEME/DISPLAY customization ====================

//todo----------------------- THEME modal -------------------------

//? opens theme modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
};
theme.addEventListener('click', openThemeModal);

//? closes theme modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
};
themeModal.addEventListener('click', closeThemeModal);

//todo----------------------- FONT -------------------------
//?remove active class from spans of font-size
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove('active');
  });
};

//?changing font size and left-right section acc. to it.
fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    //removing active class from all the other spans
    removeSizeSelector();
    let fontSize;
    //adding active to current span
    size.classList.toggle('active');

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    } else {
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-10rem');
      root.style.setProperty('--sticky-top-right', '-35rem');
    }

    //!since we used (rem) to style all our fonts in this web page therefore we are able to change the font size of all at once.

    //changing font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
  });
});

//todo----------------------- PRIMARY COLOR -------------------------
//?removing active class from the color pallets
const removeActiveColorClass = () => {
  colorPalette.forEach((color) => {
    color.classList.remove('active');
  });
};

//?changing primar color
colorPalette.forEach((color) => {
  color.addEventListener('click', () => {
    //removing active class from all other spans
    removeActiveColorClass();
    let primaryHue;
    //adding active to current span
    color.classList.add('active');

    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else {
      primaryHue = 202;
    }

    root.style.setProperty('--primary-color-hue', primaryHue);
  });
});

//todo----------------------- BACKGROUND COLOR -------------------------
//?change BG function
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

//theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

Bg1.addEventListener('click', () => {
  //add active class
  Bg1.classList.add('active');

  //remove active from other class
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');

  //remove the changes by reloding the page
  window.location.reload();
});

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  //add active class
  Bg2.classList.add('active');

  //remove active from other class
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');

  changeBG();
});

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  //add active class
  Bg3.classList.add('active');

  //remove active from other class
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');

  changeBG();
});

//!================= search box ====================
createPostInput.addEventListener('focus', () => {
  createPostForm.style.boxShadow = '0 0 1rem var(--color-primary)';

  setTimeout(() => {
    createPostForm.style.boxShadow = 'none';
  }, 2000);
});
