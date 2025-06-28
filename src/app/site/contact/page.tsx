"use client";
import React, { useState } from "react";
import "./styles.css";
import Buttons from "@/components/constants/Buttons";
import CommonLoader from "@/components/constants/CommonLoader";

const countryRegex: { [key: string]: RegExp } = {
  India: /^[6-9]\d{9}$/,
  USA: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  UK: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
  Canada: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  Australia: /^(\+61|0)4\d{8}$/,
  Germany: /^(\+49|0)[1-9]\d{9}$/,
  France: /^(\+33|0)[67]\d{8}$/,
  Brazil: /^\(?([1-9]{2})\)?\s?9?[6-9]\d{3}\-?\d{4}$/,
  Japan: /^(\+81|0)\d{1,4}[ -]?\d{1,4}[ -]?\d{4}$/,
  China: /^(\+?86)?1[3-9]\d{9}$/,
  Russia: /^(\+7|8)?9\d{9}$/,
  SouthKorea: /^(\+82|0)?1[016789]\d{7,8}$/,
  UAE: /^(\+971|0)?5[024568]\d{7}$/,
  Singapore: /^\+65[689]\d{7}$/,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    country: "India",
    email: "",
    reason: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    number: false,
    email: false,
    reason: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    email: "",
    reason: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };
const validateField = (name: string, value: string) => {
  let message = "";

  // Check if the field is empty
  if (!value.trim()) {
    message = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
  } else {
    // Email format check
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        message = "Invalid email format.";
      }
    }

    // Number format check
    if (name === "number") {
      const regex = countryRegex[formData.country];
      if (!regex.test(value)) {
        message = `Invalid number format for ${formData.country}.`;
      }
    }
  }

  setErrors((prev) => ({ ...prev, [name]: message }));
};


  // const validateField = (name: string, value: string) => {
  //   let message = "";

  //   if (name === "name" && !value.trim()) {
  //     message = "Name is required.";
  //   }

  //   if (name === "number") {
  //     if (!value.trim()) {
  //       message = "Contact number is required.";
  //     } else if (!countryRegex[formData.country].test(value)) {
  //       message = `Invalid number for ${formData.country}`;
  //     }
  //   }

  //   if (name === "email") {
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!value.trim()) {
  //       message = "Email is required.";
  //     } else if (!emailRegex.test(value)) {
  //       message = "Invalid email address.";
  //     }
  //   }

  //   if (name === "reason" && !value.trim()) {
  //     message = "Reason is required.";
  //   }

  //   setErrors((prev) => ({ ...prev, [name]: message }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const fields = ["name", "number", "email", "reason"];
  //   let allValid = true;

  //   fields.forEach((field) => {
  //     const value = formData[field as keyof typeof formData];
  //     validateField(field, value);
  //     if (!value.trim() || errors[field as keyof typeof errors]) {
  //       allValid = false;
  //     }
  //   });

  //   if (allValid) {
  //     alert("Form submitted successfully!");
  //     setFormData({ name: "", number: "", country: "India", email: "", reason: "" });
  //     setTouched({ name: false, number: false, email: false, reason: false });
  //     setErrors({ name: "", number: "", email: "", reason: "" });
  //   }
  // };
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const fields = ["name", "number", "email", "reason"];
  let newErrors: typeof errors = { name: "", number: "", email: "", reason: "" };
  let allValid = true;

  // Validate all fields
  fields.forEach((field) => {
    const value = formData[field as keyof typeof formData];

    if (!value.trim()) {
      newErrors[field as keyof typeof errors] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      allValid = false;
    } else {
      if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors.email = "Invalid email format.";
          allValid = false;
        }
      }

      if (field === "number") {
        const regex = countryRegex[formData.country];
        if (!regex.test(value)) {
          newErrors.number = `Invalid number format for ${formData.country}.`;
          allValid = false;
        }
      }
    }
  });

  setErrors(newErrors);
  setTouched({ name: true, number: true, email: true, reason: true });

  if (!allValid) return;

  try {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Form submitted successfully!");
      setFormData({ name: "", number: "", country: "India", email: "", reason: "" });
      setTouched({ name: false, number: false, email: false, reason: false });
      setErrors({ name: "", number: "", email: "", reason: "" });
    } else {
      alert("❌ Failed: " + (result.error || "Unexpected error occurred"));
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("❌ Network/server error.");
  } finally {
    setLoading(false);
  }
};



//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const fields = ["name", "number", "email", "reason"];
//   let allValid = true;

//   fields.forEach((field) => {
//     const value = formData[field as keyof typeof formData];
//     validateField(field, value);
//     if (!value.trim() || errors[field as keyof typeof errors]) {
//       allValid = false;
//     }
//   });

//   if (!allValid) return;

//   try {
//       setLoading(true)

//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       alert("✅ Form submitted successfully!");
//       setFormData({
//         name: "",
//         number: "",
//         country: "India",
//         email: "",
//         reason: "",
//       });
//       setTouched({ name: false, number: false, email: false, reason: false });
//       setErrors({ name: "", number: "", email: "", reason: "" });

//       console.log("Admin Mail:", result.adminMail);
//       console.log("User Mail:", result.userMail);
//     } else {
//       alert("❌ Failed: " + result.error || "Unexpected error occurred");
//     }
//   } catch (error) {
//     console.error("Submission error:", error);
//     alert("❌ Network/server error.");
//   } finally {
//       setLoading(false)
//   }
// };

  return (
    <section className="contact-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              {Object.keys(countryRegex).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Contact Number *</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={`Enter number (${formData.country})`}
            />
            {touched.number && errors.number && (
              <p className="error">{errors.number}</p>
            )}
          </div>

          <div className="form-group">
            <label>Reason *</label>
            <textarea
              name="reason"
              rows={3}
              value={formData.reason}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Why are you contacting us?"
            />
            {touched.reason && errors.reason && (
              <p className="error">{errors.reason}</p>
            )}
          </div>
          <Buttons
            buttonName="Submit"
            type="submit"
          />

          {/* <button type="submit">Submit</button> */}
        </form>
       {loading &&
        <CommonLoader/>
       }
    </section>
  );
};

export default Contact;
