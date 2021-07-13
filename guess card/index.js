let cards=[
    {
        image:"https://i.pinimg.com/originals/6c/a8/91/6ca8918c3dd953377dd855bbe11fb61c.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/originals/6c/a8/91/6ca8918c3dd953377dd855bbe11fb61c.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/474x/38/2b/c5/382bc5c8bc07b3904994179851e256a9.jpg",
        value:2,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/474x/38/2b/c5/382bc5c8bc07b3904994179851e256a9.jpg",
        value:2,
        status:"closed"
    },

    {
        image: "https://st4.depositphotos.com/11095424/25561/i/600/depositphotos_255611544-stock-photo-dora-explorer-walking-going-school.jpg",
        value:3,
        status:"closed"
    },

    {
        image:"https://st4.depositphotos.com/11095424/25561/i/600/depositphotos_255611544-stock-photo-dora-explorer-walking-going-school.jpg",
        value:3,
        status:"closed"
    },

    {
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9038defb-5494-46f2-a66d-e84678fbfa33/ddwfcpl-2c306a0c-db6e-4e62-8fb3-1f13635df544.png/v1/fill/w_1024,h_1608,strp/nobita_poses__2d__by_kaylor2013_ddwfcpl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwOCIsInBhdGgiOiJcL2ZcLzkwMzhkZWZiLTU0OTQtNDZmMi1hNjZkLWU4NDY3OGZiZmEzM1wvZGR3ZmNwbC0yYzMwNmEwYy1kYjZlLTRlNjItOGZiMy0xZjEzNjM1ZGY1NDQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mpbBtklaLkZXMULWzZAJ0BaT9cgWflfUKTitfaJvHgM",
        value:4,
        status:"closed"
    },

    {
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9038defb-5494-46f2-a66d-e84678fbfa33/ddwfcpl-2c306a0c-db6e-4e62-8fb3-1f13635df544.png/v1/fill/w_1024,h_1608,strp/nobita_poses__2d__by_kaylor2013_ddwfcpl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwOCIsInBhdGgiOiJcL2ZcLzkwMzhkZWZiLTU0OTQtNDZmMi1hNjZkLWU4NDY3OGZiZmEzM1wvZGR3ZmNwbC0yYzMwNmEwYy1kYjZlLTRlNjItOGZiMy0xZjEzNjM1ZGY1NDQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mpbBtklaLkZXMULWzZAJ0BaT9cgWflfUKTitfaJvHgM",
        value:4,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/736x/84/cc/61/84cc6199303332e1abf2d5f7b7727bcd.jpg",
        value:5,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/736x/84/cc/61/84cc6199303332e1abf2d5f7b7727bcd.jpg",
        value:5,
        status:"closed"
    },
]

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}


displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
    console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score = score + 10;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over");
            location.reload();
        }
    }

    displayCards(cards);
}
