import React from "react";


const Account = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[90vh] ">
      <form className="border-3 border-red-500">
        <div className="wrap">
          <h1 className="text-3xl my-4">Sign In</h1>

          <div>
            <label htmlFor="email" className="block text-[18px] opacity-80">Email address</label>
            <input type="email" id="email" className="block border my-4 w-[300px] p-2  rounded-full bg-gray-100" />
            <input type="button" value="Next"  className="block my-4 w-[300px] p-2  rounded-full bg-blue-600 text-white cursor-pointer uppercase"  />
          </div>
          <div className="forgot flex justify-around items-center underline opacity-70 text-[14px] ">
            <a href="#">Forgot email?</a>
            <a href="#">Forgot your password?</a>
          </div>
          <div className="or flex justify-center items-center space-x-3 my-5">
            <div className="w-[100px] h-[2px] bg-gray-200"></div>
            <span className="uppercase" >or</span>
            <div className="w-[100px] h-[2px] bg-gray-200"></div>
          </div>
          
            <input type="button" value="Create Account"  className="block my-4 w-[300px] p-2  rounded-full bg-transparent border-2 uppercase border-black text-black cursor-pointer hover:bg-black hover:text-white"  />
        </div>
      </form>
    </div>
  );
};

export default Account;
