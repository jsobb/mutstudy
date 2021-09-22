const menuBar = document.querySelector("#navbar_account i");
menuBar.addEventListener("click", menuList);
function menuList(){
    const menuList = document.querySelector("#navbar_account_content");

    if(menuList.style.display === "none"){
        menuList.style.display = "block";
        menuList.style.animation = "1s ease-in-out menuHello";
    }
    else if(menuList.style.display === "block"){
        menuList.style.animation = "1s ease-in-out menuBye";
        setTimeout(function(){
            menuList.style.display = "none";
        }, 1000);
    }
    else{
        menuList.style.display = "block";
        menuList.style.animation = "1s ease-in-out menuHello";
    }
}

const friend = document.querySelector("#friend_button");
friend.addEventListener("click", showFriend);

function showFriend(){
    const friendList = document.querySelector("#content_friend");
    if(friendList.style.display === "none"){
        friendList.style.display = "block";
        friendList.style.animation = "1s ease-in-out menuHello";
    }
    else if(friendList.style.display === "block"){
        friendList.style.animation = "1s ease-in-out menuBye";
        setTimeout(function(){
            friendList.style.display = "none";
        }, 1000);
    }
    else{
        friendList.style.display = "block";
        friendList.style.animation = "1s ease-in-out menuHello";
    }
}