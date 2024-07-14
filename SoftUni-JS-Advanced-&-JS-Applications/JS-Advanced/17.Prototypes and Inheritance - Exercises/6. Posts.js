function solution(){
    class Post {
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Post: ${this.title}\n` + `Content: ${this.content}` 
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content)
            this.likes = likes;
            this.dislikes = dislikes
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment)
        }
        toString(){
            if (this.comments.length <= 0){
                return `Post: ${this.title}\n` + `Content: ${this.content}\n` + `Rating: ${this.likes - this.dislikes}`
            }
            debugger
            let forOutput = [];
            this.comments.forEach(x => forOutput.push(` * ${x}`));
            
            return `Post: ${this.title}\n` + `Content: ${this.content}\n` + `Rating: ${this.likes - this.dislikes}\n` + `Comments:\n` + forOutput.join(`\n`);
        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content) 
            this.views = views;
        }
        view(){
            this.views++ ;
            return this
        }
        toString(){
        return `Post: ${this.title}\n` + `Content: ${this.content}\n` + `Views: ${this.views}`
        }
    }
    return{
        Post,
        SocialMediaPost,
        BlogPost
    }
}
const classes = solution();

let post = new classes.Post("Post", "Content");
console.log(post.toString());
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");
scm.addComment("Wow!");
scm.addComment("Wow!");
scm.addComment("Wow!");
scm.addComment("Wow!");
console.log(scm.toString());