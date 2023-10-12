import * as yup from "yup";

export const forgotSchema = yup.object().shape({
  email: yup.string().email("لطفا یک آدرس ایمیل معتبر وارد کنید").required("لطفا آدرس ایمیل را وارد کنید"),
})