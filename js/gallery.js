window.addEventListener("load", ()=>{

  var grid = document.querySelector('.box');
  var iso = new Isotope( grid, {
    // options...
    itemSelector: 'article',
    columnWidth: 'article', 
    transitionDuration: '0.5s'
  });


});
