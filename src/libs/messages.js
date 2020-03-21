import Vue from "vue";
import loading from "./loading";

export function showOk() {
  loading.hide();
  Vue.swal({
    icon: "success",
    title: "Ok",
    timer: 2500,
    showConfirmButton: false
  });
}

export function showOkMessage(okMessage) {
  loading.hide();
  Vue.swal({
    icon: "success",
    titleText: "Sucesso...",
    text: okMessage,
    timer: 2500,
    showConfirmButton: false
  });
}

export function showErrorMessage(errorMessage) {
  loading.hide();
  Vue.swal({
    icon: "error",
    title: "Ops...",
    text: errorMessage,
    timer: 2500
  });
}

export function toastTopEnd(type, message) {
  Vue.swal({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    icon: type,
    text: message
  });
}
