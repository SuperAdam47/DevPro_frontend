import { toasts } from "svelte-toasts";

export const showToast = (status, description, type) => {
    const toast = toasts.add({
      title: status,
      description: description,
      duration: 3000, // 0 or negative to avoid auto-remove
      placement: "top-right",
      type: type,
      theme: "dark",
      showProgress: true,
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });
  };