import { useIntl } from 'react-intl';
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
  //encode base 64
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const deCodeBase64 = (data) => {
  return new Buffer(data, 'base64').toString('binary');
};
export default function formatMessageInt(id) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const int = useIntl();
  return int.formatMessage({ id });
}
