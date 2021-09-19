const menuBar = document.querySelector("#navbar_account i");
menuBar.addEventListener("click", menuList);
function menuList(){
    console.log("hi");
    const menuList = document.querySelector("#navbar_account_content");

    if(menuList.style.display === "none"){
        menuList.style.display = "block";
    }
    else if(menuList.style.display === "block"){
        menuList.style.display = "none";
    }
    else{
        menuList.style.display = "block";
    }
}

const friend = document.querySelector("#friend_button");
friend.addEventListener("click", showFriend);

function showFriend(){
    const friendList = document.querySelector("#content_friend");
    if(friendList.style.display === "none"){
        friendList.style.display = "block";
    }
    else if(friendList.style.display === "block"){
        friendList.style.display = "none";
    }
    else{
        friendList.style.display = "block";
    }
}

// const follower = document.querySelector("#follower");
// const following = document.querySelector("#following");

// follower.addEventListener("click", showFollower);
// following.addEventListener("click", showFollowing);

// function showFollower(){
//     const followerList = document.querySelector("#follower_list");
//     const followingList = document.querySelector("#following_list");
//     if(followerList.style.display === "block"){
//         followerList.style.display = "none";
//     }
//     else{
//         followerList.style.display = "block";
//         followingList.style.display = "none";
//     }
// }

// function showFollowing(){
//     const followerList = document.querySelector("#follower_list");
//     const followingList = document.querySelector("#following_list");
//     if(followingList.style.display === "block"){
//         followingList.style.display = "none";
//     }
//     else{
//         followerList.style.display = "none";
//         followingList.style.display = "block";
//     }
//     console.log("showFollowing");
// }