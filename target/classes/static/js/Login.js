var url;

var consultaUser = async()=>{
    user = btoa( document.getElementById("Autor").value);

    password = btoa(document.getElementById("pass").value);
    url = 'http://localhost:8080/consult/' + user + '/' + password
    data1 = await fetch(url, {
        mode: 'no-cors',
        method: 'GET',
        headers: {
        "Content-type": "application/json"
            }
        })
        .then(response => response.json());

    if (data1){
        location.href = "Prueba.html";
        let us =document.getElementById("Autor").value
        localStorage.setItem("Usuario",us);
    }
    else{
        var t2 = document.getElementById("Resultado");
        t2.textContent="El usuario no se encuentra registrado en la base de datos"
    }



}
