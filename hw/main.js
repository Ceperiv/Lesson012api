// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// const container = document.getElementsByClassName('container')[0]
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             const divEl = document.createElement('div')
//             divEl.classList.add('post')
//             divEl.insertAdjacentHTML('afterbegin', `<h2>Title: ${item.title}.</h2><h3>User Id: ${item.userId}.</h3> <h3>Id: ${item.id}.</h3>  <p>Body: ${item.body}.</p>`)
//             container.append(divEl)
//         }
//
//     })

//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//
// const container = document.getElementsByClassName('container')[0]
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             console.log(item)
//             const divEl = document.createElement('div')
//             divEl.classList.add('comment')
//             divEl.innerHTML = `<h2>Name: ${item.name}</h2> <h3>Id: ${item.id}</h3> <h3>Post Id: ${item.postId}</h3> <h4>Email: ${item.email}</h4> <p>Body: ${item.body}</p>.`
//             container.append(divEl)
//
//         }
//
//
//     })

















