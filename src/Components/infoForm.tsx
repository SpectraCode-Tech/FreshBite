import React, { useState } from "react"; // Added React import for types
import { useNavigate } from "react-router-dom";

const InfoForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });

  // 2. Handle input changes - Using React.ChangeEvent
  // We use HTMLInputElement because these are standard text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle Form Submission - Using React.FormEvent
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("userContactInfo", JSON.stringify(formData));
    navigate("/order-now");
  };

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-6 flex items-center justify-center">
      {/* ... rest of your JSX remains exactly the same ... */}
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-10 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900">Delivery Info</h2>
          <p className="text-gray-500 text-sm mt-2">
            Where should we send your delicious meal?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">
                First Name
              </label>
              <input
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Tunde"
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-orange-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">
                Last Name
              </label>
              <input
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Bello"
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-orange-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Delivery Address
            </label>
            <input
              required
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              placeholder="123 Street, Victoria Island"
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-orange-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Email
            </label>
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="tunde@email.com"
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-orange-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Phone Number
            </label>
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+234..."
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-orange-500 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl mt-4 hover:bg-orange-600 transition-all active:scale-[0.98] shadow-lg shadow-gray-200"
          >
            Save & Continue
          </button>
        </form>

        <p className="text-center text-gray-400 text-[10px] mt-6 leading-relaxed">
          By continuing, you agree to our terms. We’ll save this info so your
          next order is even faster!
        </p>
      </div>
    </section>
  );
};

export default InfoForm;
