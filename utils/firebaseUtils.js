import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from "../firebase/firebaseConfig";

export async function getCharacterData(characterId) {
  return new Promise((resolve, reject) => {
    const db = getDatabase(firebaseApp);
    const characterRef = ref(db, `characters/${characterId}`);
    onValue(characterRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, reject);
  });
}

export function subscribeToCharacterData(characterId, callback) {
  const db = getDatabase(firebaseApp);
  const characterRef = ref(db, `characters/${characterId}`);
  const unsubscribe = onValue(characterRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });

  // Devuelve una función para cancelar la suscripción
  return unsubscribe;
}