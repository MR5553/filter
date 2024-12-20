export const formateCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "inr", maximumFractionDigits: 0 }).format(amount);
}