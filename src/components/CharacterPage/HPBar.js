import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * Componente que representa la barra de HP.
 */
export default function HPBar({ hp }) {
  const [imageEffect, setImageEffect] = useState(""); // Efecto visual
  const [previousHp, setPreviousHp] = useState(null);

  const [currentHp, totalHp] = hp.split("/").map(Number);
  const hpPercentage =
    totalHp > 0 ? Math.min((currentHp / totalHp) * 100, 100) : 0;

  useEffect(() => {
    if (previousHp !== null) {
      if (previousHp > currentHp) {
        setImageEffect("bg-red-500 shake-effect");
      } else if (previousHp < currentHp) {
        setImageEffect("bg-green-500 jump-effect");
      }
      setTimeout(() => setImageEffect(""), 1000); // Limpia el efecto después de 1s
    }
    setPreviousHp(currentHp);
  }, [currentHp]);

  return (
    <div>
      <p>
        <strong>HP:</strong> {hp}
      </p>
      <div className="w-full bg-gray-700 rounded-lg">
        <div
          className={`text-xs font-medium text-center p-1 leading-none rounded-lg ${imageEffect}`}
          style={{
            width: `${hpPercentage}%`,
            backgroundColor: "rgba(220, 38, 38, 1)",
          }}
        >
          {Math.round(hpPercentage)}%
        </div>
      </div>
    </div>
  );
}

HPBar.propTypes = {
  hp: PropTypes.string.isRequired,
};
