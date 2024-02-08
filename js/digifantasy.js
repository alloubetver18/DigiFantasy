function nightModeGeneral(){
    let ruta = document.getElementById('global').href;
    if(ruta.includes('css/nightmodeGlobal.css')){
        document.getElementById('global').href = 'css/global.css';
        document.getElementById('searchIcon').setAttribute("src", "img/Iconssearch.svg");
        if(document.getElementById('iconsRating')!=null || document.getElementById('iconsRating')!=undefined){
            document.getElementById('iconsRating').setAttribute("src", "img/IconsRating.svg");
        }
        
    }else{
        document.getElementById('global').href = 'css/nightmodeGlobal.css';
        document.getElementById('searchIcon').setAttribute("src", "img/IconsSearchNight.svg");
        if(document.getElementById('iconsRating')!=null || document.getElementById('iconsRating')!=undefined){
            document.getElementById('iconsRating').setAttribute("src", "img/IconsRatingNight.svg");
        }
    }
}