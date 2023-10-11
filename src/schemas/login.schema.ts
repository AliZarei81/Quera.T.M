import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

export const loginSchema = yup.object().shape({
  username: yup.string().required("لطفا نام کاربری را وارد کنید"),
  password: yup.string().min(8, "رمز عبور حداقل باید هشت کاراکتر باشد").required("لطفا رمز عبور را وارد کنید")
})