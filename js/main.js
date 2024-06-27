// creo variabile per vue
const { createApp } = Vue;

createApp({
    data() {
        return{
            // array dove pushare email generate
            emailList: [],

        }
    },
    mounted () {

        // chiamo api per creare email random
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((emailGenerated) => {
            const result = emailGenerated.data.response;
            console.log(result);

            // pusho email generata in array
            this.emailList.push(result);
            console.log(this.emailList);
        })
    }
}).mount("#app");