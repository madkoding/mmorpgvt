import PropTypes from "prop-types";
import HPBar from "./HPBar";
import CharacterChart from "./CharacterChart";
import MPBar from "./MPBar";

export default function CharacterStats({
  points,
  stats,
  colors,
  router,
  isAuthenticated,
}) {
  return (
    <div
      className="flex flex-wrap lg:flex-nowrap p-6 rounded-lg"
      style={{
        backgroundColor: colors.sectionBackground,
        border: `4px solid ${colors.primary}`,
        boxShadow: `0 0 8px ${colors.primary}, 0 0 12px ${colors.secondary}`,
      }}
    >
      <div className="w-full lg:w-1/2 space-y-4 font-exo flex flex-col">
        <h2
          className="font-exo font-bold mb-4"
          style={{ color: colors.primary }}
        >
          LVL: {points.lvl || 1}
        </h2>

        <HPBar hp={points.hp} colors={colors} />
        <MPBar mp={points.mp} colors={colors} />

        {isAuthenticated && (
          <div className="flex space-x-4">
            <button
              onClick={() => {}}
              style={{ backgroundColor: colors.primary }}
              className="text-white font-bold py-2 px-4 rounded flex items-center justify-center opacity-50 cursor-not-allowed"
              disabled={true}
            >
              Inventario
            </button>

            <button
              onClick={() => {}}
              style={{ backgroundColor: colors.primary }}
              className="text-white font-bold py-2 px-4 rounded flex items-center justify-center opacity-50 cursor-not-allowed"
              disabled={true}
            >
              Equipo
            </button>

            <button
              onClick={() => router.push("/edit-character")}
              style={{ backgroundColor: colors.primary }}
              className="text-white font-bold py-2 px-4 rounded flex items-center justify-center"
              disabled={false}
            >
              Ajustes
            </button>
          </div>
        )}
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center h-60">
        <CharacterChart stats={stats} colors={colors} />
      </div>
    </div>
  );
}

CharacterStats.propTypes = {
  points: PropTypes.shape({
    hp: PropTypes.string.isRequired,
    mp: PropTypes.string.isRequired,
  }).isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  colors: PropTypes.shape({
    primary: PropTypes.string,
    textPrimary: PropTypes.string,
    sectionBackground: PropTypes.string,
    secondary: PropTypes.string,
  }).isRequired,
};
