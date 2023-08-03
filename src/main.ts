import { scheduleJobs } from "./jobScheduler.js";
import { mockJobs } from "./mock/mockJobs.js";

const scheduledJobs = scheduleJobs(mockJobs)
console.log(scheduledJobs)