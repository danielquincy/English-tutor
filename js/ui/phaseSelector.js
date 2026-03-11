/**
 * Submódulo UI: selector de fases. Solo se invoca desde la vista principal.
 */

import * as state from '../state/state.js';

/**
 * @param {Object} options
 * @param {HTMLElement} options.container - Contenedor (#phase-selector)
 * @param {Object} options.studyPlan - Datos del plan
 * @param { (phaseKey: string) => void } [options.onSelect] - Callback al elegir fase (opcional; state ya se actualiza)
 */
export function init(options) {
    const { container, studyPlan, onSelect } = options;
    if (!container || !studyPlan) return;

    container.innerHTML = '';
    const currentPhase = state.getCurrentPhase();

    Object.keys(studyPlan).forEach(key => {
        const btn = document.createElement('button');
        btn.className = `flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${key === currentPhase ? 'bg-white shadow-sm text-brand-700 ring-1 ring-neutral-200/50' : 'text-neutral-500 hover:text-neutral-800'}`;
        btn.innerText = studyPlan[key].title.split(':')[0];
        btn.id = `btn-phase-${key}`;
        btn.onclick = () => {
            state.setPhase(key);
            onSelect?.(key);
        };
        container.appendChild(btn);
    });
}

/**
 * Actualiza el aspecto del selector (qué botón está activo). Llamar tras cambio de fase.
 * @param {HTMLElement} container
 * @param {string} activePhaseKey
 */
export function setActivePhase(container, activePhaseKey) {
    if (!container) return;
    container.querySelectorAll('button').forEach(b => {
        b.className = 'flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all text-neutral-500 hover:text-neutral-800';
    });
    const activeBtn = container.querySelector(`#btn-phase-${activePhaseKey}`);
    if (activeBtn) {
        activeBtn.className = 'flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all bg-white shadow-sm text-brand-700 ring-1 ring-neutral-200/50';
    }
}
