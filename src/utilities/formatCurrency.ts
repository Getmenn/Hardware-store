const CURRENCY_FORMATTER: Intl.NumberFormat = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
})

const formatCurrency = (number: number): string => {
    return CURRENCY_FORMATTER.format(number)
}

export {formatCurrency}