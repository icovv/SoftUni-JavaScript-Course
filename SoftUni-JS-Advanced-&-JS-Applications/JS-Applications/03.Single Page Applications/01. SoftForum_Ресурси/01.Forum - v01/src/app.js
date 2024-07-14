import { createPosts } from "./createPosts.js";
import { loadAllPosts } from "./home.js";
loadAllPosts();

let homeForm = document.querySelector("form")
let cancelBtn = document.querySelector("button.cancel");
let homebtn = document.querySelector("body > header > nav > ul > li > a");

homebtn.addEventListener(`click`,loadAllPosts);
homeForm.addEventListener(`submit`,createPosts);
cancelBtn.addEventListener(`click`,deleteFields);

function deleteFields(e){
    e.preventDefault();
    document.querySelector("form").reset();
}

// function loadHomeScreen(){
//     homeDiv.innerHTML = homeDivInnerHtml;
// }


{/* <div class="theme-title"> tittle
                            <div class="theme-name-wrapper">
                                <div class="theme-name">
                                    <h2>Angular 10</h2>
            
                                </div>
            
                            </div>
                        </div> */}

{/* <div class="comment"> 
<div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

    <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
        dolorem quam,
        accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
        nostrum facilis ipsum dolorem deserunt illum?</p>
</div>


<div id="user-comment"> Post's comment.
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
            <div class="post-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                    dolorem quam.</p>
            </div>
        </div>
    </div>
</div>
</div> */}


{/* <div class="answer-comment"> post comment section
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div> */}