const url = 'https://jsonplaceholder.typicode.com/';
const postUrl = 'posts';
const commentUrl = 'comments'
let postsHistory = [];

let container = document.querySelector('.comment-container');
let requestBtn = document.querySelector('#btnRequest');
let input = document.querySelector('#textInput');

requestBtn.addEventListener('click', getPost);
input.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        getPost();
    } else {
        event.preventDefault()
    }
});


function getPost() {
    let idInput = input.value;

    if(!isNaN(idInput)) {
        return showPost(idInput);
    }
}


async function showPost(id) {
    console.log("Start fetching...");
    let postId = await fetch(`${url}${postUrl}/${id}`)
        .then(id => {
            return id.json();
        })
    showComment(id);
    renderPost(postId);  
}


async function showComment(id) {
    let commentId = await fetch(`${url}${commentUrl}/${id}`)
        .then(id => {return id.json();})

    renderPost(commentId);
}


function renderPost(postObj, commentId) {
    let postText = "";
    let postComment = "";

    for (let i in postObj) {
        if(postObj.hasOwnProperty(i)) {
            postText += i + "," + postObj[i];
        }
    }
    for (let i in commentId) {
        if(commentId.hasOwnProperty(i)) {
            postComment += i + "," + commentId[i];
        }
    }

    let paragraph = document.createElement("p");
    paragraph.innerHTML += `${postText} <br> ${postComment}`;
    container.appendChild(paragraph);
}
