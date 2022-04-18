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
            sendEvent(JSONvalue)
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
                //bid.innerHTML = '<g><rect width="100%" height="100%" fill = "green"/></g>';
                cambioColor(bid);  
                agregarElemento(bid);              
            });
        }
    }

    var cambioColor = function (idRegion) {
        let region = document.getElementById(idRegion);        
        region.style.fill = 'red';        
    }

    var agregarElemento = function (id){
        const {x,y} = puntoMedio(id);
        var regiones = document.getElementById("regiones");
        var center = document.createElementNS('http://www.w3.org/2000/svg', "g");
        center.innerHTML = '<circle cx =' + '"' + x + '"' + 'cy =' + '"' + y + '"' + 'r="25"/><text x='+ '"' + x + '"' + 'y =' + '"' + y + '" style="fill:black;font-weight: bold;">20</text>';
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
        agregarElemento("COL1283");
        agregarElemento("COL1318");
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