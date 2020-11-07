const url = 'https://jsonplaceholder.typicode.com/';
const photoUrl = 'photos';
let photoHistory = [];

let photContainer = document.querySelector('.photo-container');
let request = document.querySelector('#request');
let photoInput = document.querySelector('#photoInput');

request.addEventListener('click', main);
photoInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        main()
    } else {
        event.preventDefault()
    }
});


async function main() {

    let id = photoInput.value;
    if (!isNaN(id)) {

        photoInput.disabled = true;

        console.log('Fetch todo started...');

        await fetch(`${url}${photoUrl}/${id}`)
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
                return loadImage(data);
            })
            .then(({
                image,
                data
            }) => {
                photContainer.append(image);
                photoHistory.push(data);
                console.log(photoHistory);
                photoInput.disabled = false;
                photoInput.focus();
            })

    }

}

function loadImage(data) {
    return new Promise(function (resolve, reject) {
        let image = new Image();
        image.src = data.url;
        image.onload = () => resolve({
            image,
            data
        });
        image.onerror = () => reject();
    })
}