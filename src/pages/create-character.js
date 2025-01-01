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
import { getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from "../../firebase/firebaseConfig";

/**
 * Página para crear un nuevo personaje.
 * @returns {JSX.Element} Componente de la página de creación de personaje.
 */
export default function CreateCharacter() {
  const { user, authLoading } = useAuth(); // Hook para la autenticación
  const router = useRouter();

  // Accede a las funciones del hook useCharacter
  const { doesCharacterExist } = useCharacter();
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
  const [isLoading, setIsLoading] = useState(true); // Cargando validación inicial
  const [error, setError] = useState(null);
  const [nameError, setNameError] = useState(null); // Error específico del campo nombre

  /**
   * Valida la autenticación del usuario y redirige si ya tiene un personaje.
   */
  useEffect(() => {
    const validateUser = async () => {
      if (authLoading) return; // Esperar a que la autenticación termine

      if (!user) {
        router.push("/login"); // Redirigir si el usuario no está autenticado
        return;
      }

      setIsLoading(false); // Mostrar el formulario si todo está en orden
    };

    validateUser();
  }, [user, authLoading, router]);

  /**
   * Maneja el envío del formulario y crea un nuevo personaje en Firebase.
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const db = getDatabase(firebaseApp);
      const characterId = formData.name.toLowerCase().replace(/\s+/g, "-");

      // Validación final antes de enviar
      const characterExists = await doesCharacterExist(characterId);
      if (characterExists) {
        setNameError("Este nombre ya está en uso. Por favor elige otro.");
        setIsLoading(false);
        return;
      }

      // Asociar el personaje al usuario
      const userRef = ref(db, `users/${user.uid}`);
      await set(userRef, { character: characterId });

      // Crear el personaje en `characters`
      const characterRef = ref(db, `characters/${characterId}`);
      await set(characterRef, {
        ...formData,
        points: {
          hp: "100/100",
          mp: "50/50",
        },
        stats: {
          AGI: 10,
          VIT: 10,
          DEX: 10,
          STR: 10,
          LUK: 10,
          INT: 10,
        },
      });

      // Redirigir al personaje creado
      router.push(`/character/${characterId}`);
    } catch (err) {
      console.error("Error al crear el personaje:", err);
      setError("Error al crear el personaje. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p>Verificando estado del usuario...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Crear Personaje</h1>

        <ImageUploadField
          imagePreview={imagePreview}
          onChange={(e) => handleImageUpload(e, setImagePreview)}
        />

        <TextField
          label="Usuario"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
          error={nameError} // Mostrar error en tiempo real
        />
        <TextField
          label="Nombre"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          required
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
            disabled={isLoading}
            className={`py-2 px-4 rounded ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Creando..." : "Crear Personaje"}
          </button>
        </div>
      </form>
    </div>
  );
}
