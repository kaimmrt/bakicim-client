import { notification } from "antd";

export function success(content) {
  notification['success']({
    message: 'İşlem Başarılı',
    description:
      content
  });
};

export function error(content) {
  notification['error']({
    message: 'İşlem Hatası',
    description:
      content
  });
};

