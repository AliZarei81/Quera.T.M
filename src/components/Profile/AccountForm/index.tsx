import { useState, MouseEvent, ChangeEvent } from "react";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import Form from "../../Common/Form";
import { useFormik } from "formik";
const AccountForm: React.FC = () => {
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
    // validationSchema: loginSchema,
    onSubmit: (values) => {
      // loginMutation.mutate(values, {
      //   onSuccess(payload) {
      //     toast.success("شما با موفقيت وارد شديد");
      //     resetForm();
      //     dispatch(AuthenticateUser(payload));
      //     navigate("/workspace");
      //   },
      //   onError(error) {
      //     let errorMsg: string = "وارد شدن شما با خطا روبه رو شد";
      //     if (isAxiosError<UserLoginErrorReponse>(error)) {
      //       const data = error.response?.data;
      //       errorMsg = data?.detail ? data.detail : errorMsg;
      //     }
      //     toast.error(errorMsg);
      //     resetForm();
      //   },
      // });
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
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="text"
          value={values.username}
          id="userName"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "نام کاربری", for: "userName" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="password"
          value={values.oldPassword}
          id="oldPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "رمز عبور فعلی", for: "oldPassword" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="password"
          value={values.newPassword}
          id="newPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "رمز عبور جدید", for: "newPassword" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="password"
          value={values.repeatNewPassword}
          id="repeatNewPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "تکرار رمز عبور جدید", for: "repeatNewPassword" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />

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
