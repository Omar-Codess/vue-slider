// const slides = [
//     {
//         image: 'img/01.jpg',
//         title: 'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     },
//     {
//         image: 'img/02.jpg',
//         title: 'Svizzera',
//         text: 'Lorem ipsum.',
//     },
//     {
//         image: 'img/03.jpg',
//         title: 'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         image: 'img/04.jpg',
//         title: 'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
//     },
//     {
//         image: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
//     }
// ];

// console.log(slides);

const { createApp } = Vue;

createApp({
    data() {
        return{
            slides: {
                image: [
                    'img/01.jpg',
                    'img/02.jpg',
                    'img/03.jpg',
                    'img/04.jpg',
                    'img/05.jpg',
                ],
                title: [
                    'Svezia',
                    'Svizzera',
                    'Gran Bretagna',
                    'Germania',
                    'Paradise',
                ],
                text: [
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                    'Lorem ipsum.',
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                ]
            },
        currentSlide: 0
        };
    },
    methods: {
        showNext: function() {
            if (this.currentSlide < this.slides.length - 1){
                currentSlide++;
            } else {
                this.currentSlide = 0;
            }
        },
        showPrev: function() {
            if (this.currentSlide > 0) {
                currentSlide--;
            } else {
                this.currentSlide = this.slides.length - 1;
            }
        }
    }
}).mount(`#app`);