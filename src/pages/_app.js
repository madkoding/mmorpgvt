import "../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="bg-black text-white w-full min-h-screen">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
