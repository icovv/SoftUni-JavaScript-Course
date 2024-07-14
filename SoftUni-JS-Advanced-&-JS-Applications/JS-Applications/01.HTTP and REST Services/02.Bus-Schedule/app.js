function solve() {
    let url = "http://localhost:3030/jsonstore/bus/schedule/"
    let infoFIeld = document.querySelector("#info > span");
    let arriveBtn = document.getElementById(`arrive`);
    let departBtn = document.getElementById(`depart`);
    let stops = {
        curr: ``,
        next: `depot`,
    }
    async function depart() {
        try {
            let response = await fetch(url + stops.next);
            let data = await response.json();
            console.log(data)
            stops.curr = data.name;
            stops.next = data.next;
            infoFIeld.textContent = `Next stop ${stops.curr}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            infoFIeld.textContent = `Error`
        }

    }

    async function arrive() {
        infoFIeld.textContent = `Arriving at ${stops.curr}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }



    return {
        depart,
        arrive
    };
}

let result = solve();