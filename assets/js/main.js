$(document).ready(function(){
	// toggle button
	$('.navbar-toggler').click(function(){
		$('.navbar-toggler').toggleClass('change')

	});
	// sticky navbar less padding
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		if(position>=400){
			$('.navbar').addClass('navbar-background');
			$('.navbar').addClass('fixed-top');
		}
		else{

			$('.navbar').removeClass('navbar-background');
			$('.navbar').removeClass('fixed-top');

		}	
	});
	
	// smoothscroll
	$('.nav-item a, .header-link, #back-to-top').click(function(link){
		link.preventDefault();

		let target = $(this).attr('href');

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 25
		},3000);

	})

	// back-to-top
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		if(position>= 400){
			$('#back-to-top').addClass('scrollTop');
		} else{
			$('#back-to-top').removeClass('scrollTop');
		}	
	})

	// ripples

	// $("header, .info").ripples({
 //  		dropRadius: 25,
 //  		perturbance: 0.7,
	// });

	// magnific-popup
	$('.parent-container').magnificPopup({
  		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery:{
  			enabled: true
  		}
  		// other options
	});



	// remove item
	let removeCartItemsBtn = document.getElementsByClassName('btn-danger')
	for (let i = 0; i < removeCartItemsBtn.length; i++) {
		let button = removeCartItemsBtn[i]
		button.addEventListener('click', removeCartItem)
	}
	function removeCartItem(event){
		let buttonClicked = event.target
			buttonClicked.parentElement.parentElement.remove()
			
			updateCartTotal()
	}

	// update cart total
	function updateCartTotal() {
		let cartItemContainer = document.getElementsByClassName('cart-items')[0]
		let cartRows = cartItemContainer.getElementsByClassName('cart-row')
		let total = 0
		for (let i = 0; i < cartRows.length; i++) {
			let cartRow = cartRows[i]
			let priceElement = cartRow.getElementsByClassName('cart-price')[0]
			let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
			let price = parseFloat(priceElement.innerText.replace('$', ''))
			let quantity = quantityElement.value
			total = total + (price * quantity)	
		}
		total = Math.round(total * 100) / 100
		document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
		updateCartTotal()
	}

	// updatetotal number

	let quantityInputs = document.getElementsByClassName('cart-quantity-input')
	for (let i = 0; i < quantityInputs.length; i++) {
		let input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}
	function quantityChanged(event){
		let input = event.target
			if (isNaN(input.value) || input.value <= 0) {
			input.value = 1
			}
		updateCartTotal()
	}

	// ADD TO CART
	let addToCartButtons = document.getElementsByClassName('cart-food-item')

	for (let i = 0; i < addToCartButtons.length; i++) {
		let button = addToCartButtons[i]
		button.addEventListener('click', addToCartClicked)
	}

	function addToCartClicked(event) {
		let button = event.target
		let cartFoodItem = button.parentElement.parentElement
		let title = cartFoodItem.getElementsByClassName('cart-title')[0].innerText
		let cartPrice = cartFoodItem.getElementsByClassName('cart-food-price')[0].innerText
		let imageSrc = cartFoodItem.getElementsByClassName('cart-image')[0].src
		console.log(title, cartPrice, imageSrc)
		addItemToCart(title, cartPrice, imageSrc)
	}

	function addItemToCart(title, cartPrice, imageSrc) {
		let cartRow = document.createElement('div')
		cartRow.innerText = title
		let cartItems = document.getElementsByClassName('cart-items')
		let cartRowContents =`
		<div class="col-5 cart-item cart-column d-flex">
			<img class="cart-item-image" src="assets/images/food25.jpeg">
			<span class="cart-item-title">PORK SANDWICH</span>
		</div>
		<div class="col-3 cart-price cart-column">
			<span>$40.00</span>
		</div>
		<div class="col-4 cart-quantity cart-column d-flex">
			<input type="number" value="1" class=" mr-sm-3 cart-quantity-input">
			<button class="btn btn-danger" type="button">REMOVE</button>
		</div>`
		cartItems.append(cartRow)
	}






})
	

// 	var i;
// 	var x = 
// 	document.getElementById("header");
// 	for (i=0; i< x.length; i++){
// 		x[i].style.display = "none";

// 	}
// 	slideIndex++;
// 	if (slideIndex > x.length)
// 	{slideIndex = 1}
	
// 	setTimeout (showslides, 3000); 
	
// }
// // slideshow
	// var images = new Array('assets/images/background.jpeg','assets/images/background1.jpeg','assets/images/background3.jpg'); 
	// var slideIndex = 0;
	// showslides();

	// function showslides(){
	// 	if (slideIndex>=images.length){slideIndex=0;}
	// 	$('#header')
	// 	.css('background-image', 'url("'+images[slideIndex++]+'")')
	// 	.fadeIn(500, function(){
	// 		setTimeout(showslides, 3000);
	// 	});
	
	// };