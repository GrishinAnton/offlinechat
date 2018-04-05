<template lang="pug">
    .container
        .row
            .col-7.ml-auto.mr-auto
                .chat-container.card
                    .card-body
                        .message.message__guest
                            .p-3.mb-2.bg-secondary.text-white.rounded-right
                                p Привет
                                small.text-dark Alex
                        .message.message__author
                            .p-3.mb-2.bg-info.text-white.rounded-left
                                p Привет
                                small.text-dark Anton
                        .message.message__guest
                            .p-3.mb-2.bg-secondary.text-white.rounded-right
                                p Как дела?
                                small.text-dark Alex
                        .message.message__guest
                            .p-3.mb-2.bg-secondary.text-white.rounded-right
                                p не спи!
                                small.text-dark Alex
                        .message.message__author
                            .p-3.mb-2.bg-info.text-white.rounded-left
                                p Ок!
                                small.text-dark Anton
            .col-7.ml-auto.mr-auto
                .form-group
                    label(for='exampleFormControlTextarea1') Ваше сообщение:
                    textarea#exampleFormControlTextarea1.form-control
                    button.btn.btn-success(type='button') Отправить


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
     }

     &__author {
         text-align: right;
     }

     p {
         margin-bottom: 0;
     }
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