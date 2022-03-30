import { notification } from "antd";

export function success(title) {
  notification['success']({
    message: 'Success',
    description:
      title
  });
};

export function error(title) {
  notification['error']({
    message: 'Error',
    description:
      title
  });
};

