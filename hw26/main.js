const url = 'https://jsonplaceholder.typicode.com/';
const postUrl = 'posts';
const commentUrl = 'comments'

let comments = document.querySelector('#comments');

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


function showPost(id) {

    let commentId = fetch(`${url}${postUrl}/${id}/${commentUrl}`);
    let postId = fetch(`${url}${postUrl}/${id}`);

    
    postId.then(request => {
        return request.json();
    })
    .then(data => {
        let postTitle = data.title;
        let postBody = data.body;
        let div = document.createElement('div');
        let title = document.createElement('h3');
        let description = document.createElement('p');
        title.innerHTML = 'Title: ' + postTitle;
        description.innerHTML = 'Body: ' + postBody;
        div.append(title);
        div.append(description);
        posts.append(div);
        
        return commentId;
    })
    .then(request => {
        return request.json();
    })
    .then(data => {
        data.forEach(item => {
            let commentName = item.name;
            let commentBody = item.body;
            let commentEmail = item.email;
            let divComment = document.createElement('div');
            let pComment = document.createElement('p');
            pComment.innerHTML = `'comment data: '${commentName} <br> ${commentBody} <br> ${commentEmail}`;
            divComment.append(pComment);
            posts.append(divComment);   
                            
            input.value = "";
        })
    })
}

