import { startFn } from "./app.js";
let editMovieSection = document.getElementById(`edit-movie`);
let loginForm = document.getElementById(`form-login`);
let registrationForm = document.getElementById(`form-sign-up`)
let addMovie = document.getElementById(`add-movie`);
let movieDescr = document.getElementById(`movie-example`);
let homePage = document.querySelector("#home-page");

export async function detailsSection(event){
    if (localStorage.length == 0){
        alert(`Please Log in to view the details`);
        return;
    }
    editMovieSection.style.display = `none`
    loginForm.style.display = `none`
    registrationForm.style.display = `none`
    addMovie.style.display = `none`
    movieDescr.style.display = `block`
    homePage.style.display = `none`
    let movieId = event.target.parentNode.parentNode.dataset.id
    let url = "http://localhost:3030/data/movies"
    let response = await fetch(url)
    let data = await response.json();
    let user = JSON.parse(localStorage.getItem(`user`));
    let ownerId = user.id
    console.log(data);
    for (let item of data){
        if (item._id == movieId){
            await createNewEl(item,ownerId)
        }
    }

}
async function editFn(event){
    editMovieSection.style.display = `block`
    loginForm.style.display = `none`
    registrationForm.style.display = `none`
    addMovie.style.display = `none`
    movieDescr.style.display = `none`
    homePage.style.display = `none`

    
    let curMovieId = event.target.dataset.id;
    document.querySelector("#edit-movie > form").dataset.id = curMovieId;
    let url = "http://localhost:3030/data/movies/"
    let response = await fetch(url + curMovieId);
    let data = await response.json();
    let title = document.querySelector(`#edit-movie > form > div > input`);
    let img = document.querySelectorAll(`#edit-movie > form > div > input`)[1];
    let description = document.querySelector(`#edit-movie > form > div > textarea`);
    title.value = data.title;
    description.value = data.description;
    img.value = data.img;
    
    document.querySelector("#edit-movie > form").addEventListener(`submit`,editBtnFn);

}
async function editBtnFn(event){
    event.preventDefault();
    
    let movieId = event.target.dataset.id;
    
    let form = new FormData(document.querySelector("#edit-movie > form"));
    let title = form.get(`title`);
    let description = form.get(`description`);
    let img = form.get(`img`);
    let url = "http://localhost:3030/data/movies/"
    let localStorageInfo = JSON.parse(localStorage.getItem(`user`));
    let ownerId = localStorageInfo.id
    if (title == `` || description == `` || img == ``){
        alert(`All fields should be filled`);
        form.reset();
    }
    try {
        let response = await fetch(url + movieId, {
            method: `Put`,
            headers: {"Content-Type": `application/json`,
            "X-Authorization":`${localStorageInfo.token}`},
            body:JSON.stringify({title,description,img})
        });

        if (!response.ok){
            let er = await response.json()
            alert(er.message)
        }
        let getResponse = await fetch(url + movieId);
        let getData = await getResponse.json();
        editMovieSection.style.display = `none`
        loginForm.style.display = `none`
        registrationForm.style.display = `none`
        addMovie.style.display = `none`
        movieDescr.style.display = `block`
        homePage.style.display = `none`
        createNewEl(getData,ownerId);
        
    } catch (error) {
        alert(error.message);
    }
}   
async function deleteMovie(event){
    let curMovieId = event.target.dataset.id;
    let url = "http://localhost:3030/data/movies/"
    let user = JSON.parse(localStorage.getItem(`user`));

    let response = await fetch(url + curMovieId,{
        method: `Delete`,
        headers: { "Content-Type":`application/json`,
        "X-Authorization":`${user.token}`}
    })
    startFn();
}
async function createNewEl(el,ownerId){
    movieDescr.innerHTML = ``;
    let likes = await countLikes(el._id)
    if (el._ownerId == ownerId){
        movieDescr.innerHTML = `
        <div class="container">
        <div class="row bg-light text-dark">
          <h1>Movie title: ${el.title}</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="${el.img}" alt="Movie">
          </div>
          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>
              ${el.description}
            </p>
            <a class="btn btn-danger" data-id=${el._id} href="#">Delete</a>
            <a class="btn btn-warning" data-id=${el._id} href="#">Edit</a>
            <a class="btn btn-primary" data-id=${el._id} href="#">Like</a>
            <span class="enrolled-span">Liked ${likes}</span>
          </div>
        </div>
      </div>`
    } else {
        movieDescr.innerHTML = `
        <div class="container">
        <div class="row bg-light text-dark">
          <h1>Movie title: ${el.title}</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="${el.img}" alt="Movie">
          </div>
          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>
              ${el.description}
            </p>
            <a class="btn btn-danger" data-id=${el._id} style="display: none" href="#">Delete</a>
            <a class="btn btn-warning" data-id=${el._id} style="display: none" href="#">Edit</a>
            <a class="btn btn-primary" data-id=${el._id} href="#">Like</a>
            <span class="enrolled-span">Liked ${likes}</span>
          </div>
        </div>
      </div>`
    }
    let deleteBtns = Array.from(document.getElementsByClassName(`btn btn-danger`))
    deleteBtns.forEach(bt => bt.addEventListener(`click`,deleteMovie));
    let editBtns = Array.from(document.getElementsByClassName(`btn btn-warning`));
    editBtns.forEach(bt => bt.addEventListener(`click`, editFn));
    let likeBtns = Array.from(document.getElementsByClassName(`btn btn-primary`));
    likeBtns.forEach(bt => bt.addEventListener(`click`,likeMe));
    }
    async function likeMe(event){
        let user = JSON.parse(localStorage.getItem(`user`))
        let movieId = event.target.dataset.id
        let url = `http://localhost:3030/data/movies/`
        let response = await fetch(url+movieId);
        let data = await response.json();
        if (data._ownerId == user.id){
            alert(`You cannot like your own movies!`);
            return;
        }
        let likedByThisUser = getLikesByUser(movieId,user.id);
        if(likedByThisUser > 0){
            alert(`You have already liked this`);
            document.querySelector("#movie-example > div > div > div.col-md-4.text-center > a.btn.btn-primary").style.display = `none`;
            return;
        }
        let newUrl = `http://localhost:3030/data/likes`
        let responseWhenLiked = await fetch(newUrl,{
            method: `Post`,
            headers:{"Content-Type":"application/json",
            "X-Authorization":`${user.token}`},
            body: JSON.stringify({id:user.id,movieId:movieId})
        })
        let likedBtn = document.querySelector("#movie-example > div > div > div.col-md-4.text-center > a.btn.btn-primary");
        likedBtn.style.display = `none`;
        let likes = await countLikes(movieId);
        document.querySelector("#movie-example > div > div > div.col-md-4.text-center > span").textContent = `Liked ${likes}`
    }

