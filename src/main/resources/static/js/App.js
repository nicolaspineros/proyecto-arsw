var Module = function(){
    var User = null;

    var getUser = function (JSONvalue) {
        console.log("Aqui" + JSONvalue['_id']);
        //console.log(JSONvalue);
        if (JSONvalue['_id'] == "") {
            alert("No existe el autor ingresado");
        } else {
            //socketConnection()
            location.href = "mapa.html";
            User = JSONvalue;
            console.log(User);
            sendEvent(JSONvalue);
        }
    }

    var sendEvent = function (JSONvalue){
        stompClient.send("/app/events", {}, JSONvalue)
    }


    var loadRegionButton = function () {
        paths = document.getElementsByTagName("path");
        for (var i = 0; i < paths.length; i++){
            paths[i].addEventListener("click", function (event) {
                const bid = event.target.id;               
                ntropas = window.prompt('Dijite numero de tropas que atacan');
                //Por ahora es 100 pero debe ser el valor que se consulte del numero de tropas disponible
                if(ntropas != null && ntropas < 100) {
                    cambioColor(bid);  
                    agregarElemento(bid,ntropas); 
                } else {
                    alert("El valor de las tropas debe ser diferente a nulo y menor o igual a las disponibles")
                }                                          
            });
        }
    }

    var cambioColor = function (idRegion) {
        let region = document.getElementById(idRegion);        
        region.style.fill = 'red';        
    }

    var agregarElemento = function (id,tropas){
        const {x,y} = puntoMedio(id);
        var regiones = document.getElementById("regiones");
        var center = document.createElementNS('http://www.w3.org/2000/svg', "g");
        center.innerHTML = '<circle cx =' + '"' + x + '"' + 'cy =' + '"' + y + '"' + 'r="25"/><text x='+ '"' + (x-10) + '"' + 'y =' + '"' + (y+5) + '" style="fill:black;font-weight: bold;">'+tropas+'</text>';
        regiones.appendChild(center);   
    }

    var puntoMedio = function (id) {
        let region = document.getElementById(id);   
        let box = region.getBBox();
        var centerPoint = new Object();
        centerPoint.x = box.x + box.width / 2;
        centerPoint.y = box.y + box.height / 2;
        return {
            x: centerPoint.x,
            y: centerPoint.y
        }
    }

    var loadPlayers = function () {
        //Se debe hacer la consulta de tropas iniciales para mandar al parametro         
        agregarElemento("COL1283",100);
        agregarElemento("COL1318",100);
    }

    /**var socketConnection = function (){
        var socket = new SockJS('/events-websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame){
            console.log('Connected: '+ frame);
            stompClient.subscribe('/chat-events/evento',function (event){
                showEvent(JSON.parse(event.body).content)
            })
        })
    }*/

    function showEvent(event){
        $("events").append("<tr><td>" + event + "</td></tr>")
    }

    return {

        init: function () {            
            loadRegionButton();
            loadPlayers();                        
        },
        
        usuario: function(){
            autor = document.getElementById("Autor").value;
            apiUser.getUser(autor,getUser);
        },       
        
    }
}();