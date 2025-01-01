import PropTypes from "prop-types";
import CharacterHeader from "./CharacterHeader";
import CharacterStats from "./CharacterStats";
import CharacterDescription from "./CharacterDescription";
import { useState, useEffect } from "react";

export default function CharacterPage({ data, router, isAuthenticated, user }) {
  const {
    title,
    subtitle,
    profile,
    points,
    stats,
    colors,
    description,
    theme,
    firstAppearance,
    affiliation,
  } = data;

  const [currentHp] = points.hp.split("/").map(Number);
  const [previousHp, setPreviousHp] = useState(currentHp);

  useEffect(() => {
    if (currentHp !== previousHp) {
      setPreviousHp(currentHp);
    }
  }, [currentHp]);

  return (
    <div
      className="w-screen h-screen p-6 lg:p-10 flex flex-wrap lg:flex-nowrap"
      style={{
        backgroundColor: colors.background,
        color: colors.textPrimary,
      }}
    >
      <CharacterHeader
        title={title}
        subtitle={subtitle}
        imageBase64={profile.imageBase64}
        primary={colors.primary}
        secondary={colors.secondary}
        textPrimary={colors.text}
        currentHp={currentHp}
        previousHp={previousHp}
      />
      <div className="w-full lg:w-2/3 p-6 flex flex-col justify-center space-y-6">
        <CharacterStats
          points={points}
          stats={stats}
          colors={colors}
          router={router}
          user={user}
          isAuthenticated={isAuthenticated}
        />
        <CharacterDescription
          description={description}
          theme={theme}
          firstAppearance={firstAppearance}
          affiliation={affiliation}
          colors={colors}
        />
      </div>
    </div>
  );
}

CharacterPage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    imageBase64: PropTypes.string,
    points: PropTypes.shape({
      hp: PropTypes.string.isRequired,
      mp: PropTypes.string.isRequired,
    }).isRequired,
    stats: PropTypes.shape({
      resistencia: PropTypes.number,
      carisma: PropTypes.number,
      creatividad: PropTypes.number,
      actitud: PropTypes.number,
    }).isRequired,
    colors: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      background: PropTypes.string,
      sectionBackground: PropTypes.string,
      textPrimary: PropTypes.string,
      textSecondary: PropTypes.string,
    }).isRequired,
    description: PropTypes.string.isRequired,
    theme: PropTypes.string,
    firstAppearance: PropTypes.string,
    affiliation: PropTypes.string,
  }).isRequired,
};
