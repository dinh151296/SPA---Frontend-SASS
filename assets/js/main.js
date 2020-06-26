var cartBox = {
	init: function(){
		this.showCartBox();
		this.scrollMenu();
		this.showMenu();
		this.showDropdownMenu();
	},

	showCartBox: function(){
		var cartIcon = document.querySelector('.header__cart');
		var cartBox = document.querySelector('.cart-box');
		var cartBoxIcon = document.querySelector('.cart-box__icon');
		cartIcon.addEventListener('click', function(){
			cartBox.classList.toggle('show-hidden__box');
		});
	},

	scrollMenu: function(){
		var header = document.querySelector('.header');
		window.addEventListener('scroll', function(){
			var scrollBrowser = window.pageYOffset;
			if(scrollBrowser > 60){
				header.classList.add('header-scroll');
			}else{
				header.classList.remove('header-scroll');
			}
		});
	},

	showMenu: function(){
		// icon menu main
		var burger = document.querySelector('.burger');
		var menuMobile = document.querySelector('.menu-mobile');
		burger.addEventListener('click',function(){
			burger.classList.toggle('burger-last');
			menuMobile.classList.toggle('menu-mobile-show');
		});

		// icon menu-mobile
		var burgerMobile = document.querySelector('.menu-mobile__button-close');
		burgerMobile.addEventListener('click', function(){
			burgerMobile.classList.toggle('burger-mobile__last');
			menuMobile.classList.remove('menu-mobile-show');
			burger.classList.remove('burger-last');
		});
	},

	showDropdownMenu: function(){
		var menuDropdownMobileIcon =
		document.querySelector('.menu-mobile__nav-link');
		var menuDropdownMobile =
		document.querySelector('.menu-mobile__nav-dropdown');
		// for(var i = 0; i <= menuDropdownMobileIcon.length; ++i){
		// 	console.log(menuDropdownMobileIcon[i]);
		// 	menuDropdownMobileIcon[i].addEventListener('click', function(){
		// 		menuDropdownMobile.classList.toggle('how-menu-dropdown-mobile');
		// 	});
		// }
		menuDropdownMobileIcon.addEventListener('click', function(){
			menuDropdownMobile.classList.toggle('how-menu-dropdown-mobile');
		});
	},
}

cartBox.init();