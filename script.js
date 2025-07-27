 let cardcontainer= document.getElementById("cards-input");
 let formcontainer = document.createElement("div")
 formcontainer.setAttribute("class","w-[700px] h-[700px] bg-linear-to-t from-[#e0e7ff] to-[#f0f4f8] flex flex-col items-center border-1  shadow-lg bg-[#FFFFFF]"); 

 formcontainer.innerHTML=`
          <h1 class="font-[righteous] font-bold text-[35px] p-2">MATCHING CARD GAME</h1>
          <div id="board"></div>
          <button class="w-[100px] h-[40px] m-8 lg:p-2 bg-blue-500 font-[righteous] text-bold rounded-sm" onclick="startgame()">Restart</button>
 `;
 cardcontainer.append(formcontainer);
let board = document.getElementById("board");

const symbols=["king","queen","jack","5heart","5diamond","Ace"]
let  cards,flippedcards,matchedcount,timeinterval;
 
function startgame(){
    board.innerHTML ='';
    flippedcards =[];
    matchedcount =0;  
    cards=[...symbols,...symbols].sort(()=>Math.random()-0.5);
     
    cards.forEach(symbol =>{
        const card = document.createElement("div")
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.innerHTML=`
        <div class="card-inner">
         <div class="card-front">${symbol}</div>
         <div class="card-back">?</div>
        </div>
`;
 card.addEventListener("click",() => flipcard(card));
 board.append(card);
    });
}

function flipcard(card){
    if(flippedcards.length>=2 || card.classlist.contains('flipped')) return;

    card.classList.add('flipped');
    flippedcards.push(card);
    if(flippedcards.length===2){
        checkmatch();
    }
}
function checkmatch(){
    const [card1,card2] = flippedcards;
    if(card1.dataset.symbol === card2.dataset.symbol){
        flippedcards =[];
        matchedcount++;
        if(matchedcount === symbols.length){
            setTimeout(()=> alert(`you win the game`) 
            ,2000)
        }
    }else{
        setTimeout(()=>{
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedcards=[];
        },8000);
    }
}
   
startgame(); 