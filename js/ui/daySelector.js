/**
 * Submódulo UI: selector de días. Solo se invoca desde la vista principal.
 */

import * as state from '../state/state.js';

/**
 * @param {Object} options
 * @param {HTMLElement} options.container - Contenedor (#day-selector)
 * @param {Object} options.daysData - studyPlan[phase].days
 * @param { (dayKey: string) => void } [options.onSelect]
 */
export function render(options) {
    const { container, daysData, onSelect } = options;
    if (!container || !daysData) return;

    container.innerHTML = '';
    const currentDay = state.getCurrentDay();

    Object.keys(daysData).forEach(key => {
        const btn = document.createElement('button');
        btn.className = `px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${key === currentDay ? 'bg-brand-500 text-white border-brand-500' : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-100'}`;
        btn.innerText = daysData[key].name;
        btn.id = `btn-day-${key}`;
        btn.onclick = () => {
            state.setDay(key);
            onSelect?.(key);
        };
        container.appendChild(btn);
    });
}

/**
 * Marca el día activo en el selector.
 * @param {HTMLElement} container
 * @param {string} activeDayKey
 */
export function setActiveDay(container, activeDayKey) {
    if (!container) return;
    container.querySelectorAll('button').forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white', 'border-brand-500');
        b.classList.add('bg-white', 'text-neutral-600', 'border-neutral-300');
    });
    const target = container.querySelector(`#btn-day-${activeDayKey}`);
    if (target) {
        target.classList.remove('bg-white', 'text-neutral-600', 'border-neutral-300');
        target.classList.add('bg-brand-500', 'text-white', 'border-brand-500');
    }
}
