/**
 * Componente reutilizable para campos de color.
 * @param {Object} props - Propiedades del componente.
 */
export const ColorField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm">{label}:</label>
    <input
      type="color"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-16 p-1 rounded"
    />
  </div>
);
