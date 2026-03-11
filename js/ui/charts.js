/**
 * Submódulo UI: gráficos (Chart.js). Solo se invoca desde la vista principal.
 * Depende de que Chart.js esté cargado en la página (script en index).
 */

/**
 * Inicializa el gráfico de líneas "Mapa de Fases".
 * @param {HTMLCanvasElement} canvas - #lineChart
 * @returns {Chart|undefined} Instancia de Chart o undefined si Canvas/Chart no disponible
 */
export function initLineChart(canvas) {
    if (!canvas || typeof window.Chart === 'undefined') return;

    const ctx = canvas.getContext('2d');
    return new window.Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sem 1', 'Sem 4', 'Sem 8', 'Sem 12', 'Sem 16', 'Sem 20', 'Sem 24'],
            datasets: [{
                label: 'Adquisición de Fluidez y Complejidad',
                data: [10, 25, 45, 60, 75, 90, 100],
                borderColor: '#0d9488',
                backgroundColor: 'rgba(13, 148, 136, 0.1)',
                borderWidth: 3,
                tension: 0.3,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: function (context) {
                    const index = context.dataIndex;
                    if (index <= 1) return '#9ca3af';
                    if (index <= 3) return '#f59e0b';
                    return '#14b8a6';
                },
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Nivel de Exigencia (%)' },
                    grid: { color: '#f5f5f4' }
                },
                x: { grid: { display: false } }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let phaseText = "";
                            if (context.dataIndex <= 1) phaseText = " (Fase 1)";
                            else if (context.dataIndex <= 3) phaseText = " (Fase 2)";
                            else phaseText = " (Fase 3)";
                            return `Exigencia: ${context.parsed.y}%` + phaseText;
                        }
                    }
                }
            }
        }
    });
}
