$(document).ready(function(){
  console.log('I am here for you.');
  $('#salmonTime').tooltip('show');
  console.log("Hello CHI");

  var clickCounter = 0;

  $('#salmonTime').on("click",function(){
    switch (clickCounter % 4){
      case 0:
        $('.jumbotron').removeClass('light-salmon');
        $('.jumbotron').addClass('salmon');
        break;
      case 1:
        $('.jumbotron').removeClass('salmon');
        $('.jumbotron').addClass('dark-salmon');
      break;
      case 2:
        $('.jumbotron').removeClass('dark-salmon');
        $('.jumbotron').addClass('light-coral');
      break;
      case 3:
        $('.jumbotron').removeClass('light-coral');
        $('.jumbotron').addClass('light-salmon');
      break;
    }
    clickCounter ++;
    console.log("you've clicked learn more");

  });
});
