import { toast } from 'react-toastify';

export const showToast = (toastContent, toastConfig = 'error') => {
  let toastType = 'error';
  if (typeof toastConfig === 'string') {
    toastType = toastConfig;
  } else if (toastConfig?.type) {
    toastType = toastConfig.type;
  }
  if (toastType === 'default') {
    toast(toastContent, toastConfig || {});
  } else {
    toast[toastType](toastContent, toastConfig || {});
  }
};
