import {Loading, QSpinnerGears, QSpinnerFacebook} from 'quasar';

let loading = {};

loading.show = function (config) {
  const spinner = typeof QSpinnerFacebook !== 'undefined' ? QSpinnerFacebook : Quasar.components.QSpinnerFacebook;
  Loading.show({
    spinner: spinner,
    message: '',
    messageColor: 'white',
    spinnerSize: 100,
    spinnerColor: 'white',
    customClass: ''
  });
};

loading.hide = function (config) {
  setTimeout(() => {
    Loading.hide();
  }, 1000);
};

export default loading;
