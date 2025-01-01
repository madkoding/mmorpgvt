import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { useRouter } from "next/router";
import { firebaseApp } from "../../firebase/firebaseConfig";
import classNames from "classnames";
import styles from "../styles/login.module.css";

export default function LoginPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga general
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const db = getDatabase(firebaseApp);

  /**
   * Verifica el estado del usuario y redirige según corresponda.
   * @param {Object} user - El usuario autenticado.
   */
  const handleUserRedirect = async (user) => {
    if (!user) return;

    try {
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const { character } = snapshot.val();
        if (character) {
          router.push(`/character/${character}`); // Redirigir al personaje asociado
        } else {
          router.push("/create-character"); // Redirigir si no hay personaje
        }
      } else {
        await set(userRef, { character: "" }); // Crear usuario si no existe
        router.push("/create-character");
      }
    } catch (err) {
      console.error("Error verificando usuario:", err);
      setError("Error verificando tu cuenta. Por favor intenta nuevamente.");
    }
  };

  // Usar `onAuthStateChanged` para detectar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await handleUserRedirect(user); // Redirigir si el usuario está autenticado
      } else {
        setIsLoading(false); // Mostrar el formulario de login si no hay usuario
      }
    });

    return () => unsubscribe(); // Limpiar el listener al desmontar
  }, [auth]);

  const handleGoogleLogin = async () => {
    setError(null); // Limpiar errores previos
    setIsLoading(true); // Activar estado de carga

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      await handleUserRedirect(user); // Reutilizar lógica de redirección
    } catch (err) {
      console.error(err);
      setError("Error durante el login. Por favor intenta nuevamente.");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p>Verificando estado del usuario...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ingresar</h1>
        {error && <p className={styles.error}>{error}</p>}
        <button
          onClick={handleGoogleLogin}
          className={classNames(styles.button, {
            [styles.disabled]: isLoading,
          })}
          disabled={isLoading}
        >
          {isLoading && <span className={styles.loader}></span>}
          {isLoading ? "Procesando..." : "Login con Google"}
        </button>
      </div>
    </div>
  );
}
