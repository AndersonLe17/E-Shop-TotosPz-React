import { Bounce, toast } from "react-toastify";
import { ToastTypeEnum } from "../domain/enums/toast.enum";

export const toastNotify = (type: ToastTypeEnum = ToastTypeEnum.DEFAULT, msg?: string) => {
  toast(type === ToastTypeEnum.DEFAULT || type === ToastTypeEnum.ALERT ? msg : toastMessage(type), {
    position: "bottom-right",
    autoClose: 2500,
    closeOnClick: true,
    pauseOnHover: true,
    transition: Bounce,
    type: toastType(type),
    theme: "colored",
  });
};

const toastMessage = (type: ToastTypeEnum) => {
  switch (type) {
    case ToastTypeEnum.CREATED:
      return "Registro exitoso";
    case ToastTypeEnum.MODIFIED:
      return "Modificación exitosa";
    case ToastTypeEnum.DELETED:
      return "Inactivación exitosa";
    case ToastTypeEnum.ALERT:
      return "Alerta";
  }
};

const toastType = (type: ToastTypeEnum) => {
  switch (type) {
    case ToastTypeEnum.CREATED:
      return "success";
    case ToastTypeEnum.MODIFIED:
      return "info";
    case ToastTypeEnum.DELETED:
      return "error";
    case ToastTypeEnum.ALERT:
      return "warning";
    case ToastTypeEnum.DEFAULT:
      return "default";
  }
};
