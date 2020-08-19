function road(){

var user = prompt("You come across a MAN who is traveling in the opposite direction from you on the ROAD. Do you FIGHT, TALK, IGNORE, or RUN?").toUpperCase();
switch(user){
    case 'FIGHT':
        alert("You raise your FISTS up in a fighting stance. The MAN reaches for his SWORD hidden underneath his CLOAK.");
        var skilled = prompt("Are you SKILLED?").toUpperCase();
        var cunning = prompt("Are you CUNNING?").toUpperCase();
        if((skilled==="YES") && (cunning==="YES")){
            alert("Even though you are unarmed, you are more SKILLED and more CUNNING than this stranger, and proceed to DISARM HIS ARMS from him...with his OWN SWORD.");
            alert("CONGRATULATION, you have SURVIVE this encounter by DISMEMBERING THE ATTACKER.");
        }
        else {alert("The MAN is either more SKILLED or more CUNNING thank you, and proceeds to SWORD you in the ABDOMINALS.");
        alert(" You have died by DISEMBOWELMENT.");}
    break;
    case 'TALK':
        alert("You greet the MAN and INQUIRE as to his BUSINESS on the ROAD.");
        alert("The MAN reaches for his SWORD hidden underneath his CLOAK - apparently he is not one for CONVERSATION.");
        alert("You have died by STABBING.");
    break;
    case 'IGNORE':
        alert("You keep your EYES trained downward on the ROAD as you pass the MAN traveling in the opposite direction from you on the ROAD.");
        alert("The MAN does LIKEWISE.");
        alert("CONGRATULATION, you have SURVIVE this encounter by BEING ANTISOCIAL.");
    break;
    case 'RUN':
        var speedy = prompt("Art thou SPEEDY?").toUpperCase();
        var athletic = prompt("Art thou ATHLETIC?").toUpperCase();
        if(speedy ==="YES"||athletic==="YES"){
            alert("You are faster then the MAN, and manage to outrun him even as he calls after you.");
            alert("CONGRATULATION, you have SURVIVE this encounter by FLEEING LIKE A LITTLE GIRL.");
        }
        else{
            alert("Since you are both SLOW and FAT, the MAN assumes you are of noble DESCENT and proceeds to draw his SWORD from underneath his CLOAK.");
            alert("Try as you might to waddle away, the MAN throws his sword (quite ADEPTLY, you note) and as you turn it CATCHES you in the shoulder BLADE.");
            alert("As he STANDS over you and PULLS the SWORD from your back, a GUSH of BLOOD spurts into the AIR.");
            alert("Before you DRIFT off into UNCONSCIOUSNESS, you feel his hands rummaging through your CLOTHES for your COINSACK.");
            alert("You have DIED from MUGGING.");
        }
    break;
    default: 
        alert("I'm sorry, that is not a recognized choice. Please CHECK your spelling and RELOAD the page.");
    };
};