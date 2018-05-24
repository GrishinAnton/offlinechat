<template lang="pug">
    .container
        .row
            .col-12.col-md-7.mr-auto.ml-auto.header-panel
                .exit-button
                    button(type="button" class="btn btn-warning") Выйти
                .network-indicator
                    p.network-indicator__status.network-indicator__status_offline Онлайн
            .col-12.col-md-7.mr-auto.ml-auto.header-panel
                button(type="button" class="btn btn-warning"
                        @click="addMessageGuest"
                
                ) Сообщение гостя
                button(type="button" class="btn btn-primary"
                        @click="addMessageAuthor"
                ) Сообщение автора
            .col-12.col-md-7.ml-auto.mr-auto
                
                .chat-container.card
                    .card-body
                        ul
                            li(v-for="(message, index) in messages" :key="index")
                                .message(:class="{ message__guest: message.guest, message__author: message.author }")
                                    .alert(:class="{ 'alert-secondary': message.guest, 'alert-primary': message.author }")
                                        p  {{ message.message }}
                                        p.flex.flex_jc-sb
                                            small.text-dark {{ message.date }}
                                            small.text-dark {{ message.from }}                       
            .col-12.col-md-7.ml-auto.mr-auto
                .input-group.mb-3
                    input.form-control(type='text', placeholder="Ваше сообщение")
                    .input-group-append
                        button.btn.btn-outline-secondary(type='button') Отправить





</template>

<script>
import firebase from 'firebase';
        
    export default {
        name: 'chat',
        data: () => ({
            messages: [
                {
                    guest: true,
                    from: "Alex",
                    date: "11 Апреля 22:29",
                    message: "Привет"
                },
                {
                    author: true,
                    from: "Anton",
                    date: "11 Апреля 22:30",
                    message: "Привет"
                },
                {
                    guest: true,
                    from: "Alex",
                    date: "11 Апреля 22:31",
                    message: "Как дела?"
                },
                {
                    guest: true,
                    from: "Alex",
                    date: "11 Апреля 22:31",
                    message: "не спи!"
                },
                {
                    author: true,
                    from: "Anton",
                    date: "11 Апреля 22:45",
                    message: "ок"
                }
            ]
        }),
        methods: {
            addMessageGuest(){
                
                this.messages.push({
                    guest: true,
                    from: "Alex",
                    date: "11 Апреля 22:29",
                    message: "Привет"
                })
            },
            addMessageAuthor(){

                this.messages.push({
                    author: true,
                    from: "Anton",
                    date: "11 Апреля 22:45",
                    message: "ок"
                })
            }
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
     height: 100%;

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