import { useFormik } from "formik";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import Header from "../../../components/Authentication/Header";
import { resetPasswordSchema } from "../../../schemas/resetpassword.schema";
import apiClients from "../../../services/api-clients";
import { useResetPasswordMutation } from "../../../hooks/mutations/reset-password.mutation";
import { ResetUserPassworRequest } from "../../../services/requests/reset-password";

const ResetForm = () => {
  const resetPasswordMutation = useResetPasswordMutation();
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      const data: ResetUserPassworRequest = {
        password: values.password,
        password1: values.password,
        token: searchParams.get("token")!,
      };
      resetPasswordMutation.mutate(data, {
        onSuccess(payload) {
          toast.success("رمز عبور با موفقیت تغییر کرد");
          resetForm();
          navigate("/");
        },
        onError(error) {
          let errorMsg: string = "تغییر رمز عبور با خطا مواجه شد";
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
            className={`ring-2 ring-gray-primary ${
              errors.password && touched.password ? "ring-red-primary" : ""
            }`}
          />
          {errors.password && touched.password && (
            <p className="text-red-primary text-xs italic self-start -mt-s">
              {errors.password}
            </p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full px-3 py-3 p-s gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
            title="تغییر رمز عبور"
          />
        </Form>
      </div>
    </div>
  );
};

export default ResetForm;
