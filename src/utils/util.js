export function transformPrice(price) {
   let currentPrice = (price / 100).toFixed(2);
   currentPrice = String(currentPrice);
   currentPrice = currentPrice.replace('.', ',');
   return currentPrice;
}