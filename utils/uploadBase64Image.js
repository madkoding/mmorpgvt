import { getDatabase, ref, set } from "firebase/database";

/**
 * Sube una imagen en Base64 a la base de datos de Firebase.
 * @param {string} characterName - Nombre del personaje asociado con la imagen.
 * @param {string} imageBase64 - Imagen codificada en Base64.
 * @returns {Promise<void>} Promesa que se resuelve cuando la imagen se ha guardado.
 */
export async function uploadBase64Image(characterName, imageBase64) {
  if (!characterName || !imageBase64) {
    throw new Error("Se requiere el nombre del personaje y la imagen en Base64.");
  }

  try {
    const db = getDatabase();
    const imageRef = ref(db, `characters/${characterName}/imageBase64`);
    await set(imageRef, imageBase64);
    console.log(`Imagen subida correctamente para el personaje ${characterName}.`);
  } catch (error) {
    console.error("Error al subir la imagen a Firebase:", error);
    throw error;
  }
}
