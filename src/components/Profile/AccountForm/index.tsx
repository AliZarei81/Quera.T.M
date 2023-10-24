import { useContext } from "react";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import Form from "../../Common/Form";
import { useFormik } from "formik";
import { accountSchema } from "../../../schemas/account.schema";
import { useUpdateAccountMutation } from "../../../hooks/mutations/update-account.mutation";
import { AppContext } from "../../../context/userStore/store";
import {
  UpdateUserAccountErrorResponse,
  UpdateUserAccountRequest,
} from "../../../services/requests/update-account";
import { useChangePasswordMutation } from "../../../hooks/mutations/change-password.mutation";
import { ChangeUserPassworErrorResponse } from "../../../services/requests/change-password";
const AccountForm: React.FC = () => {
  const updateAccountMutation = useUpdateAccountMutation();
  const changePasswordMutation = useChangePasswordMutation();
  const { state } = useContext(AppContext);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    },
    validationSchema: accountSchema,
    onSubmit: (values) => {
      if (values.username || values.email) {
        const updateAccountData: UpdateUserAccountRequest = {
          id: state.user.user_id,
        };
        if (values.username) updateAccountData["username"] = values.username;
        if (values.email) updateAccountData["email"] = values.email;
        updateAccountMutation.mutate(updateAccountData, {
          onSuccess(payload) {
            toast.success("ایمیل و نام کاربری با موفقیت آپدیت شد");
            resetForm();
            // dispatch(AuthenticateUser(payload));
          },
          onError(error) {
            let errorMsg: string = "آپدیت ایمیل و نام کاربری با خطا روبه رو شد";
            if (isAxiosError<UpdateUserAccountErrorResponse>(error)) {
              const data = error.response?.data;
              errorMsg = data?.detail ? data.detail : errorMsg;
            }
            toast.error(errorMsg);
            resetForm();
          },
        });
      }
      if (
        values.oldPassword &&
        values.newPassword &&
        values.repeatNewPassword
      ) {
        const changePasswordData = {
          old_password: values.oldPassword,
          new_password: values.newPassword,
          new_password1: values.repeatNewPassword,
        };
        changePasswordMutation.mutate(changePasswordData, {
          onSuccess(payload) {
            toast.success("رمز عبور با موفقیت آپدیت شد");
            resetForm();
            // dispatch(AuthenticateUser(payload));
          },
          onError(error) {
            let errorMsg: string = "آپدیت رمز عبور با خطا روبه رو شد";
            if (isAxiosError<ChangeUserPassworErrorResponse>(error)) {
              const data = error.response?.data;
              errorMsg = data?.new_password
                ? data.new_password[0]
                : data?.non_field_errors
                ? data.non_field_errors[0]
                : data?.detail
                ? data.detail[0]
                : errorMsg;
            }
            toast.error(errorMsg);
            resetForm();
          },
        });
      }
      resetForm();
    },
  });

  return (
    <div className="flex w-1/3 p-m [background-color:#ffff]">
      <Form onSubmit={handleSubmit}>
        <h3 className="text-body-xl font-black self-start">اطلاعات حساب</h3>
        <Input
          type="email"
          value={values.email}
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "ایمیل", for: "email" }}
          className={`ring-2 ring-gray-primary ${
            errors.email && touched.email ? "ring-red-primary" : ""
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.email}
          </p>
        )}
        <Input
          type="text"
          value={values.username}
          id="username"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "نام کاربری", for: "username" }}
          className={`ring-2 ring-gray-primary ${
            errors.username && touched.username ? "ring-red-primary" : ""
          }`}
        />
        {errors.username && touched.username && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.username}
          </p>
        )}
        <Input
          type="password"
          value={values.oldPassword}
          id="oldPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "رمز عبور فعلی", for: "oldPassword" }}
          className={`ring-2 ring-gray-primary  ${
            errors.oldPassword && touched.oldPassword ? "ring-red-primary" : ""
          }`}
        />
        {errors.oldPassword && touched.oldPassword && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.oldPassword}
          </p>
        )}
        <Input
          type="password"
          value={values.newPassword}
          id="newPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "رمز عبور جدید", for: "newPassword" }}
          className={`ring-2 ring-gray-primary  ${
            errors.newPassword && touched.newPassword ? "ring-red-primary" : ""
          }`}
        />
        {errors.newPassword && touched.newPassword && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.newPassword}
          </p>
        )}
        <Input
          type="password"
          value={values.repeatNewPassword}
          id="repeatNewPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "تکرار رمز عبور جدید", for: "repeatNewPassword" }}
          className={`ring-2 ring-gray-primary  ${
            errors.repeatNewPassword && touched.repeatNewPassword
              ? "ring-red-primary"
              : ""
          }`}
        />
        {errors.repeatNewPassword && touched.repeatNewPassword && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.repeatNewPassword}
          </p>
        )}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full justify-center h-12 px-3 py-3 mt-l p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
          title="ثبت تغییرات"
        />
      </Form>
    </div>
  );
};

export default AccountForm;
