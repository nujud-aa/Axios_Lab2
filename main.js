axios({
    method: 'get',
    url: "https://api.unsplash.com/photos/?client_id=f44be576e6e1392a4b90a733d94331dc61d8a2a109e23451cd5371da9e93f40a"
})
.then((response) =>{

    console.log(response);
    var randomNum = Math.floor(Math.random()*9)
    var imagy = response.data[randomNum].urls.regular
    console.log(imagy);
    $('body').css('background-image', 'url(' + imagy +')');

    
})
.catch((erroe) =>{

});

axios({
    method: 'get',
    url: "http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=c382d2f211a76d1b17d9af6d1dc8aae7"
})
.then((response) =>{

    // console.log(response);
    
    var x = Object.values(response.data.main)
    console.log(x);
    $('body').append(`<div class="Weather"><h1>${x[0]}</h1></div>`).
    $('h1').css("text-align", "right")
    $('.Weather').css("flex", "right")
    
})
.catch((erroe) =>{

});


axios({
    method: 'get',
    url: "https://api.quotable.io/random"

})
.then((response) =>{

    console.log(response);

    var quote = response.data.content

    console.log(quote)
    console.log(response.data.author)
    $('body').append(`<p>${quote}</p>`)
    $('p').css("color", "red");


    
    
    

    
})
.catch((erroe) =>{

});


var houry = new Date();
var time = houry.getHours() + ":" + houry.getMinutes()  

$('body').append(`<h2>${time}</h2>`)