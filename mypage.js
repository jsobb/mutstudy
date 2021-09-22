const follower = document.querySelector("#mypage_left_relationship_choice_follower");
const following = document.querySelector("#mypage_left_relationship_choice_following");

follower.addEventListener("click", showFollower);
following.addEventListener("click", showFollowing);

function showFollower(){
    const followerList = document.querySelector("#mypage_left_relationship_choice_follower_list");
    const followingList = document.querySelector("#mypage_left_relationship_choice_following_list");
    if(followerList.style.display === "block"){
        followerList.style.display = "none";
    }
    else{
        followerList.style.display = "block";
        followingList.style.display = "none";
    }
}

function showFollowing(){
    const followerList = document.querySelector("#mypage_left_relationship_choice_follower_list");
    const followingList = document.querySelector("#mypage_left_relationship_choice_following_list");
    if(followingList.style.display === "block"){
        followingList.style.display = "none";
    }
    else{
        followerList.style.display = "none";
        followingList.style.display = "block";
    }
    console.log("showFollowing");
}