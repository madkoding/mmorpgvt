import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import { useCharacter } from "../hooks/useCharacter";
import {
  TextField,
  ColorField,
  TextAreaField,
  ImageUploadField,
} from "../components/fields";
import { useForm } from "../hooks/useForm";

/**
 * Página de edición de personaje. Permite editar los detalles de un personaje vinculado al usuario.
 * @returns {JSX.Element} Componente de la página de edición de personaje.
 */
export default function EditCharacterPage() {
  const { user, authLoading } = useAuth(); // Hook para la autenticación
  const router = useRouter();

  const [characterId, setCharacterId] = useState(null);
  const {
    characterData,
    loading: characterLoading,
    error,
    updateCharacter,
    getCharacterFromUser,
  } = useCharacter(characterId);

  const { formData, handleChange, setFormData, handleImageUpload } = useForm({
    name: "",
    title: "",
    subtitle: "",
    firstAppearance: "",
    theme: "",
    affiliation: "",
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      background: "#1f2937",
      text: "#FFFFFF",
    },
    description: "",
    socials: {
      twitter: "",
      twitch: "",
      bluesky: "",
      youtube: "",
      instagram: "",
      facebook: "",
    },
    profile: {
      imageBase64: "",
    },
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Validar autenticación y obtener el characterId
  useEffect(() => {
    if (authLoading) return; // Esperar a que la autenticación termine

    if (!user) {
      router.push("/login"); // Redirigir si el usuario no está autenticado
      return;
    }

    const fetchCharacterId = async () => {
      try {
        const characterIdFromUser = await getCharacterFromUser(user.uid);
        if (characterIdFromUser) {
          setCharacterId(characterIdFromUser);
        } else {
          router.push("/create-character"); // Redirigir si no tiene un personaje asociado
        }
      } catch (err) {
        console.error("Error fetching character ID:", err);
        router.push("/create-character");
      }
    };

    fetchCharacterId();
  }, [user, authLoading, getCharacterFromUser, router]);

  // Cargar los datos del personaje en el formulario
  useEffect(() => {
    if (characterData) {
      setFormData(characterData);
      setImagePreview(characterData.profile?.imageBase64 || null);
    }
  }, [characterData, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!characterId) {
      alert("No se encontró el ID del personaje.");
      return;
    }

    try {
      await updateCharacter(formData);
      router.push(`/character/${characterId}`);
    } catch (err) {
      console.error("Error al actualizar el personaje:", err);
    }
  };

  if (authLoading || characterLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p>Cargando datos del personaje...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error.message || "Error al cargar el personaje."}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Editar Personaje</h1>

        <ImageUploadField
          imagePreview={imagePreview}
          onChange={(e) => handleImageUpload(e, setImagePreview)}
        />

        <TextField
          label="Nombre"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
        />
        <TextField
          label="Leyenda"
          name="subtitle"
          value={formData.subtitle || ""}
          onChange={handleChange}
        />
        <TextField
          label="Fecha Primera Aparición"
          name="firstAppearance"
          value={formData.firstAppearance || ""}
          onChange={handleChange}
        />
        <TextField
          label="Tema"
          name="theme"
          value={formData.theme || ""}
          onChange={handleChange}
        />
        <TextField
          label="Afiliación"
          name="affiliation"
          value={formData.affiliation || ""}
          onChange={handleChange}
        />

        {Object.entries(formData.colors).map(([key, value]) => (
          <ColorField
            key={key}
            label={`Color ${key}`}
            name={key}
            value={value}
            onChange={handleChange}
          />
        ))}

        <TextAreaField
          label="Descripción"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
        />

        {Object.entries(formData.socials).map(([key, value]) => (
          <TextField
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            name={key}
            value={value || ""}
            onChange={handleChange}
            placeholder={`https://${key}.com/usuario`}
          />
        ))}

        <div className="text-center">
          <button
            onClick={() => router.back()}
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Volver
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}
