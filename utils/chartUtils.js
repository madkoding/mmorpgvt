import Chart from "chart.js/auto";

export function initializeChart(canvas, { resistencia, carisma, creatividad, actitud, primary, textPrimary }) {
  return new Chart(canvas, {
    type: "radar",
    data: {
      labels: ["Resistencia", "Carisma", "Creatividad", "Actitud"],
      datasets: [
        {
          label: "Atributos",
          data: [resistencia, carisma, creatividad, actitud],
          backgroundColor: `${primary.replace("1)", "0.2)")}`,
          borderColor: primary,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0,
          ticks: {
            color: textPrimary,
            backdropColor: "transparent",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.2)",
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          pointLabels: {
            color: textPrimary,
          },
        },
      },
    },
  });
}
