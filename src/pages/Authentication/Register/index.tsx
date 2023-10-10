import { useState, MouseEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import Input from "../../../components/Common/Input";
import Button from "../../../components/Common/Button";
import Form from "../../../components/Common/Form";
import Header from "../../../components/Authentication/Header";
import apiClients from "../../../services/api-clients";
import { UserRegisterRequest } from "../../../types/request/userregister-request";
import { UserRegisterResponse } from "../../../types/response/userregister-response";
import { FormikHelpers, useFormik } from "formik";
import { registerSchema } from "../../../schemas/register.schema";

const Register: React.FC = () => {
  let navigate = useNavigate();

  const onSubmit = async (
    values: UserRegisterRequest,
    actions: FormikHelpers<UserRegisterRequest>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    apiClients
      .post<UserRegisterResponse>("/accounts/", values)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const err = error as AxiosError;
      });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
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
    onSubmit,
  });

  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  bg-white shadow-2xl rounded-b-2xl">
          <h3 className="w-[509px] h-[55px] text-[32px] font-black text-center">
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
              className={`ring-2 ring-gray-primary w-[592px] ${
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
              className={`ring-2 ring-gray-primary w-[592px] ${
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
              className={`ring-2 ring-gray-primary w-[592px] ${
                errors.password && touched.password ? "ring-red-primary" : ""
              }`}
            />
            {errors.password && touched.password && (
              <p className="text-red-primary text-xs italic self-start -mt-s">
                {errors.password}
              </p>
            )}
            <div className="self-start flex items-center gap-[5px] ">
              <input
                type="checkbox"
                id="demoCheckbox"
                name="checkbox"
                value={1}
                className="w-[20px] h-[20px]"
              />{" "}
              <label
                className="text-[16px] font-normal self-start"
                htmlFor="demoCheckbox"
              >
                قوانین و مقررات را می‌پذیرم.
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
              title="ثبت نام"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
