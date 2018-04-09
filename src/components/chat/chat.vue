<template lang="pug">
    .container
        .row
            .col-12.col-md-7.mr-auto.ml-auto.header-panel
                .exit-button
                    button(type="button" class="btn btn-warning") Выйти
                .network-indicator
                    p.network-indicator__status.network-indicator__status_offline Онлайн
            .col-12.col-md-7.ml-auto.mr-auto
                
                .chat-container.card
                    //- Шаблон экрана загрузки
                    .chat-loading.bg-light(style="display: none")
                        .chat-loading__inner
                            span
                            span
                            span
                    .chat-wrapper
                        .card-body
                            .message.message__guest
                                .p-3.mb-2.bg-secondary.text-white.rounded-right
                                    p Привет
                                    p.flex.flex_jc-sb
                                        small.text-dark 11 Апреля 22:29
                                        small.text-dark Alex   
                            .message.message__author
                                .p-3.mb-2.bg-info.text-white.rounded-left
                                    p Привет
                                    p.flex.flex_jc-sb
                                        small.text-dark 11 Апреля 22:30
                                        small.text-dark Anton                                    
                            .message.message__guest
                                .p-3.mb-2.bg-secondary.text-white.rounded-right
                                    p Как дела?
                                    p.flex.flex_jc-sb
                                        small.text-dark 11 Апреля 22:31
                                        small.text-dark Alex  
                            .message.message__guest
                                .p-3.mb-2.bg-secondary.text-white.rounded-right
                                    p не спи!
                                    p.flex.flex_jc-sb
                                        small.text-dark 11 Апреля 22:31
                                        small.text-dark Alex  
                            .message.message__author
                                .p-3.mb-2.bg-info.text-white.rounded-left
                                    p Ок!
                                    p.flex.flex_jc-sb
                                        small.text-dark 11 Апреля 22:32
                                        small.text-dark Anton 
            .col-12.col-md-7.ml-auto.mr-auto
                .input-group.mb-3
                    input.form-control(type='text', placeholder="Ваше сообщение")
                    .input-group-append
                        button.btn.btn-outline-secondary(type='button') Отправить





</template>

<script>
    export default {
        name: 'chat',
        
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