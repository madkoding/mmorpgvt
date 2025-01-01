// pages/character/[character].js
import { useRouter } from "next/router";
import { useCharacter } from "../../hooks/useCharacter";
import CharacterPage from "../../components/CharacterPage/CharacterPage";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Character() {
  const router = useRouter();
  const { character } = router.query;
  const { user, authLoading } = useAuthContext();
  const { characterData, loading, error } = useCharacter(character);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
          <p className="text-2xl font-semibold animate-pulse">
            Cargando datos del personaje...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error.message}
      </div>
    );
  }

  // Auth data is only passed after authLoading resolves
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CharacterPage
        data={characterData}
        router={router}
        isAuthenticated={!authLoading && user !== null}
      />
    </div>
  );
}
