let userpoint=0;
let compoint=0;
let drawpoint=0;
function computerThink(){
    let randomnumber=Math.random()*3;
        if (randomnumber>=0 && randomnumber<1 ){
            return 'rock';
        }
        else if (randomnumber>=1 && randomnumber<2){
            return 'paper';
        }
        else {
            return 'scissor';
        }
}


