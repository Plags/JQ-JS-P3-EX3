$(document).ready(function(){
  var essai = 0; //Nombre d'essai
  // var minNumber=0;
  // var maxNumber=100;
  // var random = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
  var random = Math.floor(Math.random() * 110); //Aleatoire
  var msg = "C'est moins.";
  var msg2 = "C'est plus.";
// alert(random);
  $('#clickMe').click(function(){
    var value = $('#texte').val(); //Value = champ de texte
    essai++;
    if(value > random){
      alert(msg);
    }else if(value < random){
      alert(msg2);
    }else{
      alert("Tu as gagné en"+ essai + "coups !");
    };

  });
});
