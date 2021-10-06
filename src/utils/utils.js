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
export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
