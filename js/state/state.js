/**
 * Capa Estado: estado de la aplicación (fase/día actual, tareas completadas).
 * Única fuente de verdad; los submódulos UI se suscriben vía callbacks.
 */

let currentPhase = 'phase1';
let currentDay = '0';
const completedTasks = new Set();

/** Callbacks que la vista principal registra para reaccionar a cambios de estado */
const listeners = {
    onPhaseChange: null,
    onDayChange: null,
    onTasksChange: null
};

export function getState() {
    return {
        currentPhase,
        currentDay,
        completedTasks: new Set(completedTasks)
    };
}

export function getCurrentPhase() {
    return currentPhase;
}

export function getCurrentDay() {
    return currentDay;
}

export function isTaskCompleted(taskId) {
    return completedTasks.has(taskId);
}

export function setPhase(phaseKey) {
    if (currentPhase === phaseKey) return;
    currentPhase = phaseKey;
    completedTasks.clear();
    currentDay = '0';
    listeners.onPhaseChange?.(phaseKey);
}

export function setDay(dayKey) {
    if (currentDay === dayKey) return;
    currentDay = dayKey;
    listeners.onDayChange?.(dayKey);
}

export function toggleTask(taskId) {
    if (completedTasks.has(taskId)) {
        completedTasks.delete(taskId);
    } else {
        completedTasks.add(taskId);
    }
    listeners.onTasksChange?.();
}

export function setListeners(callbacks) {
    if (callbacks.onPhaseChange) listeners.onPhaseChange = callbacks.onPhaseChange;
    if (callbacks.onDayChange) listeners.onDayChange = callbacks.onDayChange;
    if (callbacks.onTasksChange) listeners.onTasksChange = callbacks.onTasksChange;
}

export function getCompletedCount() {
    return completedTasks.size;
}

export function getTotalTasksInPhase(studyPlan) {
    const days = studyPlan[currentPhase]?.days ?? {};
    return Object.values(days).reduce((acc, day) => acc + day.tasks.length, 0);
}
