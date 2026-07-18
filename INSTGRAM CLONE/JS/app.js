
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        let count = btn.closest(".card").querySelector(".like-count");
        let likes = parseInt(count.innerText);

        if(btn.classList.contains("bi-heart")){

            btn.classList.remove("bi-heart");
            btn.classList.add("bi-heart-fill","text-danger");
            count.innerText = likes + 1;
        

        }else{

            btn.classList.remove("bi-heart-fill","text-danger");
            btn.classList.add("bi-heart");
            count.innerText = likes - 1;
        }

    });

});

// Double-click image to like
const images = document.querySelectorAll(".like-image");

images.forEach(img=>{

    img.addEventListener("dblclick",()=>{

        let card = img.closest(".card");
        let heart = card.querySelector(".like-btn");
        let count = card.querySelector(".like-count");

        if(heart.classList.contains("bi-heart")){

            heart.classList.remove("bi-heart");
            heart.classList.add("bi-heart-fill","text-danger");
            count.innerText = parseInt(count.innerText) + 1;
            toast.show();
        }

    });

});

// Bookmark
const saveButtons = document.querySelectorAll(".bi-bookmark");

saveButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(btn.classList.contains("bi-bookmark")){

            btn.classList.remove("bi-bookmark");
            btn.classList.add("bi-bookmark-fill");

        }else{

            btn.classList.remove("bi-bookmark-fill");
            btn.classList.add("bi-bookmark");
        }

    });

});

// Follow Button
const followButtons = document.querySelectorAll(".follow-btn");

followButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(btn.innerText === "Follow"){

            btn.innerText = "Following";
            btn.classList.remove("btn-primary");
            btn.classList.add("following");

        }else{

            btn.innerText = "Follow";
            btn.classList.remove("following");
            btn.classList.add("btn-primary");
        }

    });

});

// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function (e) {

    e.preventDefault();

    document.body.classList.toggle("dark-mode");

    // Change moon/sun icon
    const icon = darkBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("bi-moon");

        icon.classList.add("bi-sun");

    } else {

        icon.classList.remove("bi-sun");

        icon.classList.add("bi-moon");

    }

});

const stories = document.getElementById("stories");

document.getElementById("rightBtn").onclick = () => {
    stories.scrollBy({
        left:300,
        behavior:"smooth"
    });
};

document.getElementById("leftBtn").onclick = () => {
    stories.scrollBy({
        left:-300,
        behavior:"smooth"
    });
};