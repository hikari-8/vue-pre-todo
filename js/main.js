const app = Vue.createApp ({
    data: ()=> ({

    }),
    methods: {
        addItem: function (event) {
            console.log("Clicked!")
        }
    }
})
app.mount('#app')



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

// const app = Vue.createApp({
//     data: ()=> ({
//         colors: ["James", "John", "Mike"]
//     })
// }).mount('#app')

// const app = Vue.createApp({
//     data: ()=> ({
//         user: {
//             firstName: "John",
//             lastName: "Mike",
//             Age: "30"
//         }
//     })
// }).mount('#app')

// const app = Vue.createApp({
//     data: ()=> ({
//         now: "-"
//     }),
//     methods: {
//         onClick: function() {
//             this.now = new Date().toLocaleString()
//             console.log(this)
//         }
//     }
// }).mount('#app')

// const app = Vue.createApp({
//     data: ()=> ({
//     message: "Hello Piyopiyo!"
//     })
// }).mount('#app')

// const app = Vue.createApp({
//     data: ()=> ({
        
//     })
// })
// app.component("piyopiyo-component",{
//     template: "<p>Hello, piyopiyo!</p>"
// })
// app.mount('#app')