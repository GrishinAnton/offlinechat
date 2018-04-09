<template lang="pug">
	.container
		.row  
			.col-12.col-md-6.mr-auto.ml-auto.header-panel
				.exit-button
				.network-indicator
					p.network-indicator__status.network-indicator__status_online Онлайн
			.w-100
			.col-12.col-md-6.ml-auto.mr-auto
				form
					.form-group(
						v-for="(obj, index) in formItems"
						)
						label(:for="obj.name") {{ obj.title }}
						input.form-control(	type="text"	
							:class="controlValid[index].validClass"
							:id="obj.name"							
							:placeholder="obj.title"
							@input="changeInput(index, $event)"
							@focus="changeInput(index, $event)"
						)
						p.text-warning {{ controlValid[index].validMessage }}
					button.btn.btn-primary(type='submit' 
						:disabled="checkDisabled"
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
				minLength: 3,
				validMessage: {
					lengthMessage: 'Логин должен содержать минимум 3 символа',
					loginWrong: 'Такой логин уже занят'
				}
			},
			{
				name: 'password',
				title: 'Пароль',
				value: '',
				pattern: /.+/,
				minLength: 1,
				validMessage: {
					lengthMessage: 'Длина пароля составляет минимум 1 символ',
					passwordLoginWrong: 'Пароль введен неверно или данный логин уже занят',/*Если у нас НЕТ кук пользователя и мы не знаем что логин его*/
					passwordWrong: 'Пароль введен неверно'/*Если у нас ЕСТЬ куки пользователя и мы знаем что логин его*/
				}

			}
		],
		controlValid: [],
		
	}),
	beforeMount() {
		this.formItems.forEach( () => {
			
			var validParams = {
				validMessage: '',
				validClass: '',
				validControl: ''
			}
			this.controlValid.push(validParams);
		});
	},
	computed: {
		checkDisabled(){

			function isTrue(obj){
				return obj.validControl == true;
			}

			return  ! this.controlValid.every(isTrue);
			
		}
	},
	methods: {
		changeInput(index, event){
			var value = event.target.value;
			var valueLength = value.length;

			this.controlValidation(index, valueLength, this.validateValue(value, index));
		},
		validateValue(value, index){//return boolean
			var pattern = this.formItems[index].pattern;
			return pattern.test(value);
		},
		controlValidation(index, valueLength, validation){
			var obj = this.formItems[index]
			var controlItem = this.controlValid[index];

			if(valueLength < obj.minLength){

				controlItem.validMessage = obj.validMessage.lengthMessage;	
				controlItem.validClass = '';
				controlItem.validControl = validation;		
			}
			if(valueLength >= obj.minLength){

				controlItem.validMessage = '';				
				controlItem.validClass = 'is-valid';	
				controlItem.validControl = validation;			
			}
		},
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

</style>
