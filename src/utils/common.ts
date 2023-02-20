export function formatNumber(val: number, symbol = ".") {
	return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
}