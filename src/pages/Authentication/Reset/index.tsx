import { useFormik } from "formik";
import { HttpStatusCode, isAxiosError } from "axios";
import { useSearchParams } from "react-router-dom";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import Header from "../../../components/Authentication/Header";
import { UserResetPasswordRequest } from "../../../types/request/resetpassword.request.dto";
import { resetPasswordSchema } from "../../../schemas/resetpassword.schema";
import apiClients from "../../../services/api-clients";

const ResetPassword: React.FC = () => {
  let [searchParams, setSearchParams] = useSearchParams();
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
      password: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values, actions) => {
      try {
        const requestData: UserResetPasswordRequest = {
          token: searchParams.get("token")!,
          password: values.password,
          password1: values.password,
        };
        const response = await apiClients.patch(
          "/accounts/reset-password/set-password/",
          requestData
        );
        console.log(response);

        actions.resetForm();
      } catch (error) {
        // if (isAxiosError<UserLoginErrorReponse>(error)) {
        //   if (error.response?.status === HttpStatusCode.Unauthorized) {
        //     const { detail } = error.response.data;
        //     setErrors({
        //       detail,
        //     });
        //   }
        // }
      }
    },
  });

  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  [background-color:#ffff] shadow-2xl rounded-b-2xl">
          <h3 className="font-iran-yekan w-[237px] h-[55px] text-[32px] font-black text-center">
            بازیابی رمز عبور
          </h3>

          <Form onSubmit={handleSubmit}>
            <Input
              type="password"
              id="password"
              label={{ text: "رمز عبور جدید را وارد کنید", for: "password" }}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="ring-2 ring-gray-primary w-[592px]"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer justify-center"
              title="تغییر رمز عبور"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
