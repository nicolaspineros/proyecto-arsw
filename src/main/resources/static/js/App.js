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
            });
        }
    }

    var cambioColor = function (idRegion) {
        let region = document.getElementById(idRegion);        
        region.style.fill = 'red';
        let box = region.getBBox();
        var centerPoint = new Object();
        centerPoint.x = box.x + box.width / 2;
        centerPoint.y = box.y + box.height / 2;
        var regiones = document.getElementById("regiones");
        var center = document.createElementNS('http://www.w3.org/2000/svg', "g");
        center.innerHTML = '<circle cx =' + '"' + centerPoint.x + '"' + 'cy =' + '"' + centerPoint.y + '"' + 'r="25"><circle>';
        regiones.appendChild(center);
        console.log(centerPoint.x);
        console.log(centerPoint.y);       
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
        },
        
        usuario: function(){
            autor = document.getElementById("Autor").value;
            apiUser.getUser(autor,getUser);
        },       
        
    }
}();