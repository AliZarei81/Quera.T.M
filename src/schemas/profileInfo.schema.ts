import * as yup from "yup";

const phoneNumberRules = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/;

export const profileInfoSchema = yup.object().shape({
  firtName: yup.string().optional(),
  lastName: yup.string().optional(),
  phoneNumber: yup.string().min(11, "شماره موبایل حداقل باید یازده کاراکتر باشد").matches(phoneNumberRules, "شماره موبایل وارد شده صحیح نمی باشد").optional()
})