import Swal, { SweetAlertIcon } from "sweetalert2";

export const Toast = (title: string, icon: SweetAlertIcon) => {
    Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    }).fire({
        icon: icon,
        title: title,
    });
};