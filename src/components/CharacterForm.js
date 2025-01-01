// components/CharacterForm.js
import React from "react";

const CharacterForm = ({
  formData,
  handleChange,
  handleImageUpload,
  handleSubmit,
  imagePreview,
  loading,
  error,
  title,
}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        {error && <p className="text-red-500">{error}</p>}

        {/* Previsualización de la imagen */}
        <div className="flex flex-col items-center">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-600 rounded-full mb-4 flex items-center justify-center">
              Sin imagen
            </div>
          )}
          <label className="block">
            <span className="text-sm">Subir imagen</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, formData.setImagePreview)}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </label>
        </div>

        {/* Campos del formulario */}
        <div className="space-y-4">
          {/* Repetir para cada campo */}
          <div>
            <label className="block text-sm">Usuario:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 rounded"
            />
          </div>
          {/* Agregar otros campos de manera similar */}
        </div>

        {/* Botones */}
        <div className="text-center">
          <button
            onClick={() => router.back()}
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Volver
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`py-2 px-4 rounded ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Guardando..." : "Guardar Cambios"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CharacterForm;
