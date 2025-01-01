/**
 * Componente reutilizable para campos de texto.
 * @param {Object} props - Propiedades del componente.
 */
export const TextField = ({
  label,
  name,
  value,
  onChange,
  placeholder = "", // Propiedad opcional para personalizar el placeholder
  required = false,
}) => (
  <div>
    <label className="block text-sm">{label}:</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full p-2 bg-gray-700 rounded"
    />
  </div>
);
