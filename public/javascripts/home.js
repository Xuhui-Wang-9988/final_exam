// function Sign_up() {
//     window.location.href = "/home.html";
// }

function Book_room() {
    window.location.href = "/book.html";
}

function Check_history() {
    window.location.href = "/recent.html";
}

function register() {

    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            window.location = "home.html";
        }
    };
    xhttp.open ("POST", "/index", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({username: username,password: password}));
}

function check() {

    var arrival = document.getElementById("Arrival").value;
    var leave = document.getElementById("Leave").value;
    var filter = document.getElementById("filter").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            load.DB = JSON.parse(this.responseText);
        } else if (this.readyState === 4 && this.status === 503) {
            //not result
            console.log("No result match");
        }
    };
    xhttp.open ("POST", "/check", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ arrival: arrival, leave: leave, filter: filter}));
}


function order() {

    var room_ID = event.srcElement.value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert("order success");
        }
    };
    xhttp.open ("POST", "/order", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ room_ID: room_ID}));
}

function loadList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            load.list = JSON.parse(this.responseText);
        } else if (this.readyState === 4 && this.status === 503) {
            //not result
            console.log("No order");
        }
    };
    xhttp.open ("GET", "/loadList", true);
    xhttp.send();
}


