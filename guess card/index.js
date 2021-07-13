let cards=[
    {
        image:"https://wallpaperaccess.com/full/3096201.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://wallpaperaccess.com/full/3096201.jpg",
        value:1,
        status:"closed"
    },

    {
        image:"https://fsb.zobj.net/crop.php?r=wnSjCNRNfShTy_m-Pg0Qdt5y_XMM0_yw8g_QNWBoIeEP_yti_nsqXVHzkw1kBdQssfU7_0FCqJ6mx80Ecb3KB9-ufpL6WkliNBkD9Ta6LI-iS3WyfCRD7_ZuysTl1CKEih_1tdYKPKmv_-IfDcQNzLuKTB7MqMzWany1gh0PF8ityOtBJh6PjxxS0T8",
        value:2,
        status:"closed"
    },

    {
        image:"https://fsb.zobj.net/crop.php?r=wnSjCNRNfShTy_m-Pg0Qdt5y_XMM0_yw8g_QNWBoIeEP_yti_nsqXVHzkw1kBdQssfU7_0FCqJ6mx80Ecb3KB9-ufpL6WkliNBkD9Ta6LI-iS3WyfCRD7_ZuysTl1CKEih_1tdYKPKmv_-IfDcQNzLuKTB7MqMzWany1gh0PF8ityOtBJh6PjxxS0T8",
        value:2,
        status:"closed"
    },

    {
        image:"https://3.bp.blogspot.com/-1aEkhRQlR_w/XMO8bXBPlCI/AAAAAAAAOWo/yOBscUzKQcYlZOg1HuzL3A3J0uoO9h90gCLcBGAs/s2560/baby-groot-4k-tf-1080x1920.jpg",
        value:3,
        status:"closed"
    },

    {
        image:"https://3.bp.blogspot.com/-1aEkhRQlR_w/XMO8bXBPlCI/AAAAAAAAOWo/yOBscUzKQcYlZOg1HuzL3A3J0uoO9h90gCLcBGAs/s2560/baby-groot-4k-tf-1080x1920.jpg",
        value:3,
        status:"closed"
    },

    {
        image:"https://iphoneswallpapers.com/wp-content/uploads/2019/06/Iron-Man-Mark-85-Infinity-Stone-Armor-iPhone-Wallpaper.jpg",
        value:4,
        status:"closed"
    },

    {
        image:"https://iphoneswallpapers.com/wp-content/uploads/2019/06/Iron-Man-Mark-85-Infinity-Stone-Armor-iPhone-Wallpaper.jpg",
        value:4,
        status:"closed"
    },

    {
        image:"https://1.bp.blogspot.com/-9z2l__m0DFY/XS4va-X3GFI/AAAAAAAADgw/PXtqes2Ecq8x042xMUJP9oDEIe-yisiiQCLcBGAs/s1600/3d8ef423bb621a87c36bbe7e63444d76.jpg",
        value:5,
        status:"closed"
    },

    {
        image:"https://1.bp.blogspot.com/-9z2l__m0DFY/XS4va-X3GFI/AAAAAAAADgw/PXtqes2Ecq8x042xMUJP9oDEIe-yisiiQCLcBGAs/s1600/3d8ef423bb621a87c36bbe7e63444d76.jpg",
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