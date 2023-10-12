import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(8, "رمز عبور حداقل باید هشت کاراکتر باشد").matches(passwordRules, "لطفا یک رمز عبور قوی تر وارد کنید").required("لطفا رمز عبور را وارد کنید")
})