async function countLikes(id){
    let likesUrl = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    let response = await fetch(likesUrl);
    let data = await response.json();
    return data;
}
async function getLikesByUser(movieId,userId){
    let url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`;
    let response = await fetch(url);
    let data = await response.json();
    return data
}

{/* <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: Black Widow</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                Natasha Romanoff aka Black Widow confronts the darker parts of
                her ledger when a dangerous conspiracy with ties to her past
                arises. Comes on the screens 2020.
              </p>
              <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <a class="btn btn-primary" href="#">Like</a>
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div>
        </div> */}


{/* <div class="container">
        <div class="row bg-light text-dark">
          <h1>Movie title: Black Widow</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg" alt="Movie">
          </div>
          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>
              Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Comes on the screens 2020.
            </p>
            <a class="btn btn-danger" data-id="1240549d-f0e0-497e-ab99-eb8f703713d7" style="display: none" href="#">Delete</a>
            <a class="btn btn-warning" data-id="1240549d-f0e0-497e-ab99-eb8f703713d7" style="display: none" href="#">Edit</a>
            <a class="btn btn-primary" data-id="1240549d-f0e0-497e-ab99-eb8f703713d7" href="#">Like</a>
            <span class="enrolled-span">Liked 0</span>
          </div>
        </div>
      </div> */}