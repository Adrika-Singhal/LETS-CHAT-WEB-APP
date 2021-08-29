function add_user(){
    var user_name = document.getElementById("user").value;
    localStorage.setItem("user", user_name);
    window.location = "kwitter_room.html";
}