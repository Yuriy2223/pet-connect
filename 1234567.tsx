<header>
  <div class="header-top-wrapper">
    <div class="container header-top-container">
      <a href="../index.html"><div class="logo-top"></div></a>
    </div>
  </div>

  <div class="header-bottom-wrapper">
    <div class="container header-bottom-container">
      <a href="../index.html"><div class="logo-bottom"></div></a>

      <div class="header-inner">
        <a class="header-ua">UA</a>

        <a class="header-phone" href="tel:+38012345678">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_36_1497"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="44"
              height="44"
            >
              <rect width="44" height="44" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_36_1497)">
              <path
                d="M36.575 38.5C32.7556 38.5 28.9819 37.6674 25.2542 36.0021C21.5264 34.3368 18.1347 31.9764 15.0792 28.9208C12.0236 25.8653 9.66319 22.4736 7.99792 18.7458C6.33264 15.0181 5.5 11.2444 5.5 7.425C5.5 6.875 5.68333 6.41667 6.05 6.05C6.41667 5.68333 6.875 5.5 7.425 5.5H14.85C15.2778 5.5 15.6597 5.64514 15.9958 5.93542C16.3319 6.22569 16.5306 6.56944 16.5917 6.96667L17.7833 13.3833C17.8444 13.8722 17.8292 14.2847 17.7375 14.6208C17.6458 14.9569 17.4778 15.2472 17.2333 15.4917L12.7875 19.9833C13.3986 21.1139 14.1243 22.2063 14.9646 23.2604C15.8049 24.3146 16.7292 25.3306 17.7375 26.3083C18.6847 27.2556 19.6778 28.134 20.7167 28.9438C21.7556 29.7535 22.8556 30.4944 24.0167 31.1667L28.325 26.8583C28.6 26.5833 28.959 26.3771 29.4021 26.2396C29.8451 26.1021 30.2806 26.0639 30.7083 26.125L37.0333 27.4083C37.4611 27.5306 37.8125 27.7521 38.0875 28.0729C38.3625 28.3938 38.5 28.7528 38.5 29.15V36.575C38.5 37.125 38.3167 37.5833 37.95 37.95C37.5833 38.3167 37.125 38.5 36.575 38.5ZM11.0458 16.5L14.0708 13.475L13.2917 9.16667H9.2125C9.36528 10.4194 9.57917 11.6569 9.85417 12.8792C10.1292 14.1014 10.5264 15.3083 11.0458 16.5ZM27.4542 32.9083C28.6458 33.4278 29.8604 33.8403 31.0979 34.1458C32.3354 34.4514 33.5806 34.65 34.8333 34.7417V30.7083L30.525 29.8375L27.4542 32.9083Z"
              />
            </g>
          </svg>
        </a>
        <button
          class="btn-menu-burger"
          type="button"
          aria-label="Відкрити меню"
        >
          <svg>
            <use href="../svg/sprite.svg#menu"></use>
          </svg>
        </button>
      </div>

      <nav class="burger-menu" aria-hidden="true">
        <button
          class="burger-menu-close"
          type="button"
          aria-label="Закрити меню"
        >
          <svg>
            <use href="../svg/sprite.svg#close"></use>
          </svg>
        </button>
        <ul class="burger-menu-list">
          <li><a href="#Products" class="burger-menu-link">Продукти</a></li>
          <li>
            <a href="#Certificates" class="burger-menu-link">Сертифікати</a>
          </li>
          <li>
            <a href="#Literature" class="burger-menu-link">Документація</a>
          </li>
          <li><a href="#Service" class="burger-menu-link">Послуги</a></li>
          <li><a href="#About" class="burger-menu-link">Про нас</a></li>
          <li>
            <a href="#Contact" class="burger-menu-link">Зв’язатися з нами</a>
          </li>
        </ul>
      </nav>

      <nav class="nav-menu">
        <ul class="menu-list">
          <li>
            <a href="#Products" class="menu-link">Продукти</a>
          </li>
          <li>
            <a href="#Certificates" class="menu-link">Сертифікати</a>
          </li>
          <li>
            <a href="#Literature" class="menu-link">Документація</a>
          </li>
          <li>
            <a href="#Service" class="menu-link">Послуги</a>
          </li>
          <li>
            <a href="#About" class="menu-link">Про нас</a>
          </li>
          <li>
            <a href="#Contact" class="menu-link">Зв’язатися з нами</a>
          </li>
        </ul>
        <div class="header-language-wrapper">
          <a class="header-language-ua">UA</a>
          <span class="language-span">|</span>
          <a class="language-en">EN</a>
        </div>
      </nav>
    </div>
  </div>
</header>




@use './common/index' as *;

