import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function CharacterHeader({
  title,
  subtitle,
  imageBase64,
  primary,
  secondary,
  textPrimary,
  currentHp,
  previousHp,
}) {
  const [effectClass, setEffectClass] = useState("");
  const [hpChange, setHpChange] = useState(null); // Almacena la diferencia de HP
  const [isLoaded, setIsLoaded] = useState(false); // Estado para controlar la carga de la imagen

  useEffect(() => {
    if (previousHp !== null && currentHp !== null) {
      const difference = currentHp - previousHp;

      if (difference !== 0) {
        setHpChange(difference);

        if (difference < 0) {
          setEffectClass("shake-effect");
        } else if (difference > 0) {
          setEffectClass("jump-effect");
        }

        // Elimina el efecto después de 1 segundo
        setTimeout(() => {
          setEffectClass("");
        }, 1000);

        setTimeout(() => {
          setHpChange(null); // Oculta el número flotante
        }, 3000);
      }
    }
  }, [currentHp, previousHp]);

  return (
    <div className="w-full lg:w-1/3 relative flex flex-col items-center space-y-6">
      {/* Número flotante que muestra la diferencia de HP */}
      {hpChange !== null && (
        <div
          className={`absolute text-6xl font-pixel font-bold ${
            hpChange > 0 ? "text-green-500" : "text-red-500"
          } transition-opacity duration-500 ease-in-out`}
          style={{
            WebkitTextStroke: "1px black",
            textStroke: "1px black",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          {hpChange > 0 ? `+${hpChange}` : `${hpChange}`}
        </div>
      )}

      <div
        className={`relative rounded-lg shadow-md transition-all duration-1000 overflow-hidden ${effectClass}`}
        style={{
          border: `4px solid ${primary}`,
          boxShadow: `0 0 8px ${primary}, 0 0 12px ${secondary}`,
        }}
      >
        {/* Overlay dinámico */}
        <div
          className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
            hpChange > 0 ? "bg-green-500" : hpChange < 0 ? "bg-red-500" : ""
          }`}
          style={{
            opacity: hpChange !== 0 ? 0.5 : 0,
            mixBlendMode: "overlay",
          }}
        ></div>

        {/* Indicador de carga */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <img
              src="/loading.gif" // Ruta del GIF de carga
              alt="Loading"
              className="w-16 h-16 animate-spin"
            />
          </div>
        )}

        {/* Imagen principal */}
        <img
          src={
            typeof imageBase64 === "string" && imageBase64.startsWith("data:")
              ? imageBase64
              : "https://placehold.co/480x800"
          }
          alt={title}
          className={`w-full h-auto transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)} // Marca como cargada cuando termina de cargar
        />
      </div>

      <div className="text-center">
        <h1
          className="text-4xl font-exo font-bold"
          style={{ color: textPrimary }}
        >
          {title}
        </h1>
        <h2
          className="text-xl font-exo font-semibold"
          style={{ color: secondary }}
        >
          {subtitle}
        </h2>
      </div>
    </div>
  );
}

CharacterHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageBase64: PropTypes.string,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  textPrimary: PropTypes.string.isRequired,
  currentHp: PropTypes.number.isRequired,
  previousHp: PropTypes.number.isRequired,
};
