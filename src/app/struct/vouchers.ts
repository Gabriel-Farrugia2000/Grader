export interface Voucher
{
    id: number;
    shop: string;
    description: string;
    costPoints: number;
    expiration: number;
    redeemed?: boolean;
}