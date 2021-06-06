import { Voucher } from "./vouchers";

export type Level = 'easy' | 'advanced';

export interface Objective
{
    name: string;
    level: Level;

    //optional
    reward?: number | Voucher;
    claimed?: boolean;
}