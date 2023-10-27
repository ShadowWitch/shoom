export const formatMoney = (amount: number): string => {
    if (typeof amount !== "number") {
        return "0.00";
    }

    const fixedAmount = amount.toFixed(2);
    const [integerPart, decimalPart] = fixedAmount.split(".");

    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedAmount = `${formattedIntegerPart}.${decimalPart}`;

    return formattedAmount;
}