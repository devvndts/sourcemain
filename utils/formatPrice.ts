export const formatPrice = (amount: number) =>{
    return new Intl.NumberFormat(
        'en-EN',{
            style:'currency',
            currency:'USD'
        }).format(amount);
} 