function lockedProfile() {
    let divs = Array.from(document.getElementsByClassName(`profile`));
    let buttons = document.getElementsByTagName(`button`);
    for (let div of divs){
        let locked = div.querySelectorAll(`input[type=radio]`)[0];
        let unlocked = div.querySelectorAll(`input[type=radio]`)[1];
        let button = div.getElementsByTagName(`button`)[0];
        button.addEventListener(`click`,function showMore(e){
            let profile = e.target.parentElement
            let hidden = profile.getElementsByTagName(`div`)[0]
            if (locked.checked){
    
            } else if (unlocked.checked){
                if (button.textContent !=`Hide it` ){
                hidden.style.display = `block`;
                button.textContent = `Hide it`
                } else if (button.textContent ==`Hide it`){
                hidden.style.display = `none`;
                button.textContent = `Show more`
                }
            }
            
        });
    }
}