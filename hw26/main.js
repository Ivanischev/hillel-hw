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
    
    input.disabled = true;

    if(!isNaN(idInput)) {
        return showPost(idInput);
        // await fetch(`${url}${postUrl}/${idInput}`)
        //     .then(id => {return id.json();})
        //     .then(id => {
        //         return showPost(id);
        //     })
        // await fetch(`${url}${postUrl}/${idInput}/${commentUrl}`)
        //     .then(com => {return com.json();})
        //     .then(com => {
        //         return showComment(com);
        //     })
    }
}


async function showPost(id) {
    console.log("Start fetching...");
    await fetch(`${url}${postUrl}/${id}`)
    .then(id => {return id.json();})
    .then(id => {
        return htmlPostId(id);
        console.log(id);
    })
}

function htmlPostId(id) {
    var postResult = "";
    for (let i in id) {
        if(id.hasOwnProperty(i)) {
            postResult += i + "," + id[i];
        }
    }
    console.log(postResult);
    return postResult;
    
    

    // let postData = id.toString;
    // console.log(postData);
    // let paragraph = document.createElement("p");
    // paragraph.textContent += `${id.title}`;
    // container.appendChild(paragraph);
    // console.log(id);
}



// fetch post & comments => new obj => add to postsHistory

// async function main() {
//     let id = input.value;
    
//     if(!isNaN(id)) {
        
//         input.disabled = true;

//         await fetch(`${url}${postUrl}/${id}`)
//             .then(data => {
//                 return data.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 return loadPost(data);
//             })
//             .then(({
//                 title,
//                 data
//             }) => {
//                 console.log(title);
//                 input.disabled = false;
//                 input.focus();
//             })
//             // .then(({
//             //     comment,
//             //     data,
//             // }) => {
//             //     container.append(comment);
//             //     postsHistory.push(data);
//             //     console.log(postsHistory);
//             //     input.disabled = false;
//             //     input.focus();
//             //     debugger;
//             // })
            
//     }

// }

// function loadPost(data) {
//     return new Promise(function (resolve, reject) {
//         Comment();
//         Image();

//     })
// }
