const header = () => {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header-nav");
  
  const headerNavThemeIconContainer=document.getElementById('headerNavThemeIconContainer');

  const headerNavMenuIcon = document.getElementById("headerNavMenuIcon");
  const headerMenuCloseIcon = document.getElementById("headerMenuCloseIcon");
  const headerNavMenuLinkList = document.querySelector(
    ".header-nav__menu-link-list"
  );
  const headerNavMenuLinkItems = document.querySelectorAll(
    ".header-nav__menu-link-item"
  );

  const toggleMenu=()=>{
    const body=document.querySelector('.body');
    body.classList.toggle('body--light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');
  };

  const documentScroll = () => {
    header.classList.toggle("header--scroll", window.scrollY > 0);
    headerNav.classList.toggle("header-nav--scroll", window.scrollY > 0);
  };

  const openMenu = () => {
    headerNavMenuLinkList.classList.add("header-nav__menu-link-list--open");
  };

  const closeMenu = () => {
    headerNavMenuLinkList.classList.remove("header-nav__menu-link-list--open");
  };

  document.addEventListener("scroll", documentScroll);
  headerNavThemeIconContainer.addEventListener('click',toggleMenu);
  headerNavMenuIcon.addEventListener("click", openMenu);
  headerMenuCloseIcon.addEventListener("click", closeMenu);
  headerNavMenuLinkItems.forEach((element) => {
    element.addEventListener("click", closeMenu);
  });
};

export default header;
