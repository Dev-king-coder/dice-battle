var arry=[];
function onDrawCall(entry){
  if (entry===0){
    //=========================Data Collector===========================//
    var Player_1=prompt("Name Player 1:");
    document.querySelector("#sub_player1").innerHTML=Player_1;
    var Player_2=prompt("Name Player 2:");
    document.querySelector("#sub_player2").innerHTML=Player_2;
    arry=[];
    arry.push(Player_1);
    arry.push(Player_2);
  }
  // =========================Image 1 Changer==========================//
  var randomnum1=(Math.floor(((Math.random()*6)+1))).toString();
  var randomimage1="images\\dice"+randomnum1+".png";
  document.querySelector(".img1").setAttribute("src",randomimage1);


  // =======================Image 2 Changer===========================//
  let randomnum2=(Math.floor(((Math.random()*6)+1))).toString();
  let randomimage2="images\\dice"+randomnum2+".png";
  document.querySelector(".img2").setAttribute("src",randomimage2);


  //======================Display Message Code======================//
  if(Player_1==="" || Player_2===""){
    document.querySelector("h1").innerHTML=" Error ~404~🤨 Wins";
    document.querySelector("#sub_player1").innerHTML="🤨";
    document.querySelector("#sub_player2").innerHTML="🤨";
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    document.querySelector("button").setAttribute("onclick","onDrawCall(0)");
    document.querySelector("button").textContent="⚔Battle-again⚔";
    alert("Enter Names Properly!🤨")
  }
  else if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="✨ "+arry[0]+" Wins";
    document.querySelector("button").setAttribute("onclick","onDrawCall(0)");
    document.querySelector("button").textContent="⚔Battle-again⚔";
  }
  else if (randomnum2>randomnum1) {
    document.querySelector("h1").innerHTML="✨ "+arry[1]+" Wins";
    document.querySelector("button").setAttribute("onclick","onDrawCall(0)");
    document.querySelector("button").textContent="⚔Battle-again⚔";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!😆Game On🐱‍🐉";
    document.querySelector("button").setAttribute("onclick","onDrawCall(1)");
    document.querySelector("button").textContent="⚔Re-Battle⚔";
  }
}

onDrawCall(0);
