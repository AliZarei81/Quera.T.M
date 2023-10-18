import { useNavigate } from "react-router-dom";
import { HttpStatusCode, isAxiosError } from "axios";
import Input from "../../../components/Common/Input";
import Button from "../../../components/Common/Button";
import Form from "../../../components/Common/Form";
import apiClients from "../../../services/api-clients";
import { UserRegisterRequest } from "../../../types/request/register.request.dto";
import { UserRegisterResponse } from "../../../types/response/register.response.dto";
import { useFormik } from "formik";
import { registerSchema } from "../../../schemas/register.schema";
import { UserRegisterErrorResponse } from "../../../types/response/error/register.error.response.dto";

const RegisterForm = () => {
  let navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      try {
        const response = await apiClients.post<UserRegisterResponse>(
          "/accounts/",
          values
        );
        actions.resetForm();
        navigate("/");
      } catch (error) {
        if (isAxiosError<UserRegisterErrorResponse>(error)) {
          if (error.response?.status === HttpStatusCode.BadRequest) {
            const { username, email, password } = error.response.data;
            setErrors({
              username: username?.length ? username[0] : "",
              email: email?.length ? email[0] : "",
              password: password?.length ? password[0] : "",
            });
          }
        }
      }
    },
  });

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[700px] gap-[32px] p-[24px]  bg-white shadow-2xl rounded-b-2xl">
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
            className="h-12 w-full px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
            title="ثبت نام"
          />
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
