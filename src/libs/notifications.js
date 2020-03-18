import {Notify} from 'quasar';

let mensagens = {
  'realizadoComSucesso': {
    message: 'Operação realizada com sucesso!',
    icon: 'fas fa-thumbs-up',
    color: 'primary'
  },
  'loginExpirado': {
    message: 'Login expirado!',
    icon: 'fas fa-exclamation',
    color: 'negative'
  },
  'erroDeSistema': {
    message: 'Erro de Sistema!',
    position: 'bottom-right',
    icon: 'fas fa-exclamation',
    color: 'negative'
  },
  'demoraNaResposta': {
    message: 'Demora na resposta!',
    position: 'bottom-right',
    icon: 'fas fa-exclamation',
    color: 'negative'
  },
  'erroNaRede': {
    message: 'Erro de rede!',
    position: 'bottom-right',
    icon: 'fas fa-exclamation',
    color: 'negative'
  }
};

export const REALIZADO_COM_SUCESSO = 'realizadoComSucesso';
export const LOGIN_EXPIRADO = 'loginExpirado';
export const ERRO_DE_SISTEMA = 'erroDeSistema';
export const DEMORA_NA_RESPOSTA = 'demoraNaResposta';
export const ERRO_NA_REDE = 'erroNaRede';

export function notificacao(tipoMensagem) {
  Notify.create(mensagens[tipoMensagem]);
}

