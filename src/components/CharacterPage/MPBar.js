import PropTypes from "prop-types";

/**
 * Componente que representa la barra de PM.
 */
export default function MPBar({ mp }) {
  const [currentMP, totalMP] = mp.split("/").map(Number);
  const mpPercentage =
    totalMP > 0 ? Math.min((currentMP / totalMP) * 100, 100) : 0;

  return (
    <div>
      <p>
        <strong>MP:</strong> {mp}
      </p>
      <div className="w-full bg-gray-700 rounded-lg">
        <div
          className="text-xs font-medium text-center p-1 leading-none rounded-lg"
          style={{
            width: `${mpPercentage}%`,
            backgroundColor: "rgba(59, 130, 246, 1)",
          }}
        >
          {Math.round(mpPercentage)}%
        </div>
      </div>
    </div>
  );
}

MPBar.propTypes = {
  mp: PropTypes.string.isRequired,
};
