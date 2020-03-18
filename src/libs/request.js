import axios from 'axios';
import { LocalStorage, Notify } from 'quasar';
import loading from './loading';
import { notificacao, DEMORA_NA_RESPOSTA, ERRO_DE_SISTEMA, ERRO_NA_REDE, LOGIN_EXPIRADO } from './notifications';

// create an axios instance
const servico = axios.create({
	baseURL: process.env.API, // base URL da API
	timeout: 20000 // request timeout
});

servico.interceptors.request.use(
	(configuracao) => {
		loading.show(configuracao);

		let user = LocalStorage.getItem('user');
		if (user) {
			configuracao.headers['Authorization'] = 'Bearer ' + user.token;
		}

		return configuracao;
	},
	(error) => {
		Promise.reject(error);
	}
);

servico.interceptors.response.use(
	(response) => {
		loading.hide(response.config);
		const resposta = response.data;
		// console.log(response)
		if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
			Notify.create({
				message: resposta
			});
			return Promise.reject('error');
		} else {
			return resposta;
		}
	},
	(error) => {
		loading.hide(error.config);
		if (error.response && error.response.status === 401) {
			notificacao(LOGIN_EXPIRADO);
			LocalStorage.remove('user');
			location.reload();
		} else if (error.response && error.response.status === 500) {
			notificacao(ERRO_DE_SISTEMA);
		} else if (error.message.indexOf('timeout') > -1) {
			notificacao(DEMORA_NA_RESPOSTA);
		} else {
			notificacao(ERRO_NA_REDE);
		}
		return Promise.reject(error);
	}
);

export default servico;
