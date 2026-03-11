/**
 * Submódulo UI: lista de tareas del día y progreso. Solo se invoca desde la vista principal.
 */

import * as state from '../state/state.js';

/**
 * @param {Object} options
 * @param {HTMLElement} options.taskListEl - #task-list
 * @param {HTMLElement} options.dayTitleEl - #current-day-title
 * @param {HTMLElement} options.dayFocusEl - #current-day-focus
 * @param {HTMLElement} options.dailyTipEl - #daily-tip
 * @param {HTMLElement} options.progressEl - #progress-text
 * @param {HTMLElement} options.taskContainerEl - #task-container (para animación)
 * @param {Object} options.dayData - { name, focus, tasks, tip }
 * @param {Object} [options.studyPlan] - Para calcular progreso (opcional)
 * @param { () => void } [options.onProgressChange]
 */
export function render(options) {
    const {
        taskListEl,
        dayTitleEl,
        dayFocusEl,
        dailyTipEl,
        progressEl,
        taskContainerEl,
        dayData,
        studyPlan,
        onProgressChange
    } = options;

    if (!dayData || !taskListEl) return;

    if (dayTitleEl) dayTitleEl.innerText = dayData.name;
    if (dayFocusEl) dayFocusEl.innerText = `[${dayData.focus}]`;
    if (dailyTipEl) dailyTipEl.innerText = dayData.tip;

    // Animación
    if (taskContainerEl) {
        taskContainerEl.classList.remove('fade-in');
        void taskContainerEl.offsetWidth;
        taskContainerEl.classList.add('fade-in');
    }

    taskListEl.innerHTML = '';
    dayData.tasks.forEach(task => {
        const li = document.createElement('li');
        const isChecked = state.isTaskCompleted(task.id);
        li.className = 'flex items-start bg-white p-3 md:p-4 rounded-lg border border-neutral-200 shadow-sm transition-all hover:border-brand-200';
        li.innerHTML = `
            <div class="flex-shrink-0 mt-0.5">
                <input type="checkbox" id="${task.id}" class="w-5 h-5 text-brand-600 border-neutral-300 rounded focus:ring-brand-500 cursor-pointer transition-colors" ${isChecked ? 'checked' : ''}>
            </div>
            <label for="${task.id}" class="ml-3 text-sm md:text-base text-neutral-700 cursor-pointer flex-grow transition-all ${isChecked ? 'line-through text-neutral-400' : ''}">
                ${task.text}
            </label>
        `;
        const checkbox = li.querySelector('input');
        checkbox.addEventListener('change', () => {
            state.toggleTask(task.id);
            const label = li.querySelector('label');
            if (state.isTaskCompleted(task.id)) {
                label.classList.add('line-through', 'text-neutral-400');
            } else {
                label.classList.remove('line-through', 'text-neutral-400');
            }
            onProgressChange?.();
        });
        taskListEl.appendChild(li);
    });

    updateProgressDisplay(progressEl, studyPlan);
}

/**
 * Actualiza solo el texto de progreso (p. ej. tras marcar tarea).
 * @param {HTMLElement} progressEl - #progress-text
 * @param {Object} studyPlan
 */
export function updateProgressDisplay(progressEl, studyPlan) {
    if (!progressEl) return;
    const total = state.getTotalTasksInPhase(studyPlan);
    const completed = state.getCompletedCount();
    const percentage = total ? Math.round((completed / total) * 100) : 0;
    progressEl.innerText = `${percentage}%`;
    progressEl.classList.toggle('text-green-500', percentage === 100);
    progressEl.classList.toggle('text-brand-600', percentage !== 100);
}
