import Vue from 'vue'
import loading from "./loading";

export function showOk() {
  loading.hide()
  Vue.swal.fire({
    type: 'success',
    title: 'Ok',
    timer: 1500,
    showConfirmButton: false,
  })
}

export function showOkMessage(okMessage) {
  loading.hide()
  Vue.swal.fire({
    type: 'success',
    title: 'Ok',
    text: okMessage,
    timer: 1500,
    showConfirmButton: false,
  })
}

export function showErrorMessage(errorMessage) {
  loading.hide()
  Vue.swal.fire({
    type: 'error',
    title: 'Ops...',
    text: errorMessage,
    timer: 1500
  })

}

export function toastTopEnd(type, message) {
  Vue.swal({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    type: type,
    text: message,
  });
}
