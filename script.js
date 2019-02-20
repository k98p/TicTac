var turn=0
var P1=[0,0,0,0,0];
var P2=[0,0,0,0,0];
var RESULT = ["123","456","789","147","258","369","159","357"];
var pi1=0;
var pi2=0;

function clikky(e){
    console.log("TEST:"+turn);
    while (turn < 9){
        //var turn=0;
        if (turn%2==0){
            P1[pi1]=e;
            document.getElementById(e).innerHTML = "O";
            turn=turn+1;
            pi1++;
        }
        else{
            P2[pi2]=e;
            document.getElementById(e).innerHTML = "X";
            turn=turn+1;
            pi2++;
        }
        if (turn==5){
            var t1 = P1.slice(pi1-3,pi1);
            t1.sort();
            var x='';
            var i;
            for (i=0; i<3; i++){
                x=x+t1[i];
            }
            for (i=0; i<9; i++){
                
                if (RESULT[i]==x){
                    console.log("PLAYER1 WON!");
                    turn=10;
                }
            }
            break;
        }
        else if (turn>5){
            if (turn%2==0){
                var t2 = P2.slice(pi2-3,pi2);
                t2.sort();
                var x='';
                var i;
                for (i=0; i<3; i++){
                    x=x+t2[i];
                }

                for (i=0; i<9; i++){

                    if (RESULT[i]==x){
                        console.log("PLAYER2 WON!");
                        turn=10;
                    }
                }
                break;    
            }
            else{
                var t1 = P1.slice(pi1-3,pi1);
                t1.sort();
                var x='';
                var i;
                for (i=0; i<3; i++){
                    x=x+t1[i];
                }

                for (i=0; i<9; i++){

                    if (RESULT[i]==x){
                        console.log("PLAYER1 WON!");
                        turn=10;
                    }
                }
                break;
            }
            
        }
        else{
            break;
        }
    }
}


