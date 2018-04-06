<template lang="pug">
    .container
        .row
            .col-12.col-md-7.ml-auto.mr-auto
                .chat-container.card
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
    max-height: 394px;
    overflow-y: auto;
}

 .message {

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