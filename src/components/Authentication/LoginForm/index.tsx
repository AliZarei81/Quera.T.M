import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import { loginSchema } from "../../../schemas/login.schema";
import { useLoginMutation } from "../../../hooks/mutations/login-user.mutation";
import { UserLoginErrorReponse } from "../../../services/requests/login-user";
import { useContext } from "react";
import { AppContext } from "../../../context/userStore/store";
import { AuthenticateUser } from "../../../context/userStore/user/user.action";

const LoginForm = () => {
  const { dispatch } = useContext(AppContext);
  const loginMutation = useLoginMutation();
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
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginMutation.mutate(values, {
        onSuccess(payload) {
          toast.success("شما با موفقيت وارد شديد");
          resetForm();
          dispatch(AuthenticateUser(payload));
          navigate("/workspace");
        },
        onError(error) {
          let errorMsg: string = "وارد شدن شما با خطا روبه رو شد";
          if (isAxiosError<UserLoginErrorReponse>(error)) {
            const data = error.response?.data;
            errorMsg = data?.detail ? data.detail : errorMsg;
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
            className={`ring-2 ring-gray-primary ${
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
          <div className="self-start text-body-xs font-extrabold   text-brand-primary">
            <Link to="forgot">رمز عبور را فراموش کرده‌ای؟</Link>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full px-3 py-3 p-s gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
            title="ورود"
          />
          <div className=" text-body-xs  font-extrabold   flex items-center justify-center gap-[5px]">
            <p>ثبت نام نکرده ای؟</p>
            <Link className="text-brand-primary" to="register">
              ثبت نام
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
