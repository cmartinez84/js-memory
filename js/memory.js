function Game(){
    this.matchCount = 0;
}


  Game.prototype.findMatch = function(card1, card2) {
    if (card1 === card2) {
      this.matchCount += 1;
      return true;
    } else {
      return false;
    }
  };

  // exports.gameModule = Game;

$(function(){

  var div1;
  var div2;
  var card1;
  var card2;
  var clickCount = 0;
  var match = 0;
  $("div").click(function(){

    $(this).children().show();
    var game = new Game();
    if (clickCount === 0){
      card1 = $(this).children().attr('src');
      div1 = $(this);
      clickCount +=1;
    }
    else{
      // console.log("else");
      card2 = $(this).children().attr('src');
      div2 = $(this);
      clickCount = 0;

      var result = game.findMatch(card1, card2);
      if(result){
        match +=1;
        console.log(match);
        if(match === 5){
          alert("hurray");
          $("div").children().hide();
        }
      }
      else{
        div1.children().hide(1000);
        div2.children().hide(1000);
      }
    }





  });
});
