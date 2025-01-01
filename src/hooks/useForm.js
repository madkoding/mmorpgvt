import { useState } from "react";

/**
 * Custom hook to handle form data and interactions.
 * @param {Object} initialValues - Initial values for the form.
 * @returns {Object} - Form data and handler functions.
 */
export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  /**
   * Handles input changes and updates the form state.
   * @param {Object} e - Event object from the input field.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["primary", "secondary", "text", "background"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        colors: {
          ...prev.colors,
          [name]: value,
        },
      }));
    } else if (
      [
        "twitter",
        "twitch",
        "bluesky",
        "youtube",
        "instagram",
        "facebook",
      ].includes(name)
    ) {
      setFormData((prev) => ({
        ...prev,
        socials: {
          ...prev.socials,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  /**
   * Handles image upload, updates form data, and sets preview if provided.
   * @param {Object} e - Event object from the file input.
   * @param {Function} setImagePreview - Optional function to set the image preview.
   */
  const handleImageUpload = (e, setImagePreview = () => {}) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profile: { imageBase64: reader.result },
        }));
        if (typeof setImagePreview === "function") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return { formData, handleChange, setFormData, handleImageUpload };
};
