"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleJobs = void 0;
function calculateTotalTime(jobs) {
    return jobs.reduce((totalTime, job) => totalTime + job.tempoEstimado, 0);
}
function isValidJobSequence(jobs) {
    const totalTime = calculateTotalTime(jobs);
    return totalTime <= 8;
}
function sortJobsByDate(jobs) {
    return jobs.sort((a, b) => a.dataMaximaConclusao.getTime() - b.dataMaximaConclusao.getTime());
}
function scheduleJobs(jobs) {
    const sortedJobs = sortJobsByDate(jobs);
    const scheduledJobs = [];
    sortedJobs.forEach((job) => {
        let scheduled = false;
        scheduledJobs.forEach((sequence) => {
            if (isValidJobSequence([...sequence, job])) {
                sequence.push(job);
                scheduled = true;
            }
        });
        if (!scheduled)
            scheduledJobs.push([job]);
    });
    return scheduledJobs;
}
exports.scheduleJobs = scheduleJobs;
