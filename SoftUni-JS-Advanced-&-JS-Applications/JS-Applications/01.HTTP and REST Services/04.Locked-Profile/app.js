// async function lockedProfile() {
//     // locked radio button -> profile.querySelector('input[name="lock"]');
//     // unlocked radio button -> profile.querySelector('input[value="unlock"]')
//     let url = "http://localhost:3030/jsonstore/advanced/profiles"
//     // let profile = document.createElement(`div`);
//     // profile.innerHTML = `			
//     //     <div class="profile">
//     // <img src="./iconProfile2.png" class="userIcon" />
//     //     <label>Lock</label>
//     // <input type="radio" name="user1Locked" value="lock" checked>
//     //     <label>Unlock</label>
//     // <input type="radio" name="user1Locked" value="unlock"><br>
//     // <hr>
//     // <label>Username</label>
//     // <input type="text" name="user1Username" value="" disabled readonly />
//     // <div class="user1Username">
//     //     <hr>
//     //     <label>Email:</label>
//     //     <input type="email" name="user1Email" value="" disabled readonly />
//     //     <label>Age:</label>
//     //     <input type="text" name="user1Age" value="" disabled readonly />
//     // </div>
    
//     // <button>Show more</button>
//     // </div>`
//     // document.querySelector("#main").appendChild(profile)
//     document.querySelector("#main > div:nth-child(1)").remove();
//         let response = await fetch(url);
//     let data = await response.json();
//     createData(Object.entries(data));        

//     function createData(dataArr){
//         for (data of dataArr){
//             let name = data[1].username;
//             let age = data[1].age;
//             let email = data[1].email; 
//             let profile = document.createElement(`div`);
//             profile.className = `profile`;
//                 profile.innerHTML = `			
//                 <img src="./iconProfile2.png" class="userIcon" />
//                     <label>Lock</label>
//                 <input type="radio" name="user1Locked" value="lock" checked>
//                     <label>Unlock</label>
//                 <input type="radio" name="user1Locked" value="unlock"><br>
//                 <hr>
//                 <label>Username</label>
//                 <input type="text" name="user1Username" value="${name}" disabled readonly />
//                 <div id="user1HiddenFields">
//                     <hr>
//                     <label>Email:</label>
//                     <input type="email" name="user1Email" value="${email}" disabled readonly />
//                     <label>Age:</label>
//                     <input type="text" name="user1Age" value="${age}" disabled readonly />
//                 </div>
//                 <button>Show more</button>`
//             document.querySelector("#main").appendChild(profile)
//             profile.querySelector("#user1HiddenFields").style.display=`none`;
//             profile.getElementsByTagName(`button`)[0].addEventListener(`click`,doSth)
//             profile.querySelector('input[value="lock"]').checked
            
//         }
//     }
//     function doSth(e){
//       let profile = e.target.parentNode;
//       let lockedRadio = profile.querySelector('input[value="lock"]');
//       let unlockedRadio = profile.querySelector('input[value="unlock"]')
//       let btn = profile.getElementsByTagName(`button`)[0];
      
//         if (lockedRadio.checked == true){

//         } else {
//             if (btn.textContent == `Show more`){
//                 profile.querySelector("#user1HiddenFields").style.display=`block`;
//             btn.textContent = `Hide it`
//             } else if (btn.textContent == `Hide it`){
//                 profile.querySelector("#user1HiddenFields").style.display=`none`;
//                 btn.textContent = `Show more`
//             }
//             }
//         }
//     }
async function lockedProfile() {
    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    const response = await fetch(url);
    const information = await response.json();
  
    const main = document.getElementById("main");
    main.replaceChildren(...Object.values(information).map(printProfileCard));
  }
  
  function printProfileCard(info) {
    const { age, email, username, _id } = info;
    const div = createCard(age, email, username, _id);
    return div;
  }
  
  function createCard(age, email, username, id) {
    const mainDiv = createEl("div", "", "profile");
  
    const img = createEl("img", "", "userIcon");
    img.src = "./iconProfile2.png";
    const labelLock = createEl("label", "Lock");
    const lockInput = createInput("radio", username, "lock", true, false);
    const labelUnlock = createEl("label", "Unlock");
    const unlockInput = createInput("radio", username, "unlock");
    const br = document.createElement("br");
    const hr = document.createElement("hr");
    const labelUsername = createEl("label", "Username");
    const userInp = createInput("text", "user1Username", username, false, true);
    const showBtn = createEl("button", "Show more");
    showBtn.addEventListener("click", showMore);
  
    const hiddenDiv = createEl("div");
    hiddenDiv.id = id;
    const labelEmail = createEl("label", "Email");
    const inputEmail = createInput("email", "user1Email", email, false, true);
    const labelAge = createEl("label", "Age");
    const inputAge = createInput("email", "user1Age", age, false, true);
    hiddenDiv.style.display = "none";
  
    appender(hiddenDiv, document.createElement("hr") ,labelEmail, inputEmail, labelAge, inputAge);
    appender(
      mainDiv,
      img,
      labelLock,
      lockInput,
      labelUnlock,
      unlockInput,
      br,
      hr,
      labelUsername,
      userInp,
      hiddenDiv,
      showBtn
    );
  
    return mainDiv;
  }
  
  function showMore() {
    let lockBtn = this.parentElement.querySelector('input[value="lock"]').checked;
    const hiddenContent = this.parentElement.getElementsByTagName("div")[0];
  
    if (lockBtn == false) {
      if (this.textContent === "Show more") {
        hiddenContent.style.display = "block";
        this.textContent = "Hide it";
      } else if (this.textContent === "Hide it") {
        hiddenContent.style.display = "none";
        this.textContent = "Show more";
      }
    }
  }
  
  function createEl(type, cont, className) {
    const el = document.createElement(type);
    el.textContent = cont;
    className ? el.classList.add(className) : "";
    return el;
  }
  
  function createInput(type, name, value, checked, disabled) {
    const el = document.createElement("input");
    let atrributes = {
      type: type,
      name: name,
      value: value,
    };
  
    if (checked) {
      atrributes.checked = true;
    }
  
    if (disabled) {
      atrributes.disabled = true;
      atrributes.readonly = true;
    }
  
    for (let key in atrributes) {
      el.setAttribute(key, atrributes[key]);
    }
    return el;
  }
  
  function appender(parent, ...children) {
    children.forEach((child) => parent.appendChild(child));
  }