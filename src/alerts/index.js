import Swal from "sweetalert2";

export const handleAlertLoading = () => {
  Swal.fire({
    title: "Please wait..",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const handleAlertSuccess = (navigate, id, title) => {
  Swal.fire({
    icon: "success",
    title: title,
    allowOutsideClick: false,
  }).then((response) => {
    if (response.isConfirmed) {
      navigate && navigate(`/form/response/${id}`);
    }
  });
};

export const handleAlertError = () => {
  Swal.fire({
    icon: "error",
    title: "Oops... , lo sentimos",
    text: "intentalo de nuevo",
    allowOutsideClick: false,
  }).then((response) => {
    if (response.isConfirmed) {
      window.location.reload();
    }
  });
};

export const handleAlertInfoUser = (title) => {
  Swal.fire({
    title,
    icon: "info",
    showCloseButton: true,
    focusConfirm: false,
    allowOutsideClick: false,
    confirmButtonText: "ok",
  });
};
