import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

export const registerSchema = yup.object().shape({
  username: yup.string().required("لطفا نام کاربری را وارد کنید"),
  email: yup.string().email("لطفا یک آدرس ایمیل معتبر وارد کنید").required("لطفا آدرس ایمیل را وارد کنید"),
  password: yup.string().min(8, "رمز عبور حداقل باید هشت کاراکتر باشد").matches(passwordRules, "لطفا یک رمز عبور قوی تر وارد کنید").required("لطفا رمز عبور را وارد کنید")
})