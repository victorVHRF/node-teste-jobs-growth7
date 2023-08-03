import { Job } from "./job.interface.ts";

function calculateTotalTime(jobs: Job[]): string {
  return jobs.reduce((totalTime, job) => totalTime + job.tempoEstimado, '0')
}

function isValidJobSequence(jobs: Job[]): boolean {
  const totalTime = calculateTotalTime(jobs)

  return totalTime <= '8'
}

function sortJobsByDate(jobs: Job[]): Job[] {
  return jobs.sort((a, b) => a.dataMaximaConclusao.getTime() - b.dataMaximaConclusao.getTime())
}

export function scheduleJobs(jobs: Job[]): Job[][] {
  const sortedJobs = sortJobsByDate(jobs)
  const scheduledJobs: Job[][] = []

  sortedJobs.forEach((job: Job) => {
    let scheduled = false

    scheduledJobs.forEach((sequence) => {
      if (isValidJobSequence([...sequence, job])) {
        sequence.push(job)
        scheduled = true
      }
    })

    if (!scheduled) scheduledJobs.push([job])
  })

  return scheduledJobs
}