import PropTypes from "prop-types";

export default function CharacterDescription({
  description,
  affiliation,
  firstAppearance,
  theme,
  colors,
}) {
  const { sectionBackground, primary, textSecondary } = colors;

  return (
    <div>
      <div
        className="p-6 rounded-lg animate-cardFlip"
        style={{
          backgroundColor: sectionBackground,
          border: `4px solid ${primary}`,
          boxShadow: `0 0 8px ${primary}, 0 0 12px ${primary}`,
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sección Afiliación */}
          <div>
            <h2
              className="text-2xl font-exo font-bold mb-4"
              style={{ color: primary }}
            >
              Afiliación:
            </h2>
            <p className="animate-fadeIn" style={{ color: textSecondary }}>
              {affiliation || "Sin afiliación"}
            </p>
          </div>

          {/* Sección Primera Aparición */}
          <div>
            <h2
              className="text-2xl font-exo font-bold mb-4"
              style={{ color: primary }}
            >
              Aparición:
            </h2>
            <p className="animate-fadeIn" style={{ color: textSecondary }}>
              {firstAppearance || "No definida"}
            </p>
          </div>

          {/* Sección Tema */}
          <div>
            <h2
              className="text-2xl font-exo font-bold mb-4"
              style={{ color: primary }}
            >
              Tema:
            </h2>
            <p className="animate-fadeIn" style={{ color: textSecondary }}>
              {theme || "Sin tema asignado"}
            </p>
          </div>
        </div>
      </div>
      <div
        className="p-6 rounded-lg animate-cardFlip"
        style={{
          backgroundColor: sectionBackground,
          border: `4px solid ${primary}`,
          boxShadow: `0 0 8px ${primary}, 0 0 12px ${primary}`,
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
          {/* Sección Descripción */}
          <div>
            <h2
              className="text-2xl font-exo font-bold mb-4"
              style={{ color: primary }}
            >
              Descripción:
            </h2>
            <p className="animate-fadeIn" style={{ color: textSecondary }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CharacterDescription.propTypes = {
  theme: PropTypes.string,
  firstAppearance: PropTypes.string,
  affiliation: PropTypes.string,
  description: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    sectionBackground: PropTypes.string,
    primary: PropTypes.string,
    textSecondary: PropTypes.string,
  }).isRequired,
};
