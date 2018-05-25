<template lang="pug">
    .container
        .row
            .col-12.col-md-7.mr-auto.ml-auto.header-panel
                .exit-button
                    button(type="button" class="btn btn-warning" @click.prevent="exit") Выйти
                .network-indicator
                    p.network-indicator__status.network-indicator__status_offline Онлайн
            .col-12.col-md-7.mr-auto.ml-auto.header-panel
                p Вы вошли как {{ authUser.email }}
            .col-12.col-md-7.ml-auto.mr-auto
                .chat-loading.bg-light(v-if="loadScreen")
                    .chat-loading__inner
                        span
                        span
                        span
                .chat-container.card(v-else)
                    .card-body
                        ul
                            li(v-for="(message, index) in messages" :key="index")
                                .message(:class="{ message__guest: message.guest, message__author: message.author }")
                                    .alert(:class="{ 'alert-secondary': message.guest, 'alert-primary': message.author }")
                                        p  {{ message.message }}
                                        p.flex.flex_jc-sb
                                            small.text-dark {{ message.date }}
                                            small.text-dark {{ message.email }}                       
            .col-12.col-md-7.ml-auto.mr-auto
                .input-group.mb-3
                    input.form-control(type='text', placeholder="Ваше сообщение" v-model="currentMessage")
                    .input-group-append
                        button.btn.btn-outline-secondary(type='button' @click.prevent="send") Отправить
</template>

<script>
import firebase from 'firebase';

const database = firebase.database();

        
    export default {
        name: 'chat',
        data: () => ({
            authUser: '',
            email: {
                email: '',
                wrong: '',
                message: ''
            },
            password: {
                password: '',
                wrong: '',
                message: ''
            },
            messages: [],
            loadScreen: true,
            currentMessage: ''
        }),
        methods: {
            exit(){

                firebase.auth().signOut()
                .then(response => {
                    this.$router.push('/')
                    
                })
                .catch(e => console.log(e, 'chat'))
            },
            send() {
                if(this.currentMessage){
                    database.ref('messages').push().set({message: this.currentMessage, email: this.email.email, date: firebase.database.ServerValue.TIMESTAMP})
                    this.currentMessage = '';
                } else {
                    return
                }
                
            }
        },
        created() {
           
            firebase.auth().onAuthStateChanged(user => {
                this.authUser = user;
                
                if(!this.authUser) {
                    this.$router.push('/')
                } else {
                    this.email.email = this.authUser.email
                }
            })        
            setTimeout(() => {
                database.ref('messages').on('child_added', snapshot => {

                    var obj = snapshot.val()
                           
                    if(obj.date) {
                        obj.date = new Date(obj.date)
                    } else {
                        obj.date = ''
                    }
                    if(obj.email === this.email.email){
                        obj['author'] = true
                    } else {
                        obj['guest'] = true
                    }
                    
                    this.messages.push({...obj, id: snapshot.key});
                    this.loadScreen = false;
                     
                })                
            }, 0);    
            
        }
        
    }
</script>

<style lang="scss">

.chat-container {
    margin-bottom: 20px;
    height: 394px;
    overflow-y: auto;
}

 .message {

     &:last-child .mb-2  {
        margin-bottom: 0!important;
    }

     &__guest {
        text-align: left;

        .flex small:first-child {
            order: 1;
        }
     }

     &__author {
         text-align: right;
     }

     p {
         margin-bottom: 0;
     }
 }

 .chat-loading {

     display: flex;
     position: relative;
     width: 100%;
     height: 394px;
     margin-bottom: 20px;

     &__inner {
         display: flex;
         justify-content: space-between;

         width: 40px;
         height: 10px;
         margin: auto
         
     }
     span {

         width: 10px;
         height: 10px;

         border-radius: 50%;
         background-color: lightsalmon;
         transition: transform .5s;

         animation: loaddot 1s infinite;

         &:nth-child(2){
             animation-delay: 1.2s
         }

        &:nth-child(3){
             animation-delay: 2.4s
         }
         
     }
 }

 @keyframes loaddot {
     0% {
         transform: translateY(0)
     }
     50% {
         transform: translateY(-10px)
     }
     100% {
         transform: translateY(0)
     }
 }

.card-body {
    padding: 10px;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
}



.flex {
    display: flex;
    justify-content: space-between;
}

.form-group {
    text-align: left;
}

.form-control {
    resize: none;
    height: 40px;
}

.btn-success {
    margin-top: 20px;
}


</style>