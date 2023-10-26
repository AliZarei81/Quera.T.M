import { useFormik } from "formik";
import { isAxiosError } from "axios";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import User from "../../../components/Common/User";
import { profileInfoSchema } from "../../../schemas/profileInfo.schema";
import { createRef, useContext, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../../../context/userStore/store";
import { useUpdateAccountMutation } from "../../../hooks/mutations/update-account.mutation";
import {
  UpdateUserAccountRequest,
  UpdateUserAccountErrorResponse,
} from "../../../services/requests/update-account";
import { UpdateUser } from "../../../context/userStore/user/user.action";

const ProfileInfoForm = () => {
  const updateAccountMutation = useUpdateAccountMutation();
  const { state, dispatch } = useContext(AppContext);
  const fileInputRef = createRef<HTMLInputElement>();
  const handleCustomButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      thumbnail: null,
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: profileInfoSchema,
    onSubmit: (values) => {
      console.log(values);

      if (
        values.firstName ||
        values.lastName ||
        values.phoneNumber ||
        values.thumbnail
      ) {
        const updateAccountData: UpdateUserAccountRequest = {
          id: state.user.user_id,
        };
        if (values.firstName)
          updateAccountData["first_name"] = values.firstName;
        if (values.lastName) updateAccountData["last_name"] = values.lastName;
        if (values.phoneNumber)
          updateAccountData["phone_number"] = values.phoneNumber;
        if (values.thumbnail) updateAccountData["thumbnail"] = values.thumbnail;
        updateAccountMutation.mutate(updateAccountData, {
          onSuccess({
            username,
            email,
            first_name,
            last_name,
            thumbnail,
            phone_number,
            id,
          }) {
            const updateState = {
              access: "",
              refresh: "",
              email,
              first_name,
              last_name,
              thumbnail,
              user_id: id,
              username,
              phone_number,
            };
            toast.success("اطلاعات فردی با موفقیت آپدیت شد");
            resetForm();
            dispatch(UpdateUser(updateState));
          },
          onError(error) {
            let errorMsg: string = "آپدیت اطلاعات فردی با خطا روبه رو شد";
            if (isAxiosError<UpdateUserAccountErrorResponse>(error)) {
              const data = error.response?.data;
              errorMsg = data?.detail ? data.detail : errorMsg;
            }
            toast.error(errorMsg);
            resetForm();
          },
        });
      }
      resetForm();
    },
  });

  return (
    <div className="flex w-1/3 p-m [background-color:#ffff]">
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3 className="text-body-xl font-black self-start">اطلاعات فردی</h3>
        <div className="flex gap-s self-start">
          <User
            hasProfilePicture={state.user.thumbnail ? true : false}
            userProfilePicture={state.user.thumbnail}
            isOwner={false}
            className="#FFF3BF"
            userName={state.user.first_name + " " + state.user.last_name}
            userNameShow={false}
            height={120}
            width={120}
            textSize={40}
            textColor="#FAB005"
          />
          <div className="flex flex-col justify-center gap-s">
            <div className="border-brand-primary border-solid border-2 rounded-md p-xs">
              <div>
                {" "}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  name="thumnail"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.currentTarget.files) {
                      setFieldValue("thumbnail", e.currentTarget.files[0]);
                    }
                  }}
                />
                <Button
                  title={
                    values.thumbnail
                      ? `فایل انتخاب شده : ${values.thumbnail["name"]}`
                      : "ویرایش تصویر پروفایل"
                  }
                  disabled={false}
                  type="button"
                  className="text-brand-primary"
                  onClick={handleCustomButtonClick}
                />
              </div>
            </div>
            <p className="text-[12px] text-[#8A8989]">
              این تصویر برای عموم قابل نمایش است.
            </p>
          </div>
        </div>
        <Input
          type="text"
          value={values.firstName}
          id="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "نام", for: "firstName" }}
          className={`ring-2 ring-gray-primary ${
            errors.firstName && touched.firstName ? "ring-red-primary" : ""
          }`}
        />
        {errors.firstName && touched.firstName && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.firstName}
          </p>
        )}
        <Input
          type="text"
          value={values.lastName}
          id="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "نام خانوادگی", for: "lastName" }}
          className={`ring-2 ring-gray-primary ${
            errors.lastName && touched.lastName ? "ring-red-primary" : ""
          }`}
        />
        {errors.lastName && touched.lastName && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.lastName}
          </p>
        )}
        <Input
          type="text"
          value={values.phoneNumber}
          id="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          label={{ text: "شماره موبایل", for: "phoneNumber" }}
          className={`ring-2 ring-gray-primary ${
            errors.phoneNumber && touched.phoneNumber ? "ring-red-primary" : ""
          }`}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className="text-red-primary text-xs italic self-start -mt-s">
            {errors.phoneNumber}
          </p>
        )}
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

export default ProfileInfoForm;