.header-top-wrapper {
  display: none;
  width: 100%;
  background-color: $color-white;
  @include media(max-tablet) {
    display: block;
  }
  @include media(desktop) {
    display: block;
  }
}
.header-top-container {
  padding: 27px 30px;
}
.logo-top {
  width: 340px;
  height: 62px;
  background-image: url(../img/header/logo-1440-1024.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
}
.header-bottom-wrapper {
  width: 100%;
  background-color: $color-primary;
}
.header-bottom-container {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include media(tablet) {
    padding: 35px 40px;
  }
  @include media(max-tablet) {
    padding: 25px 30px;
  }
  @include media(desktop) {
    padding: 25px 190px;
  }
}
.logo-bottom {
  width: 188px;
  height: 51px;
  background-image: url(../img/header/logo-375png.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
  @include media(tablet) {
    width: 257px;
    height: 70px;
    background-image: url(../img/header/logo-768.png);
  }
  @include media(max-tablet) {
    display: none;
  }
  @include media(desktop) {
    display: none;
  }
}
.header-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  @include media(tablet) {
    gap: 44px;
  }
}
.header-ua {
  color: $color-white;
  font-family: $font-family-primary;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  padding: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 5px;
    bottom: 6px;
    width: 82%;
    height: 3px;
    background-color: $color-white;
    transition: background-color 300ms ease;
    @include media(tablet) {
      left: 5px;
      bottom: 1px;
      width: 85%;
      height: 5px;
    }
  }

  &:hover,
  &:active {
    color: $color-light-red;

    &::after {
      background-color: $color-light-red;
    }
  }
  @include media(tablet) {
    font-size: 36px;
    line-height: 1;
  }
  @include media(max-tablet) {
    display: none;
  }
  @include media(desktop) {
    display: none;
  }
}
.language-span {
  display: none;
  color: $color-white;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  @include media(max-tablet) {
    display: block;
  }
  @include media(desktop) {
    display: block;
  }
}
.language-en {
  display: none;
  color: $color-white;
  font-family: $font-family-primary;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  text-decoration: none;
  @include media(tablet) {
    display: none;
  }
  @include media(max-tablet) {
    display: block;
    &:hover,
    &:active {
      color: $color-light-red;
      text-decoration: underline;
    }
  }
  @include media(desktop) {
    display: block;
    &:hover,
    &:active {
      color: $color-light-red;
      text-decoration: underline;
    }
  }
}
.header-phone {
  display: none;
  @include media(tablet) {
    display: block;
    width: 44px;
    height: 44px;

    svg {
      width: 100%;
      height: 100%;
      fill: $color-white;
      transition: all 300ms ease;
    }

    &:hover svg,
    &:active svg {
      fill: $color-light-red;
      transform: scale(1.2);
    }
  }
}
.nav-menu {
  display: none;
  width: 100%;
  @include media(max-tablet) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @include media(desktop) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.menu-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  @include media(desktop) {
    width: 88%;
  }
}
.menu-link {
  padding: 6px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: $color-white;

  &:hover,
  &:active {
    color: $color-light-red;
    text-decoration: underline;
  }
  @include media(desktop) {
    font-size: 24px;
  }
}
.header-language-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;

  @include media(desktop) {
    gap: 12px;
  }
}
.header-language-ua,
.language-span,
.language-en {
  color: $color-white;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  padding: 4px;
  @include media(desktop) {
    font-size: 24px;
  }
}
.header-language-ua,
.language-en {
  &:hover,
  &:active {
    color: $color-light-red;
    text-decoration: underline;
  }
}
.btn-menu-burger {
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    // color: $color-white;
    fill: $color-white;
    transition: all 300ms ease;
  }

  &:hover svg,
  &:active svg {
    // color: $color-light-red;
    fill: $color-light-red;
    transform: scale(1.2);
  }

  @include media(tablet) {
    width: 44px;
    height: 44px;

    svg {
      width: 44px;
      height: 44px;
    }
  }
  @include media(max-tablet) {
    display: none;
  }
  @include media(desktop) {
    display: none;
  }
}
.burger-menu {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: $color-primary;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(100%);
  transition: all 500ms ease;

  &.active {
    display: flex;
    transform: translateX(0);
  }
  @include media(max-tablet) {
    display: none;
  }
  @include media(desktop) {
    display: none;
  }
}
.burger-menu-close {
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    width: 30px;
    height: 30px;
    // color: $color-white;
    fill: $color-white;
  }

  &:hover svg,
  &:active svg {
    // color: $color-light-red;
    fill: $color-light-red;
    transform: scale(1.2);
  }
}
.burger-menu-list {
  list-style: none;
  padding: 50px 20px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 60%;
}
.burger-menu-link {
  color: $color-white;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: $color-light-red;
    text-decoration: underline;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.btn-menu-burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.burger-menu-close');
  const menuLinks = document.querySelectorAll('.burger-menu-link');

  function closeMenu() {
    burgerMenu.classList.remove('active');
    burgerButton.setAttribute('aria-expanded', 'false');
    burgerMenu.setAttribute('aria-hidden', 'true');
  }

  burgerButton.addEventListener('click', function () {
    const isOpen = burgerMenu.classList.toggle('active');
    burgerButton.setAttribute('aria-expanded', isOpen.toString());
    burgerMenu.setAttribute('aria-hidden', (!isOpen).toString());
  });

  closeButton.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (event) {
    if (
      burgerMenu.classList.contains('active') &&
      !burgerMenu.contains(event.target) &&
      !burgerButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
});