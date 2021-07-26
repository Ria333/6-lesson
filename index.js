// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

/*fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (posts) {

let divForMassiveOfData1 = document.getElementsByClassName('massiveOfData1')[0];
for (const post of posts) {
    let p = document.createElement('p');
    p.innerText = `${post.id} ${post.title} ${post.body}`;
    divForMassiveOfData1.appendChild(p);
}});*/


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(function (respond) {
        return respond.json();
    })
    .then(function (comments) {
        let divForMassiveOfData2 = document.getElementsByClassName('massiveOfData2')[0];
        for (const comment of comments) {
            let divochka = document.createElement('div');
            divochka.innerText = `${comment.id} ${comment.name} ${comment.email} ${comment.body}`;
            divForMassiveOfData2.appendChild(divochka);
        }});


