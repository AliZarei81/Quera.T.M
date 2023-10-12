import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { HttpStatusCode, isAxiosError } from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import Header from "../../../components/Authentication/Header";
import apiClients from "../../../services/api-clients";
import AuthContext from "../../../context/AuthProvider";
import { UserLoginRequest } from "../../../types/request/login.request.dto";
import { loginSchema } from "../../../schemas/login.schema";
import { UserLoginResponse } from "../../../types/response/login.response.dto";
import { UserLoginErrorReponse } from "../../../types/response/error/login.error.response.dto";

const Login: React.FC = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
  } = useFormik<UserLoginRequest>({
    initialValues: {
      username: "",
      password: "",
      detail: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      try {
        const user = { username: values.username, password: values.password };
        const response = await apiClients.post<UserLoginResponse>(
          "/accounts/login/",
          user
        );
        const { access, refresh, user_id, username } = response.data;
        setAuth({ access, refresh, user_id, username });
        actions.resetForm();
      } catch (error) {
        if (isAxiosError<UserLoginErrorReponse>(error)) {
          if (error.response?.status === HttpStatusCode.Unauthorized) {
            const { detail } = error.response.data;
            setErrors({
              detail,
            });
          }
        }
      }
    },
  });

  return (
    <div className="h-full">
      <Header text="ثبت نام نکرده ای؟" title="ثبت نام" to="register" />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  bg-white shadow-2xl rounded-b-2xl">
          <h3 className="w-[509px] h-[55px] text-[32px] font-black text-center">
            به کوئرا تسک منیجر خوش برگشتی :)
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
              <p className="text-red-primary text-xs italic self-start">
                {errors.username}
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
              <p className="text-red-primary text-xs italic self-start">
                {errors.password}
              </p>
            )}
            <div className="self-start text-[13px] font-extrabold   text-brand-primary">
              <Link to="forgot">رمز عبور را فراموش کرده‌ای؟</Link>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
              title="ورود"
            />
            {errors.detail && (
              <p className="text-red-primary text-xs italic self-start">
                {errors.detail}
              </p>
            )}
            <div className=" text-[16px]  font-extrabold   flex items-center justify-center gap-[5px]">
              <p>ثبت نام نکرده ای؟</p>
              <Link className="text-brand-primary" to="register">
                ثبت نام
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
