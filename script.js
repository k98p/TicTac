var turn=0;
var P1=[0,0,0,0,0];
var P2=[0,0,0,0,0];
var RESULT = ["123","456","789","147","258","369","159","357"];
var pi1=0;
var pi2=0;

function clikky(e){
    console.log("TEST:"+turn);
    if (turn < 9){
        //var turn=0;
        if (turn%2==0){
            //console.log(document.getElementById(e).innerHTML);
            if (!document.getElementById(e).innerHTML){
                P1[pi1]=e;
                document.getElementById(e).innerHTML = "O";
                turn=turn+1;
                pi1++;    
            }
            //break;
            
        }
        else{
            if (!document.getElementById(e).innerHTML){
                P2[pi2]=e;
                document.getElementById(e).innerHTML = "X";
                turn=turn+1;
                pi2++;
            }
            //break;
        }
        if (turn==5){
            var t1 = P1.slice(pi1-3,pi1);
            t1.sort();
            var x='';
            var i;
            for (i=0; i<3; i++){
                x=x+t1[i];
            }
            for (i=0; i<8; i++){
                
                if (RESULT[i]==x){
                    console.log("PLAYER1 WON!");
                    document.getElementById("result").innerHTML = "Player1 Won!";
                    turn=10;
                }
            }
            //break;
        }
        else if (turn>5){
            if (turn%2==0){
                for (i=0; i<pi2; ++i){
                    for (j=i+1; j<pi2; ++j){
                        for (k=j+1; k<pi2; ++k){
                            var temp = [0,0,0];
                            temp[0]=P2[i]
                            temp[1]=P2[j]
                            temp[2]=P2[k];
                            temp.sort();
                            var stringmatch = "";
                            for (t=0; t<3; ++t){
                                stringmatch = stringmatch+temp[t];
                            }
                            console.log(stringmatch);
                            for (y=0; y<8; ++y){
                                if (stringmatch==RESULT[y]){
                                    console.log("PLAYER2 WON!");
                                    document.getElementById("result").innerHTML = "Player2 won!"; 
                                    turn=10;           
                                }
                            }
                        }
                    }
                }
                /*
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
                        document.getElementById("result").innerHTML = "Player2 won!";
                        turn=10;
                    }
                }*/
                //break;    
            }
            else{
                for (i=0; i<pi1; ++i){
                    for (j=i+1; j<pi1; ++j){
                        for (k=j+1; k<pi1; ++k){
                            var temp = [0,0,0];
                            temp[0]=P1[i]
                            temp[1]=P1[j]
                            temp[2]=P1[k];
                            temp.sort();
                            var stringmatch = "";
                            for (t=0; t<3; ++t){
                                stringmatch = stringmatch+temp[t];
                            }
                            console.log(stringmatch);
                            for (y=0; y<8; ++y){
                                if (stringmatch==RESULT[y]){
                                    console.log("PLAYER1 WON!");
                                    document.getElementById("result").innerHTML = "Player1 won!"; 
                                    turn=10;           
                                }
                            }
                        }
                    }
                }
                /*
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
                        document.getElementById("result").innerHTML = "Player1 won!";
                        turn=10;
                    }
                }
                break;
                */
            }
            //break;
            
        }
        
    }
}

if (turn>=8){
    document.getElementById("result").innerHTML = "DRAW!";
}




