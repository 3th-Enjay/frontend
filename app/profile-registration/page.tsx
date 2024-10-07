"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa";

const ProfileRegistration: React.FC = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAdress, setStreetAddress] = useState("");
  const [processingCapacity, setProcessingCapacity] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [exportCapacity, setExportCapacity] = useState("");
  const [clientBase, setClientBase] = useState("");
  const [companyRegistrationId, setCompanyRegistrationId] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [state, setState] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handlePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPicture(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const profileData = {
      organizationName,
      firstName,
      lastName,
      state,
      city,
      streetAdress,
      processingCapacity,
      farmSize,
      exportCapacity,
      clientBase,
      companyRegistrationId,
      status,
      picture,
      isChecked,
      selectedCategories,
    };
    console.log(profileData);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col gap-20 w-full lg:max-w-5xl px-6 py-20">
        {/* Profile Header */}
        <div className="flex flex-col gap-5">
          <h1 className="font-montserrat text-[58.51px] font-bold text-center text-[#228B22]">
            Complete Your Profile
          </h1>
          <p className="font-poppins text-[20.25px] font-normal leading-[33.76px] text-center text-[#52525B]">
            Tell us more about yourself to get the most of your experience
          </p>
        </div>

        {/* Profile Form */}
        <div className="flex flex-col gap-10">
          {/* Form 1 */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Name of Organization
            </label>
            <input
              type="text"
              placeholder="Enter your organization name"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
            />
          </div>

          {/* Form 2 */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Name of Applicant
            </label>
            <div className="flex flex-row gap-4 justify-between w-full">
              <div className="flex flex-row justify-between w-1/2">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
                />
              </div>
              <div className="flex flex-row justify-between w-1/2">
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
                />
              </div>
            </div>
          </div>

          {/* Location of Enterprise */}
          {/* State Selection */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Location of enterprise
            </label>
            <div className="flex justify-between gap-4 w-full">
              <div className="relative flex w-1/2">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878] appearance-none"
                >
                  <option value="" disabled>
                    Select your state
                  </option>
                  <option value="State 1">State 1</option>
                  <option value="State 2">State 2</option>
                </select>
                <IoIosArrowDown
                  size={20}
                  className="absolute right-3 top-6  text-gray-500"
                />
              </div>
              {/* City Selection */}
              <div className="relative flex w-1/2">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878] appearance-none"
                >
                  <option value="" disabled>
                    Select your city
                  </option>
                  <option value="City 1">City 1</option>
                  <option value="City 2">City 2</option>
                </select>
                <IoIosArrowDown
                  size={20}
                  className="absolute right-3 top-6 text-gray-500"
                />
              </div>
            </div>
            {/* Street Address */}
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Write your street address"
                  value={streetAdress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
                />
              </div>
            </div>
          </div>

          {/* Processing Capacity */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Processing Capacity (For Processors)
            </label>
            <input
              type="text"
              placeholder="Enter processing capacity in tons"
              value={processingCapacity}
              onChange={(e) => setProcessingCapacity(e.target.value)}
              className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
            />
          </div>

          {/* Farm size */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Farm Size (For Producers)
            </label>
            <input
              type="text"
              placeholder="Enter farm size in hectares"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
            />
          </div>

          {/* Export capacity */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Export Capacity (For Exporters)
            </label>
            <input
              type="text"
              placeholder="Enter export capacity in tons"
              value={exportCapacity}
              onChange={(e) => setExportCapacity(e.target.value)}
              className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
            />
          </div>

          {/* Client base */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Client Base (For Service Providers)
            </label>
            <input
              type="text"
              placeholder="Describe your client base"
              value={clientBase}
              onChange={(e) => setClientBase(e.target.value)}
              className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
            />
          </div>

          {/* Company Registration ID */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Company Registration ID
            </label>
            <input
              type="text"
              placeholder="Enter company registration ID"
              value={companyRegistrationId}
              onChange={(e) => setCompanyRegistrationId(e.target.value)}
              className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
            />
          </div>

          {/* Produce License */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Federal Produce License Status
            </label>

            <div className="relative flex ">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878] appearance-none"
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="status">Completed</option>
                <option value="staus">Not completed</option>
              </select>
              <IoIosArrowDown
                size={20}
                className="absolute right-3 top-6  text-gray-500"
              />
            </div>
          </div>

          {/* Annual subscription rate */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Annual Subscription Rate
            </label>

            <div className="relative flex ">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878] appearance-none"
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="status">Completed</option>
                <option value="staus">Not completed</option>
              </select>
              <IoIosArrowDown
                size={20}
                className="absolute right-3 top-6  text-gray-500"
              />
            </div>
          </div>

          {/* Category of Enterprise */}
          <div className="flex flex-col gap-10">
            <label className="font-poppins text-[20px] font-medium text-[#090914]">
              Category of Enterprise
            </label>
            <div className="flex flex-col gap-4">
              {/* Processor */}
              <div className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Processor")}
                  onChange={() => handleCategoryChange("Processor")}
                  className="w-5 h-5 text-green-600 border-gray-600 rounded focus:ring-green-500"
                />
                <label className="font-poppins text-[20px] text-[#333333] font-[400]">
                  Processor
                </label>
              </div>
              {/* Processor */}
              <div className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Processors")}
                  onChange={() => handleCategoryChange("Processors")}
                  className="w-5 h-5 text-green-600 border-gray-600 rounded focus:ring-green-500"
                />
                <label className="font-poppins text-[20px] text-[#333333] font-[400]">
                  Processors
                </label>
              </div>
              {/* Exporter */}
              <div className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Exporter")}
                  onChange={() => handleCategoryChange("Exporter")}
                  className="w-5 h-5 text-green-600 border-gray-600 rounded focus:ring-green-500"
                />
                <label className="font-poppins text-[20px] text-[#333333] font-[400]">
                  Exporter
                </label>
              </div>
              {/* Service Provider */}
              <div className="py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Service Provider")}
                  onChange={() => handleCategoryChange("Service Provider")}
                  className="w-5 h-5 text-green-600 border-gray-600 rounded focus:ring-green-500"
                />
                <label className="font-poppins text-[20px] text-[#333333] font-[400]">
                  Service Provider
                </label>
              </div>
              {/* Other Category */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter other category"
                  value={otherCategory}
                  onChange={(e) => setOtherCategory(e.target.value)}
                  className="w-full py-[18px] px-[31px] border-[#CBE1D7] border-[1px] rounded-[10px] font-roboto text-[20px] text-[#787878]"
                />
              </div>
            </div>
          </div>

          {/* Upload Profile Picture */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="border-dashed border-4 border-[#4D4D4D] rounded-full w-[200px] h-[200px] flex items-center justify-center">
              {picture ? (
                <img
                  src={URL.createObjectURL(picture)}
                  alt="Profile Preview"
                  className="rounded-full w-full h-full object-cover"
                />
              ) : (
                <FaRegImage size={60} />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureUpload}
              className="hidden"
              id="upload"
            />
            <label
              htmlFor="upload"
              className="cursor-pointer text-[#000000] text-center font-poppins text-[24px] font-[400]"
            >
              UPLOAD IMAGE
            </label>
          </div>

          {/* Next Button */}
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-4 w-full p-4 text-[24px] text-center bg-[#228B22] text-white rounded-[10px] hover:bg-green-700"
          >
            Next <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileRegistration;
