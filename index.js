const scrollTo = () => {
    console.log('this is the top')
}





$(window).scroll(()=> {
    const miniCart = document.getElementsByClassName('mini-cart-product')

   if($(window).scrollTop() + $(window).height() > $(document).height() *.90  ) {
      $(window).unbind('scroll');
      //alert("near bottom!");
      for (let i = 0 ; miniCart.length > i ; i++){
		console.log(miniCart[i])
	}
   }
});



