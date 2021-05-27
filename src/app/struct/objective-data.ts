import { Objective } from "./objective";
import { VOUCHERS } from "./voucher-data";


export const OBJECTIVES: Objective[] = [
    {
        name: "Get 5 Subjects A Grade",
        level: 'advanced',
        reward: VOUCHERS[1]
    },

    {
        name: "Get 10 Tasks A Grade",
        level: 'advanced',
        reward: VOUCHERS[4]
    },

    {
        name: "Study for 1 hour",
        level: 'easy',
        reward: 15
    },

    {
        name: "Study for 2 hours",
        level: 'easy',
        reward: 30
    },

    {
        name: "Study for 3 hours",
        level: 'easy',
        reward: 50
    },

];
