import { Job } from "../job.interface.ts"

const { scheduleJobs } = require("../jobScheduler")
const { mockJobs } = require("../mock/mockJobs")

describe('Job scheduler', () => {
  it('should return an array with scheduled jobs', () => {
    const scheduledJobs = scheduleJobs(mockJobs)

    expect(Array.isArray(scheduledJobs)).toBe(true)
  })

  it('should schedule each job within the 8 hour window', () => {
    const scheduledJobs = scheduleJobs(mockJobs)

    scheduledJobs.forEach((sequence: Job[]) => {
      const totalTime = sequence.reduce((total, job) => total + job.tempoEstimado, 0)

      expect(totalTime).toBeLessThanOrEqual(8)
    })
  })

  it('should respect the maximum completion date for each job', () => {
    const currentDate = new Date().getTime()
    const scheduledJobs = scheduleJobs(mockJobs)

    scheduledJobs.forEach((sequence: Job[]) => {
      let completionDate = currentDate

      sequence.forEach((job: Job) => {
        const jobDurationInMs = job.tempoEstimado * 3600000
        const jobCompletionTime = job.dataMaximaConclusao.getTime() - jobDurationInMs
        completionDate = Math.max(completionDate, jobCompletionTime)

      })

      expect(completionDate).toBeGreaterThanOrEqual(currentDate)
    })
  })

  it('should schedule jobs in ascending order of maximum completion date', () => {
    const scheduledJobs = scheduleJobs(mockJobs)
    let prevDate = scheduledJobs[0][0].dataMaximaConclusao.getTime()

    scheduledJobs.forEach((sequence: Job[]) => {
      const firstJobDate = sequence[0].dataMaximaConclusao.getTime()
      expect(firstJobDate).toBeGreaterThanOrEqual(prevDate)
      prevDate = firstJobDate
    })
  })
})