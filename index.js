const scrollTo = () => {
    console.log('this is the top')
}




$(window).scroll(()=> {
   if($(window).scrollTop() + $(window).height() > $(document).height() *.90  ) {
       $(window).unbind('scroll');
       alert("near bottom!");
   }
});
