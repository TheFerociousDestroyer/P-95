function addUser()
{
user_name=document.getElementById("user_name").value ;
localStorage.setItem("user_name",user_name);
window.location="kwitter_room.html";
}

function removeUser()
{

window.location="index.html";
}

function redirectToRoomName()
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}