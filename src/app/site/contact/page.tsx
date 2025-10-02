"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaGlobe, FaComment } from "react-icons/fa";
import "./styles.css";
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

    if (!value.trim()) {
      message = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else {
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          message = "Invalid email format.";
        }
      }

      if (name === "number") {
        const regex = countryRegex[formData.country];
        if (!regex.test(value)) {
          message = `Invalid number format for ${formData.country}.`;
        }
      }
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fields = ["name", "number", "email", "reason"];
    const newErrors: typeof errors = { name: "", number: "", email: "", reason: "" };
    let allValid = true;

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "nirajraibxr657@gmail.com",
      link: "mailto:nirajraibxr657@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 74819 55476",
      link: "tel:+917481955476"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mohali, Punjab, India",
      link: null
    }
  ];

  return (
    <section className="contactSection">
      <motion.div 
        className="contactContainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contactHeader" variants={itemVariants}>
          <h1>Get In Touch</h1>
          <p>Ready to work together? Let's discuss your next project!</p>
        </motion.div>

        <div className="contactContent">
          <motion.div className="contactInfo" variants={itemVariants}>
            <h2>Contact Information</h2>
            <div className="infoCards">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="infoCard"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="infoIcon">
                    {info.icon}
                  </div>
                  <div className="infoContent">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} target={info.title === "Email" ? "_blank" : "_self"}>
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="availability"
              variants={itemVariants}
            >
              <h3>Availability</h3>
              <p>Available for freelance projects and full-time opportunities</p>
              <div className="status">
                <div className="statusDot"></div>
                <span>Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contactForm" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <h2>Send Message</h2>

            <div className="formRow">
              <div className="formGroup">
                <label>
                  <FaUser />
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your full name"
                />
                {touched.name && errors.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>

              <div className="formGroup">
                <label>
                  <FaEnvelope />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="your.email@example.com"
                />
                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label>
                  <FaGlobe />
                  Country
                </label>
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

              <div className="formGroup">
                <label>
                  <FaPhone />
                  Contact Number *
                </label>
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
            </div>

            <div className="formGroup">
              <label>
                <FaComment />
                Reason *
              </label>
              <textarea
                name="reason"
                rows={4}
                value={formData.reason}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell me about your project or how I can help you..."
              />
              {touched.reason && errors.reason && (
                <p className="error">{errors.reason}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="submitButton"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 165, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="buttonLoader"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaEnvelope />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {loading && <CommonLoader />}
    </section>
  );
};

export default Contact;