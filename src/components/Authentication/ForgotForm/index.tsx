import { useFormik } from "formik";
import toast from "react-hot-toast";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import { forgotSchema } from "../../../schemas/forgot.schema";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../../hooks/mutations/forgot-password.mutation";
import { ForgotUserPassworErrorResponse } from "../../../services/requests/forgot-password";
import { isAxiosError } from "axios";

const ForgotForm = () => {
  const forgotPasswordMutation = useForgotPasswordMutation();
  let navigate = useNavigate();
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
      email: "",
    },
    validationSchema: forgotSchema,
    onSubmit: (values) => {
      forgotPasswordMutation.mutate(values, {
        onSuccess(payload) {
          toast.success("ایمیل بازیابی برای شما ارسال شد");
          resetForm();
          navigate("/forgot/email-received");
        },
        onError(error) {
          let errorMsg: string = "ارسال ایمیل با خطا مواجه شد";
          if (isAxiosError<ForgotUserPassworErrorResponse>(error)) {
            const data = error.response?.data;
            errorMsg = data?.email
              ? data.email[0]
              : data?.detail
              ? data.detail[0]
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
        <h3 className=" text-body-xl font-black text-center">
          فراموشی رمز عبور
        </h3>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            label={{ text: "ایمیل خود را وارد کنید", for: "email" }}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`ring-2 ring-gray-primary w-[592px] ${
              errors.email && touched.email ? "ring-red-primary" : ""
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-red-primary text-xs italic self-start -mt-s">
              {errors.email}
            </p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full px-3 py-3 p-s gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
            title="دریافت ایمیل بازیابی رمز عبور"
          />
        </Form>
      </div>
    </div>
  );
};

export default ForgotForm;
