function dice_change(n,k){

    var m = document.querySelectorAll("div img");

    if (n===1 || n===2 || n===3 || n===4 || n===5 || n===6){
        m[0].setAttribute("src","images/dice" + n + ".png");
    }

    if (k===1 || k===2 || k===3 || k===4 || k===5 || k===6){
        m[1].setAttribute("src","images/dice" + k + ".png");
    }

}

function winner(n,k){
    
    if (n > k){
        document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    }

    else if (n < k){
        document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    }

    else{
        document.querySelector("h1").innerHTML="Draw";
    }
}

// function dice_change_2(n){
//     if (n===1){
//         document.querySelectorAll("img.img1, img.img2 .img2").setAttribute("src","images/dice1.png");
//     }
    
//     if (n===2){
//         document.querySelectorAll("img.img1, img.img2 .img2").setAttribute("src","images/dice2.png");
//     }
    
//     if (n===3){
//         document.querySelectorAll("img.img1, img.img2 .img2").setAttribute("src","images/dice3.png");
//     }
    
//     if (n===4){
//         document.querySelectorAll("img.img1, img.img2 .img2").setAttribute("src","images/dice4.png");
//     }
    
//     if (n===5){
//         document.querySelectorAll("img.img1, img.img2 .img2").setAttribute("src","images/dice5.png");
//     }
    
//     if (n===6){
//         document.querySelectorAll("img.img1, img.img2 .img2").setAttribute("src","images/dice6.png");
//     }
    
//     }