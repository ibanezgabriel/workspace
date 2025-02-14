const countEl = document.querySelector(".count");
const btn = document.querySelectorAll(".btn");

let count = 0;
btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=> {
        const target = e.currentTarget.classList;
        if(target.contains("increment")) {
            count++;
        } else if (target.contains("decrement")) {
                if (count === 0) {
                    return;
                } else {
                    count--;
                }
            } else if (target.contains("reset")) {
                count = 0;
            }
            if (count === 0) {
                countEl.style.color = "white";
            } else {
                countEl.style.color = "rgb(7, 207, 0)";
            }
        countEl.textContent = count;
    });
});