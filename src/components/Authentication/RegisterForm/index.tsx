import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../../../components/Common/Input";
import Button from "../../../components/Common/Button";
import Form from "../../../components/Common/Form";
import { Formik, useFormik } from "formik";
import { registerSchema } from "../../../schemas/register.schema";
import { useRegisterMutation } from "../../../hooks/mutations/register-user.mutation";
import { isAxiosError } from "axios";
import { UserRegisterErrorResponse } from "../../../services/requests/register-user";
import { useContext } from "react";
import { StoreContext } from "../../../context/store";

const RegisterForm = () => {
  const registerMutation = useRegisterMutation();
  let navigate = useNavigate();
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
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      registerMutation.mutate(values, {
        onSuccess(payload) {
          toast.success("ثبت نام شما با موفقیت انجام شد");
          resetForm();
          navigate("/");
        },
        onError(error) {
          let errorMsg: string = "ثبت نام شما با خطا مواجه شد";
          if (isAxiosError<UserRegisterErrorResponse>(error)) {
            const data = error.response?.data;
            errorMsg = data?.email
              ? data.email[0]
              : data?.username
              ? data.username[0]
              : errorMsg;
          }
          toast.error(errorMsg);
          resetForm();
        },
      });
    },
  });

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-xl p-l w-3/6 bg-white shadow-2xl rounded-b-2xl">
        <h3 className="text-body-xl font-black text-center">
          ثبت‌ نام در کوئرا تسک منیجر
        </h3>
        <Form onSubmit={handleSubmit}>
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
            type="email"
            value={values.email}
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            label={{ text: "ایمیل", for: "email" }}
            className={`ring-2 ring-gray-primary  ${
              errors.email && touched.email ? "ring-red-primary" : ""
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-red-primary text-xs italic self-start -mt-s">
              {errors.email}
            </p>
          )}
          <Input
            type="password"
            value={values.password}
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            label={{ text: "رمز عبور", for: "password" }}
            className={`ring-2 ring-gray-primary  ${
              errors.password && touched.password ? "ring-red-primary" : ""
            }`}
          />
          {errors.password && touched.password && (
            <p className="text-red-primary text-xs italic self-start -mt-s">
              {errors.password}
            </p>
          )}
          <div className="self-start flex items-center gap-xs ">
            <input
              type="checkbox"
              id="demoCheckbox"
              name="checkbox"
              value={1}
              className="w-[20px] h-[20px]"
            />{" "}
            <label
              className="text-body-m font-normal self-start"
              htmlFor="demoCheckbox"
            >
              قوانین و مقررات را می‌پذیرم.
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full px-3 py-3 p-s gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
            title="ثبت نام"
          />
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
