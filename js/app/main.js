/**
 * Punto de entrada de la aplicación. Solo orquesta e invoca submódulos;
 * no contiene lógica de dominio ni de UI, solo wiring.
 */

import { studyPlan } from '../domain/studyPlan.js';
import * as state from '../state/state.js';
import * as phaseSelector from '../ui/phaseSelector.js';
import * as daySelector from '../ui/daySelector.js';
import * as taskList from '../ui/taskList.js';
import * as charts from '../ui/charts.js';

// Referencias DOM (vista principal)
const refs = {
    phaseSelectorContainer: document.getElementById('phase-selector'),
    phaseTitle: document.getElementById('phase-title'),
    phaseDesc: document.getElementById('phase-desc'),
    phaseInfo: document.getElementById('phase-info'),
    daySelectorContainer: document.getElementById('day-selector'),
    taskListEl: document.getElementById('task-list'),
    dayTitle: document.getElementById('current-day-title'),
    dayFocus: document.getElementById('current-day-focus'),
    dailyTip: document.getElementById('daily-tip'),
    progressText: document.getElementById('progress-text'),
    taskContainer: document.getElementById('task-container'),
    lineChartCanvas: document.getElementById('lineChart')
};

function renderPhaseInfo(phaseKey) {
    const phase = studyPlan[phaseKey];
    if (!phase || !refs.phaseTitle || !refs.phaseDesc) return;
    refs.phaseTitle.textContent = phase.title;
    refs.phaseDesc.textContent = phase.description;
    refs.phaseInfo?.classList.remove('fade-in');
    void refs.phaseInfo?.offsetWidth;
    refs.phaseInfo?.classList.add('fade-in');
}

function renderDaySelectorForPhase(phaseKey) {
    const daysData = studyPlan[phaseKey]?.days;
    daySelector.render({
        container: refs.daySelectorContainer,
        daysData
    });
}

function renderTaskList() {
    const phaseKey = state.getCurrentPhase();
    const dayKey = state.getCurrentDay();
    const dayData = studyPlan[phaseKey]?.days?.[dayKey];
    taskList.render({
        taskListEl: refs.taskListEl,
        dayTitleEl: refs.dayTitle,
        dayFocusEl: refs.dayFocus,
        dailyTipEl: refs.dailyTip,
        progressEl: refs.progressText,
        taskContainerEl: refs.taskContainer,
        dayData,
        studyPlan,
        onProgressChange: () => taskList.updateProgressDisplay(refs.progressText, studyPlan)
    });
    daySelector.setActiveDay(refs.daySelectorContainer, dayKey);
}

function getDefaultDayKey() {
    const today = new Date().getDay() - 1;
    return (today >= 0 && today <= 6) ? String(today) : '0';
}

function init() {
    state.setListeners({
        onPhaseChange(phaseKey) {
            phaseSelector.setActivePhase(refs.phaseSelectorContainer, phaseKey);
            renderPhaseInfo(phaseKey);
            renderDaySelectorForPhase(phaseKey);
            state.setDay(getDefaultDayKey());
        },
        onDayChange(dayKey) {
            renderTaskList();
        },
        onTasksChange() {
            taskList.updateProgressDisplay(refs.progressText, studyPlan);
        }
    });

    phaseSelector.init({
        container: refs.phaseSelectorContainer,
        studyPlan,
        onSelect() {
            // Estado ya actualizado; listeners ya dispararon onPhaseChange
        }
    });

    renderPhaseInfo(state.getCurrentPhase());
    renderDaySelectorForPhase(state.getCurrentPhase());
    state.setDay(getDefaultDayKey());

    charts.initLineChart(refs.lineChartCanvas);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
