const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output ="";

        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error')
            }
        }, 2000);
    });
}

// createPost({title: "Post Three", body: 'This is post three'})
//     .then(getPosts)
//     .cath(err => console.log(err))

// const init = async() => {
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     getPosts();
// }
// init();

const fetchUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const userNames = data.map((item) => {
        return item.name
    });
    console.log(userNames[1]);
    for(let i =0; i < userNames.length; i++) {
        console.log(userNames[i])
        document.body.innerHTML += `<li>${userNames[i]}</li>`
    }
}
fetchUsers()

// const promise = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Goodbye')
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

// Promise.all([promise, promise2, promise3, promise4]).then((values) => {
//     console.log(values);
// });

