const cron = require("node-cron");
// we can import the other class here and use it.

module.exports = class CronJob {
    // we can create N number of task.
    tasks;
    // private tasks_1: any;

    // private constructor
    constructor() {}

    // Object initialize
    static newInstance() {
        return new CronJob();
    }

    scheduleCronJobs = async () => {
        try {
            this.tasks = await cron.schedule("0 * * * * *", () => {
                console.log(
                    new Date(),
                    " CronJob is running Node process id--> ",
                    process.pid
                );
                console.log(
                    new Date(),
                    " this platform is " + process.platform
                );
            });
            // this.tasks_1 = await cron.schedule("0 * * * * *", () => {
            //     console.log("corn is running");
            // });
            this.tasks.start();
            // this.tasks_1.start();
        } catch (ex) {
            console.log(
                "app:CronJob:scheduleCronJobs",
                `CornJob failed to start ${ex}`
            );
        }
    };

    stopCron = async () => {
        try {
            this.tasks.stop();
            // this.tasks_1.stop();
        } catch (ex) {
            console.log("app:CronJob:stopCron", `CornJob failed to stop ${ex}`);
        }
    };
};
