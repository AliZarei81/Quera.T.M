import { useFormik } from "formik";
import { HttpStatusCode, isAxiosError } from "axios";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import User from "../../../components/Common/User";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../../context/store";

const ProfileInfoForm = () => {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    console.log("state", state);
  }, []);
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
      firtName: "",
      lastName: "",
      phoneNumber: "",
    },
    // validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      // try {
      //   const response = await apiClients.post<UserRegisterResponse>(
      //     "/accounts/",
      //     values
      //   );
      //   actions.resetForm();
      //   navigate("/");
      // } catch (error) {
      //   if (isAxiosError<UserRegisterErrorResponse>(error)) {
      //     if (error.response?.status === HttpStatusCode.BadRequest) {
      //       const { username, email, password } = error.response.data;
      //       setErrors({
      //         username: username?.length ? username[0] : "",
      //         email: email?.length ? email[0] : "",
      //         password: password?.length ? password[0] : "",
      //       });
      //     }
      //   }
      // }
    },
  });

  return (
    <div className="flex flex-col items-start justify-center w-[640px] gap-[32px] p-[24px]  [background-color:#ffff]">
      <h3 className="text-[32px] font-black">اطلاعات فردی</h3>
      <Form onSubmit={handleSubmit}>
        <div className="flex gap-s w-[592px]">
          <User
            hasProfilePicture={false}
            isOwner={false}
            className="bg-yellow-secondary"
            userName="Nilofar Mojodi"
            userNameShow={false}
          />
          <div className="flex flex-col gap-xs">
            <div className="border-brand-primary border-solid border-2 rounded-md p-xs">
              <Button
                title="ویرایش تصویر پروفایل"
                disabled={false}
                type="button"
                className="text-brand-primary"
              />
            </div>
            <p className="text-[12px] text-[#8A8989]">
              این تصویر برای عموم قابل نمایش است.
            </p>
          </div>
        </div>
        <Input
          type="text"
          value={values.firtName}
          id="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "نام", for: "firstName" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="text"
          value={values.lastName}
          id="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "نام خانوادگی", for: "lastName" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="text"
          value={values.phoneNumber}
          id="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "شماره موبایل", for: "phoneNumber" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-3 py-3 mt-l p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
          title="ثبت تغییرات"
        />
      </Form>
    </div>
  );
};

export default ProfileInfoForm;
