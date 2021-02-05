Vue.config.devtools = true;

new Vue ({
	el: '#app',

	data: {
		emails: []
	},

	mounted() {
		const self = this;

		for (let i = 0; i < 10; i++) {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
			.then(function (email) {
			self.emails.push(email.data.response);
			})
		}
		console.log(self.emails);
	}
});
