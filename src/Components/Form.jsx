import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const Form = ({ onClose, currentVedio, onSave }) => {
  const [formData, setFormData] = useState({
    videoTitle: "",
    views: "",
    date: "",
    link: "",
    thumbnailMaxres: "",
    thumbnailFallback: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.videoTitle.trim())
      newErrors.videoTitle = "Video title is required";
    if (!formData.views || formData.views <= 0)
      newErrors.views = "Views must be greater than 0";
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.link.trim()) newErrors.link = "Video link is required";
    else if (!/^https?:\/\/.+/.test(formData.link))
      newErrors.link = "Enter a valid URL";
    if (!formData.thumbnailMaxres.trim())
      newErrors.thumbnailMaxres = "Maxres thumbnail URL is required";
    if (!formData.thumbnailFallback.trim())
      newErrors.thumbnailFallback = "Fallback thumbnail URL is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    setError(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };
  useEffect(() => {
    if (currentVedio) {
      setFormData({
        videoTitle: currentVedio.videoTitle || "",
        views: currentVedio.views || "",
        date: currentVedio.date || "",
        link: currentVedio.link || "",
        thumbnailMaxres: currentVedio.thumbnail?.maxres || "",
        thumbnailFallback: currentVedio.thumbnail?.fallback || "",
        description: currentVedio.description || "",
      });
    }
  }, [currentVedio]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const payload = {
      videoTitle: formData.videoTitle,
      views: formData.views,
      date: formData.date,
      link: formData.link,
      thumbnail: {
        maxres: formData.thumbnailMaxres,
        fallback: formData.thumbnailFallback,
      },
      description: formData.description,
    };
    if (currentVedio) {
      try {
        const response = await axios.put(
          `https://mimic-server-api.vercel.app/videos/${currentVedio.id}`,
          payload,
          { headers: { "Content-Type": "application/json" } },
        );
        console.log("API Response:", response.data);
        onSave(response.data);
        alert("Video updated successfully!");
        onClose();
      } catch (error) {
        console.error("Error updating form:", error);
        alert("Failed to update. Check console.");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const response = await axios.post(
          "https://mimic-server-api.vercel.app/videos",
          payload,
          { headers: { "Content-Type": "application/json" } },
        );
        console.log("API Response:", response.data);
        alert("Video submitted successfully!");
        setFormData({
        videoTitle: "",
        views:"",
        date:"",
        link:"",
        thumbnailMaxres:"",
        thumbnailFallback:"",
        description:"",
      });
        onClose();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit. Check console.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 ">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
      >
        <IoClose />
      </button>
      {/* Video Title */}
      <div className="grid grid-cols-2 gap-10">
        <div className="mb-3">
          <label htmlFor="videoTitle" className="block mb-1 font-semibold">
            Video Title
          </label>
          <input
            type="text"
            id="videoTitle"
            name="videoTitle"
            value={formData.videoTitle}
            onChange={handleChange}
            placeholder="Enter video title"
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
          {error.videoTitle && (
            <p className="text-red-500 text-sm mt-1">{error.videoTitle}</p>
          )}
        </div>

        {/* Views */}
        <div className="mb-3">
          <label htmlFor="views" className="block mb-1 font-semibold">
            Views
          </label>
          <input
            type="number"
            id="views"
            name="views"
            value={formData.views}
            onChange={handleChange}
            placeholder="Enter number of views"
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
          {error.views && (
            <p className="text-red-500 text-sm mt-1">{error.views}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {/* Date */}
        <div className="mb-3">
          <label htmlFor="date" className="block mb-1 font-semibold">
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Enter date"
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
          {error.date && (
            <p className="text-red-500 text-sm mt-1">{error.date}</p>
          )}
        </div>

        {/* Link */}
        <div className="mb-3">
          <label htmlFor="link" className="block mb-1 font-semibold">
            Video Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Enter video URL"
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
          {error.link && (
            <p className="text-red-500 text-sm mt-1">{error.link}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {/* Thumbnails */}
        <div className="mb-3">
          <label htmlFor="thumbnailMaxres" className="block mb-1 font-semibold">
            Thumbnail (Maxres)
          </label>
          <input
            type="url"
            id="thumbnailMaxres"
            name="thumbnailMaxres"
            value={formData.thumbnailMaxres}
            onChange={handleChange}
            placeholder="Enter maxres URL"
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
          {error.thumbnailMaxres && (
            <p className="text-red-500 text-sm mt-1">{error.thumbnailMaxres}</p>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor="thumbnailFallback"
            className="block mb-1 font-semibold"
          >
            Thumbnail (Fallback)
          </label>
          <input
            type="url"
            id="thumbnailFallback"
            name="thumbnailFallback"
            value={formData.thumbnailFallback}
            onChange={handleChange}
            placeholder="Enter fallback URL"
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
          {error.thumbnailFallback && (
            <p className="text-red-500 text-sm mt-1">
              {error.thumbnailFallback}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="description" className="block mb-1 font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          rows={6}
          className="w-full px-3 py-2 border rounded shadow-sm"
        ></textarea>
        {error.description && (
          <p className="text-red-500 text-sm mt-1">{error.description}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full cursor-pointer"
        disabled={loading}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
