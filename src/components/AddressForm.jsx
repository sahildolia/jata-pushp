import React, { useState } from "react";
import Header from "./Header";

const AddressForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    flat: "",
    area: "",
    landmark: "",
    pinCode: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", form);
    // Handle submission logic here (API call, etc.)
  };

  return (
    <>
      <Header className="mb-4"/>
    <div className="min-h-screen bg-gray-100 pt-12 flex items-center justify-center">
      <div className="bg-white shadow-md my-12 rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">Add Delivery Address</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Flat/House No. */}
          <div>
            <label htmlFor="flat" className="block text-sm font-medium text-gray-600">
              Flat/House No./Building/Company/Apartment
            </label>
            <input
              type="text"
              id="flat"
              name="flat"
              value={form.flat}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Area/City/Village */}
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-600">
              Area/City/Village
            </label>
            <input
              type="text"
              id="area"
              name="area"
              value={form.area}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Landmark */}
          <div>
            <label htmlFor="landmark" className="block text-sm font-medium text-gray-600">
              Landmark
            </label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={form.landmark}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Pin Code */}
          <div>
            <label htmlFor="pinCode" className="block text-sm font-medium text-gray-600">
              Pin Code
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={form.pinCode}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Delivery Instructions */}
          <div>
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-600">
              Delivery Instructions (Optional)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={form.instructions}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddressForm;
