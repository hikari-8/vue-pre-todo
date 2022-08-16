// const app = Vue.createApp({
//     data: () => ({
//         message: 'Hello Vue.js!'
//     })
// })
// app.mount('#app')
// console.log(Vue.version);

// const app = Vue.createApp({
//     data: ()=>  ({
//         message: "Hello Piyopiyo!",
//         count: 100,
//         user: {
//             lastName: "James",
//             firstName: "Potter",
//             nation: "UK"
//         },
//         colors: ["red", "green", "yellow"]
//     })
// }).mount('#app')


// const app = Vue.createApp({
//     data: () => ({
//         toggle: false
//     })
// })
// app.mount("#app")

const app = Vue.createApp({
    data: ()=> ({
        colors: ["James", "John", "Mike"]
    })
}).mount('#app')