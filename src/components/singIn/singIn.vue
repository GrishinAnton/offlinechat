<template lang="pug">
	.container
		.row  
			.col-12.col-md-6.mr-auto.ml-auto.header-panel
				.exit-button
				.network-indicator
					p.network-indicator__status.network-indicator__status_online Онлайн
			.w-100
			.col-12.col-md-6.ml-auto.mr-auto
				.label-group
					.form-check.mr-3
						input#exampleRadios1.form-check-input(type='radio', name='exampleRadios', value='option1', checked='', @change="singForm('reg')")
						label.form-check-label(for='exampleRadios1') Зарегестрироваться
					.form-check
						input#exampleRadios2.form-check-input(type='radio', name='exampleRadios', value='option2', @change="singForm('sin')")
						label.form-check-label(for='exampleRadios2') Войти 
				form
					.form-group
						label(for="email") Ваш email
						input.form-control(	
							type="email"
							id="email"							
							placeholder="Ваш email"
							v-model="email.email"
						)
						p.text-warning(v-show="email.wrong") {{ email.message }}
					.form-group
						label(for="password") Ваш пароль
						input.form-control(	
							type="text"	
							id="password"							
							placeholder="Ваш пароль"
							v-model="password.password"
						)
						p.text-warning(v-show="password.wrong") {{ password.message }}
					button.btn.btn-primary(type='submit' 
						@click.prevent="submit"
					) Войти
</template>

<script>

import firebase from 'firebase';

	var config = {
		apiKey: "AIzaSyBlbfDC9l35RrE-dD9Mz_0bPZoUBcNfmg0",
		authDomain: "offlinechat-2up.firebaseapp.com",
		databaseURL: "https://offlinechat-2up.firebaseio.com",
		projectId: "offlinechat-2up",
		storageBucket: "offlinechat-2up.appspot.com",
		messagingSenderId: "612784355266"
	};

	firebase.initializeApp(config)

export default {
	name: 'singIn',
	data: () => ({
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
		sing: 'reg'
		
	}),
	methods: {	
		singForm(e) {          
			this.sing = e;
		},	
		submit(){
			if (this.sing == 'reg') { 
				firebase.auth().createUserWithEmailAndPassword(this.email.email, this.password.password)
				.then(result=>{
					this.$router.push('/chat')
					
				})
				.catch(e => {
					console.log(e);
						this.email.message = ''
						this.email.wrong = ''
						this.password.message = ''
						this.password.wrong = ''
					if(e.code === 'auth/invalid-email'){
						this.email.message = `🤕 ${e.message}`
						this.email.wrong = true;
					} else {
						this.password.message = `🤕 ${e.message}`
						this.password.wrong = true;
					} 			 
				})
			} else {
				console.log('---');
				
			}
		}
	}
}
</script>


<style lang="scss">
.form-group {

	position: relative;
	margin-bottom: 20px;

	text-align: left;

	.text-warning {
		position: absolute;
		margin: 0;
		left: 0;
		bottom: -20px;

		font-size: 14px;
	}
}

.label-group {
  display: flex;
  justify-content: center;
}

.form-check-label {
  cursor: pointer;
}

</style>
