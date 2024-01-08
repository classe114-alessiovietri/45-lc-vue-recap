const { createApp } = Vue;

createApp({
    data() {
        return {
            h1Content: 'Ora ho Vue qui?',
            h1ContentDue: 'Oh Si!',
            h1Classes: 'text-red border-lightcoral bg-blue',
            catImg: 'https://www.my-personaltrainer.it/2023/11/28/gatto-tabby_900x760.jpeg'
        };
    },
    methods: {
        handleButtonClick() {
            console.log(this.faiQualcosa(3));
        },
        faiQualcosa(num) {
            return num * 2;
        },
        imgSrcValue() {
            return this.catImg;
        }
    }
}).mount('#app');
