import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, get, set, update } from "firebase/database";
import { firebaseApp } from "../../firebase/firebaseConfig";

/**
 * Hook to manage character data in Firebase.
 * @param {string} characterId - The ID of the character to load.
 * @returns {Object} - The character data and related methods.
 */
export const useCharacter = (characterId) => {
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!characterId) return;

    const db = getDatabase(firebaseApp);
    const characterRef = ref(db, `characters/${characterId}`);

    const unsubscribe = onValue(
      characterRef,
      (snapshot) => {
        const data = snapshot.val();
        setCharacterData(data);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [characterId]);

  /**
   * Updates the character data in Firebase.
   * @param {Object} newData - The new data to update.
   */
  const updateCharacter = async (newData) => {
    try {
      const db = getDatabase(firebaseApp);
      const characterRef = ref(db, `characters/${characterId}`);
      await update(characterRef, newData);
    } catch (err) {
      setError(err);
    }
  };

  /**
   * Creates a new character in Firebase.
   * @param {string} id - The ID of the character.
   * @param {Object} data - The data of the character.
   */
  const createCharacter = async (id, data) => {
    try {
      const db = getDatabase(firebaseApp);
      const characterRef = ref(db, `characters/${id}`);
      await set(characterRef, data);
    } catch (err) {
      console.error("Error creating character:", err);
      setError(err);
    }
  };

  /**
   * Retrieves the character ID associated with a user from Firebase.
   * @param {string} userId - The ID of the user.
   * @returns {Promise<string|null>} - The character ID or null if not found.
   */
  const getCharacterFromUser = async (userId) => {
    try {
      const db = getDatabase(firebaseApp);
      const userRef = ref(db, `users/${userId}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        return data.character || null;
      } else {
        return null;
      }
    } catch (err) {
      setError(err);
      return null;
    }
  };

  /**
   * Verifica si un personaje ya existe en Firebase.
   * @param {string} characterId - El ID del personaje a verificar.
   * @returns {Promise<boolean>} - Retorna true si el personaje existe, false de lo contrario.
   */
  const doesCharacterExist = async (characterId) => {
    try {
      const db = getDatabase(firebaseApp);
      const characterRef = ref(db, `characters/${characterId}`);
      const snapshot = await get(characterRef);
      return snapshot.exists();
    } catch (err) {
      console.error("Error verificando existencia del personaje:", err);
      throw new Error("Error al verificar si el personaje ya existe.");
    }
  };

  return {
    characterData,
    loading,
    error,
    updateCharacter,
    createCharacter,
    getCharacterFromUser,
    doesCharacterExist,
  };
};
