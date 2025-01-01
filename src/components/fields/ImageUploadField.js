/**
 * Componente reutilizable para subir imágenes.
 * @param {Object} props - Propiedades del componente.
 */
export const ImageUploadField = ({ imagePreview, onChange }) => (
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
        onChange={onChange}
        className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </label>
  </div>
);
