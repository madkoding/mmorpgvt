/**
 * Componente reutilizable para campos de área de texto.
 * @param {Object} props - Propiedades del componente.
 */
export const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label className="block text-sm">{label}:</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 bg-gray-700 rounded"
    ></textarea>
  </div>
);
