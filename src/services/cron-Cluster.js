const redis = require("redis").createClient();
const CronJob = require("cron-cluster")(redis).CronJob;

module.exports = class CronCluster {
    // we can create N number of task.
    tasks;
    // private tasks_1: any;

    // private constructor
    constructor() {}

    // Object initialize
    static newInstance() {
        return new CronCluster();
    }

    scheduleCronCronClusterJobs = async () => {
        try {
            this.tasks = await CronJob("0 * * * * *", () => {
                console.log(
                    new Date(),
                    " CronCluster is running Node process id--> ",
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
                "app:CronCluster:scheduleCronCronClusterJobs",
                `CornJob failed to start ${ex}`
            );
        }
    };

    stopCronClusterJobs = async () => {
        try {
            this.tasks.stop();
            // this.tasks_1.stop();
        } catch (ex) {
            console.log(
                "app:CroCronClusternJob:stopCron",
                `CornJob failed to stop ${ex}`
            );
        }
    };
};
