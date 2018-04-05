<template lang="pug">
  .container
    .row  
      .col-6.ml-auto.mr-auto
        form
          .form-group
            label(for='login') Твой логин
            input#login.form-control(type='email', aria-describedby='emailHelp', placeholder='Твой логин')
          .form-group
            label(for='password') Пароль
            input#password.form-control(type='password', placeholder='Пароль')
          button.btn.btn-primary(type='submit') Submit

</template>

<script>
export default {
  name: 'singIn',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.form-group {
  text-align: left;
}

</style>
