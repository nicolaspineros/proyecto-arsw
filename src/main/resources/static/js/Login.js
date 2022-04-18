var apiUser = function() {
    return {
        getUser: function (user, callback) {
            var url = 'http://localhost:8080/consult/' + user

            fetch(url, {
                mode: 'no-cors',
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => callback(data))
              

        }
    }

}();

