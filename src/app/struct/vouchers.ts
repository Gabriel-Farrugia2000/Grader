export interface Voucher
{
    id: number;
    shop: string;
    description: string;
    costPoints: number;
    expiration: number;
    companyLogo?: string;
    redeemed?: boolean;
}