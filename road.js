function road(){

var user = prompt("You come across a MAN who is traveling in the opposite direction from you on the ROAD. Do you FIGHT, TALK, IGNORE, or RUN?").toUpperCase();
switch(user){
    case 'FIGHT':
        swal("You raise your FISTS up in a fighting stance. The MAN reaches for his SWORD hidden underneath his CLOAK.");
        var skilled = prompt("Are you SKILLED?").toUpperCase();
        var cunning = prompt("Are you CUNNNING?").toUpperCase();
        if((skilled==="YES") && (cunning==="YES")){
            swal("Even though you are unarmed, you are more SKILLED and more CUNNING than this stranger, and proceed to DISARM HIS ARMS from him...with his OWN SWORD.");
            swal("CONGRATULATION, you have SURVIVE this encounter by DISMEMBERING THE ATTACKER.");
        }
        else {swal("The MAN is either more SKILLED or more CUNNING thank you, and proceeds to SWORD you in the ABDOMINALS.");
        swal(" You have died by DISEMBOWELMENT.");}
    break;
    case 'TALK':
        swal("You greet the MAN and INQUIRE as to his BUSINESS on the ROAD.");
        swal("The MAN reaches for his SWORD hidden underneath his CLOAK - apparently he is not one for CONVERSATION.");
        swal("You have died by STABBING.");
    break;
    case 'IGNORE':
        swal("You keep your EYES trained downward on the ROAD as you pass the MAN traveling in the opposite direction from you on the ROAD.");
        swal("The MAN does LIKEWISE.");
        swal("CONGRATULATION, you have SURVIVE this encounter by BEING ANTISOCIAL.");
    break;
    case 'RUN':
        var speedy = prompt("Art thou SPEEDY?").toUpperCase();
        var athletic = prompt("Art thou ATHLETIC?").toUpperCase();
        if(speedy ==="YES"||athletic==="YES"){
            swal("You are faster then the MAN, and manage to outrun him even as he calls after you.");
            swal("CONGRATULATION, you have SURVIVE this encounter by FLEEING LIKE A LITTLE GIRL.");
        }
        else{
            swal("Since you are both SLOW and FAT, the MAN assumes you are of noble DESCENT and proceeds to draw his SWORD from underneath his CLOAK.");
            swal("Try as you might to waddle away, the MAN throws his sword (quite ADEPTLY, you note) and as you turn it CATCHES you in the shoulder BLADE.");
            swal("As he STANDS over you and PULLS the SWORD from your back, a GUSH of BLOOD spurts into the AIR.");
            swal("Before you DRIFT off into UNCONSCIOUSNESS, you feel his hands rummaging through your CLOTHES for your COINSACK.");
            swal("You have DIED from MUGGING.");
        }
    break;
    default: 
        swal("I'm sorry, that is not a recognized choice. Please CHECK your spelling and RELOAD the page.");
    };
};