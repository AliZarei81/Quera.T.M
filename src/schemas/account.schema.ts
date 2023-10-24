import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;

export const accountSchema = yup.object().shape({
  email: yup.string().email("لطفا یک آدرس ایمیل معتبر وارد کنید").optional(),
  username: yup.string().optional(),
  oldPassword: yup.string().min(8, "رمز عبور حداقل باید هشت کاراکتر باشد").matches(passwordRules, "لطفا یک رمز عبور قوی تر وارد کنید").optional(),
  newPassword: yup.string().min(8, "رمز عبور حداقل باید هشت کاراکتر باشد").matches(passwordRules, "لطفا یک رمز عبور قوی تر وارد کنید").optional(),
  repeatNewPassword: yup.string().min(8, "رمز عبور حداقل باید هشت کاراکتر باشد").matches(passwordRules, "عبور قوی تر وارد کنید").optional()
})