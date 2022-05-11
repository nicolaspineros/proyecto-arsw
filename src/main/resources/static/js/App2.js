let Usuario;
let dinero = 0;
let onPosetion = new Map();
let start = true;
let colorCliente;
let aumDinero = function(){
    setInterval(function(){
        dinero++
        let T1 =document.getElementById("Dinero");
        T1.textContent=dinero;
    }, 1000);
}


let loadAndAddlistener = function(){
    paths = document.getElementsByTagName("path");
    for (var i = 0; i < paths.length; i++){
        paths[i].addEventListener("click", function (event) {
            const bid = event.target.id;
            onStart(bid);
        });
    }
}

let onStart = function(id){
    if (start){
        setPaisColor(id, colorCliente);
        onPosetion.set(id,50);
        console.log(onPosetion);

        start =false;
    }

}

let setColor = function(){
    colorCliente  = document.querySelector('#Color').value;
    console.log(colorCliente);
    
}
let setPaisColor = function(id, color){
    let contry = document.getElementById(id);
    contry.style.fill = color;

}

let getCountry=function(id){
    let contry = getElementById(id);


}
aumDinero();
//loadAndAddlistener();
