function nightMode(){
    let ruta = document.getElementById('estilos').href;
    if(ruta.includes('css/nightmode.css')){
        document.getElementById('estilos').href = 'css/inicio.css';
    }else{
        document.getElementById('estilos').href = 'css/nightmode.css';
    }

}