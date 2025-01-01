import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

/**
 * Convierte un color hexadecimal a rgba con una opacidad específica.
 * @param {string} hexColor - Color en formato hexadecimal (#RRGGBB).
 * @param {number} alpha - Valor de opacidad (entre 0 y 1).
 * @returns {string} Color en formato rgba.
 */
function hexToRgba(hexColor, alpha = 1) {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Componente que representa un gráfico de radar dinámico basado en estadísticas.
 */
export default function CharacterChart({ stats, colors }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destruir instancia previa si existe
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      // Extraer etiquetas y datos dinámicamente desde el objeto stats
      const labels = Object.keys(stats);
      const data = Object.values(stats);

      // Crear nuevo gráfico con colores primarios y secundarios
      chartInstanceRef.current = new Chart(ctx, {
        type: "radar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Atributos",
              data: data,
              backgroundColor: hexToRgba(colors.primary, 0.2), // Relleno con opacidad ajustada
              borderColor: colors.primary, // Color del borde
              pointBackgroundColor: colors.text || "#FFFFFF", // Color de los puntos
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                filter: (legendItem) => legendItem.text !== "Atributos", // Ocultar "Atributos"
                color: colors.primary, // Color de las etiquetas
              },
            },
          },
          scales: {
            r: {
              min: 0,
              angleLines: {
                color: colors.secondary, // Color de las líneas angulares
              },
              grid: {
                color: hexToRgba(colors.primary, 0.2), // Color de la cuadrícula con opacidad
              },
              ticks: {
                color: colors.text, // Color de los valores en los ejes
                backdropColor: "transparent", // Fondo transparente para los valores
              },
              pointLabels: {
                color: colors.text, // Color de las etiquetas de los puntos
              },
            },
          },
        },
      });
    }

    // Limpieza al desmontar el componente
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [stats, colors]);

  return <canvas ref={chartRef} className="w-full max-w-sm"></canvas>;
}

CharacterChart.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired, // Debe ser un color hexadecimal
    secondary: PropTypes.string.isRequired, // Debe ser un color hexadecimal
    text: PropTypes.string.isRequired, // Debe ser un color hexadecimal
  }).isRequired,
};
