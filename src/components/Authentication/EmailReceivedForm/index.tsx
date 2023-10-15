const EmailRecievedForm = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[700px] gap-[32px] p-[24px]  [background-color:#ffff] shadow-2xl rounded-b-2xl">
        <h3 className=" w-[237px] h-[55px] text-[32px] font-black text-center">
          فراموشی رمز عبور
        </h3>
        <p className=" w-[592px] h-[24px] gap-[32px] text-lg  text-center font-light">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید
        </p>
      </div>
    </div>
  );
};

export default EmailRecievedForm;
