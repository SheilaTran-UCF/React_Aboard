import React from "react";

import imgRight from "../assets/fs0a437k43QXmImKU5d7.png";
import logo from "../assets/logo .png";

const Login = () => {
  console.log(imgRight);
  return (
    <>
      <div className="grid grid-cols-2 gap-2 py-4">
        <div className="col-span-1 flex justify-center">
          <div className="max-w-[30%] ">
            <img src={logo} width="100%" />
            <h5 className="py-4 font-bold text-[20px]">Đăng nhập</h5>
          </div>
        </div>
        <div className="col-span-1 ">
          <img src={imgRight} width="100%" />
        </div>
      </div>
    </>
  );
};

export default Login;
