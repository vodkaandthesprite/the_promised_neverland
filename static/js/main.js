const author = document.getElementById("author");
var entrance = author;
console.log(entrance);
function enter(){
    if (author.style.display === 'block') {
        author.style.display = 'none';
    } else {
        author.style.display = 'block';
    }
}
let seasons = document.getElementsByClassName("season");
for (let i = 0;seasons.length;i++) {
    seasons[i].addEventListener("click", s_reColor);
    function s_reColor(ActiveBtn) {
        seasons[i].style.backgroundColor = ("#cbc5c1");
        seasons[i].style.color = ("#524d42");
        s_reColor()[i].addEventListener("click", ActiveBtn);
        function ActiveBtn() {
            seasons[i].style.backgroundColor = ("#524d42");
            seasons[i].style.color = ("#cbc5c1");
        }
    }
}
let episodes = document.getElementsByClassName("episode");
for (let i = 0;episodes.length;i++) {
    episodes[i].addEventListener("click", ep_reColor);
    function ep_reColor() {
        episodes[i].style.backgroundColor = ("#cbc5c1");
        episodes[i].style.color = ("#524d42");
    }
}