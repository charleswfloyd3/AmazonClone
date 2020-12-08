function categorySelect(){

};

function highlightsearchbar(){
    document.getElementById("navbarcenter").style.outline="3px solid orange"
}

let backgroundimages = ["backgroundimages/amazon_music.jpg", "backgroundimages/audibleplus.jpg", "backgroundimages/echoframes.jpg", "backgroundimages/halo.jpg", "backgroundimages/home.jpg", "backgroundimages/prepforholidays.jpg", "backgroundimages/primevideo.jpg", "backgroundimages/shopholidaydeals.jpg" ];
let slideshowIndex = 0;
function backgroundimageslideshow(){
    if(slideshowIndex == backgroundimages.length ){
            slideshowIndex = 0
    };
    document.add.src = backgroundimages[slideshowIndex];
    slideshowIndex++;
    setTimeout("backgroundimageslideshow()", 9000);
};
window.onload = backgroundimageslideshow;