// const app = Vue.createApp({
//     data: () => ({
//         message: 'Hello Vue.js!'
//     })
// })
// app.mount('#app')
// console.log(Vue.version);

const app = Vue.createApp({
    data: ()=>  ({
        message: "Hello Piyopiyo!",
        count: 100,
        user: {
            lastName: "James",
            firstName: "Potter",
            nation: "UK"
        },
        colors: ["red", "green", "yellow"]
    })
}).mount('#app')