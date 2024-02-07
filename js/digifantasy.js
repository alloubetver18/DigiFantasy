function nightModeGeneral(){
    let ruta = document.getElementById('global').href;
    if(ruta.includes('css/nightmodeGlobal.css')){
        document.getElementById('global').href = 'css/global.css';
        document.getElementById('searchIcon').setAttribute("src", "img/Iconssearch.svg");
        
    }else{
        document.getElementById('global').href = 'css/nightmodeGlobal.css';
        document.getElementById('searchIcon').setAttribute("src", "img/IconsSearchNight.svg");
    }
}