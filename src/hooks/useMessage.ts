import { toast } from 'react-toastify';
import { toastsOptions } from '../constants';

export const useMessage = () => {
  const runMessage = (message: string, typeMessage: 'error' | 'success' | 'info') => {
    toast[typeMessage](message, toastsOptions);
  };

  return {
    runMessage,
  };
};
