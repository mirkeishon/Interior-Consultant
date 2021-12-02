const menuButton = document.querySelector('#mobile-menu-button');
const menuContent = document.querySelector('#menu-content');
const listItem = document.querySelectorAll('.this-interior-menu-item');
const body = document.querySelector('body');

const openMenu = ()=>{
	menuButton.classList.toggle("active");
	menuContent.classList.toggle("active");
	body.classList.toggle("active");
}

const closeMenu = ()=>{
	menuButton.classList.remove("active");
	menuContent.classList.remove("active");
	body.classList.remove("active");
}

menuButton.addEventListener('click', openMenu)

listItem.forEach(n => n.addEventListener('click', closeMenu));
