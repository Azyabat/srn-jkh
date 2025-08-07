import { ToastVariantMessage } from "./types";

export const VariantsColors = {
  [ToastVariantMessage.SUCCESS]: "#42C16B",
  [ToastVariantMessage.ERROR]: "#E62D41",
  [ToastVariantMessage.WARNING]: "#FF8C00",
  [ToastVariantMessage.INFORMATION]: "#0B60BB",
};

export const VariantsText = {
  [ToastVariantMessage.SUCCESS]: "Выполнено!",
  [ToastVariantMessage.ERROR]: "Ошибка",
  [ToastVariantMessage.WARNING]: "Предупреждение",
  [ToastVariantMessage.INFORMATION]: "Информация",
};

export const toastContainerId = "toastContainer";
