function partyTime (arr){
   let invitedList = arr.splice(0, arr.indexOf(`PARTY`));
   arr.splice(0,1)
   let vip = [];
   let regular = [];
    for (let guest of invitedList){
        if (guest[0] >= 0 && guest[0] <= 9){
            vip.push(guest)
        } else {
            regular.push(guest)
        } 
    }
    for (let guest of arr){
        if (vip.includes(guest)){
            vip.splice(vip.indexOf(guest), 1);
        } else if (regular.includes(guest)){
            regular.splice(regular.indexOf(guest), 1)
        }
    }
    console.log(vip.length + regular.length)
    vip.map(x => console.log(x));
    regular.map(x => console.log(x))
}
partyTime(['7IK9Yo0h', '9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])
// partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])