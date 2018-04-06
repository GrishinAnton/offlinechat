<template lang="pug">
	.container
		.row  
			.col-12.col-md-6.ml-auto.mr-auto
				form
					.form-group(
						v-for="(obj, index) in formItems"
						)
						label(:for="obj.name") {{ obj.title }}
						input.form-control(	type="text"	
							:class="validClass"
							:id="obj.name"							
							:placeholder="obj.title"
							@input="changeInput(index)"
						)
					button.btn.btn-primary(type='submit' 
						disabled
					) Войти
</template>

<script>
export default {
	name: 'singIn',
	data: () => ({
		formItems: [
			{
				name: 'login',
				title: 'Твой логин',
				value: '',
				pattern: /^[\w\W]{3,15}$/,
				validMessage: {
					lengthMessage: 'Логин должен содержать минимум 3 символа',
				}
			},
			{
				name: 'password',
				title: 'Пароль',
				value: '',
				pattern: /.+/,
				validMessage: {
					lengthMessage: 'Длина пароля составляет минимум 1 символ',
					passwordLoginWrong: 'Пароль введен неверно или данный логин уже занят',/*Если у нас НЕТ кук пользователя и мы не знаем что логин его*/
					passwordWrong: 'Пароль введен неверно'/*Если у нас ЕСТЬ куки пользователя и мы знаем что логин его*/
				}

			}
		],
		control: [],
	}),
	beforeMount() {
		this.formItems.forEach( () => {
			this.control.push({});
		});
	},
	computed: {
		validClass: {
			get: function() {
				console.log("+")

			},
			set: function(index){
				console.log(index)
			}
		}
	},
	methods: {
		changeInput(index){
			var value = event.target.value;

			// this.validClass

			this.controlFunc(index, this.validateValue(value, index));
		},
		validateValue(value, index){//return boolean
			var pattern = this.formItems[index].pattern;
			return pattern.test(value);
		},
		controlFunc(index, validation){
			var controlItem = this.control[index];

			controlItem.index = index;
			controlItem.validate = validation;
		}
	}

}
</script>


<style lang="scss">
.form-group {
	text-align: left;
}

</style>
