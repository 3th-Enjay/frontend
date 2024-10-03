"use client";
import { useState } from "react";

const DeclarationPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isChecked) {
      if (fullName.trim() === "") {
        alert("Please enter your full name.");
      } else if (date.trim() === "") {
        alert("Please enter the date.");
      } else {
        alert(`Form submitted with name: ${fullName} and date: ${date}`);
      }
    } else {
      alert("Please agree to the declaration.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full h-auto items-center justify-center bg-gray-100">
      <div className=" p-8 w-full max-w-6xl h-full">
        <div className="mb-10">
          <h1 className="text-[58.51px] font-montserrat font-bold text-center text-[#228B22] mb-6">
            Declaration and Agreement
          </h1>
          <p className="text-[20.25px] font-poppins font-normal leading-[33.76px] text-left text-[#52525B] mb-6">
            To complete your registration, please review and agree to the
            following declaration. Your membership will be activated only upon
            your agreement and payment of the annual subscription fee.
          </p>
        </div>
        <div className="mb-10">
          <p className="text-[20.25px] font-poppins font-[500] leading-[33.76px] text-left text-[#52525B] mb-6">
            I confirm that all information provided is true and correct. By
            accepting the membership, I agree to abide by the Constitution of
            the association. I understand that it is my responsibility to notify
            the association of any change in my personal particulars. The
            association will not be responsible for any loss or damage that may
            arise due to incorrect or outdated records.
          </p>
        </div>
        <div className="mb-10">
          <p className="text-[20.25px] font-poppins font-normal leading-[33.76px] text-left text-[#52525B] mb-6">
            I also understand that my membership will only be activated upon the
            payment of the yearly membership fee.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-3 mt-6">
            <input
              type="checkbox"
              id="declaration"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label
              htmlFor="declaration"
              className="text-[#333333] text-[22.6px] font-robotto font-normal"
            >
              I agree to the above terms and conditions
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-8">
            <div className="flex flex-col space-y-2 mt-8">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="py-[20.34px] px-[35.03px] border-[#CBE1D7] border-[1.13px] rounded-[11.3px] text-[22.6px] font-roboto text-[#787878] text-left focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter the Date"
                className="py-[20.34px] px-[35.03px] border-[#CBE1D7] border-[1.13px] rounded-[11.3px] text-[22.6px] font-roboto text-[#787878] text-left focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className={`w-full p-[20px] bg-[#228B22] text-[26px] font-normal text-white rounded-[10.67px] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
                isChecked && fullName.trim() !== "" && date.trim() !== ""
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
              disabled={
                !isChecked || fullName.trim() === "" || date.trim() === ""
              }
            >
              Agree and submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeclarationPage;
