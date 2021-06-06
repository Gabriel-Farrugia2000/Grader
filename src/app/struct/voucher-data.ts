import { Voucher } from "./vouchers";

export const VOUCHERS: Voucher[] = [
    {
        id: 1,
        shop: 'Urban Jungle',
        description: 'Get a 15% off on Shoes',
        costPoints: 100,
        expiration: new Date(2021, 6, 31).getTime(),
        companyLogo: 'assets/images/UJ.png'
        
    },
    
    {
        id: 2,
        shop: 'McDonalds',
        description: 'Buy 1 and get 2 free big mac',
        costPoints: 100,
        expiration: new Date(2021, 6, 31).getTime(),
        companyLogo: 'assets/images/McDonalds.png'
        
    },

    {
        id: 3,
        shop: 'Decathlon',
        description: '20% off on everything',
        costPoints: 200,
        expiration: new Date(2021, 6, 31).getTime(),
        companyLogo: 'assets/images/Decathlon_Logo.png'
        
    },

    {
        id: 4,
        shop: 'Terranova',
        description: '10% off on summer clothes',
        costPoints: 200,
        expiration: new Date(2021, 6, 31).getTime(),
        companyLogo: 'assets/images/terranova.png'
        
    },

    {
        id: 5,
        shop: 'Eurosport',
        description: '20% off from sports section',
        costPoints: 100,
        expiration: new Date(2021, 6, 31).getTime(),
        companyLogo: 'assets/images/Eurosport.jpg'
        
    },
    
];