import { ToastOptions } from 'react-toastify';

export const toastsOptions: ToastOptions = Object.freeze({
  position: 'top-right',
  autoClose: 7000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const CREDENTIALS = Object.freeze({
  username: 'Admin',
  password: '12345',
});
