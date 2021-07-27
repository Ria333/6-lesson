// 1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (posts) {
        let divForMassiveOfData1 = document.getElementsByClassName('massiveOfData1')[0];
        for (const post of posts) {
            let p = document.createElement('p');
            p.innerText = `${post.id} ${post.title} ${post.body}`;
            let getComments = document.createElement ('button');
            getComments.innerText = 'Get comments';
            getComments.onclick = function (){

                fetch (`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then (function (value){ return value.json();})
                    .then (function (comments){

                        let ulCommentsBox = document.getElementsByClassName('commentsBox')[0];
                        ulCommentsBox.innerText = '';
                        for (const comment of comments) {
                            let liComments = document.createElement('li');
                            liComments.innerText = `${comment.id} ${comment.name} ${comment.email} ${comment.body}`;
                            ulCommentsBox.appendChild(liComments);

                        }});};
            p.appendChild(getComments);
            divForMassiveOfData1.appendChild(p);}});
