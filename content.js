const interval = setInterval(() => {
    likeSubscriber();
},5000);

function likeSubscriber(){
    const subscribe = document.querySelector("yt-formatted-string.ytd-subscribe-button-renderer");
    const like = document.querySelectorAll("#top-level-buttons > ytd-toggle-button-renderer");
    
    if(subscribe && like){
        var liked = false;
        for(const item of like[0].classList){
            if(item == "style-text"){
                liked = like[0];
            }
        }
        if(subscribe.textContent == "Inscrito" && liked){
            liked.click();
            console.log("Deu like");
        }
    }
}

