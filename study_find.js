const tagButton = document.querySelector("#study_find_second_button");
const tagButtonIcon = document.querySelector("#study_find_second_button_icon");
const containerBig = document.querySelector("#study_find_second_container_big");
const containerSmall = document.querySelector("#study_find_second_container_small");

tagButton.addEventListener("click", tagDisplay);

function tagDisplay(){
    if(containerBig.style.display === ""){
        containerBig.style.display = "none";
        containerSmall.style.display = "none";
        tagButtonIcon.className = "fas fa-arrow-up";
    }
    else if(containerBig.style.display === "none"){
        containerBig.style.display = ""
        containerSmall.style.display = "";
        tagButtonIcon.className = "fas fa-arrow-down";
    }
    else{
        containerBig.style.display = ""
        containerSmall.style.display = "";
        tagButtonIcon.className = "fas fa-arrow-down";
    }
}
// 클릭한 것만 opacity 1 처리 (대태그, 소태그 모두)
// const bigTag = document.querySelectorAll("#study_find_second_container_big_tag");