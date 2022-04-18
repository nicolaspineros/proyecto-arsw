var app = (function (){
    var stomClient = null;


    var connect = function(){
        console.info("Connecting to Websocket");
        //var socket = new SockJS('/events-websocket');
        stomClient = Stomp.over(new SockJS('/events-websocket'));
        stomClient.subcribe()
    }
    var publicEvents = function(User){

    }
})