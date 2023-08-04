"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jobScheduler_js_1 = require("./jobScheduler.js");
const mockJobs_js_1 = require("./mock/mockJobs.js");
const scheduledJobs = (0, jobScheduler_js_1.scheduleJobs)(mockJobs_js_1.mockJobs);
console.log(scheduledJobs);
