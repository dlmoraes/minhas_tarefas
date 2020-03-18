import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#145A86',
  cancelButtonColor: '#C10015'
};

Vue.use(VueSweetalert2, options);
