interface Checkout {
  products: any;
  cart: any;
  promotion: any;
  totalItems: number;
  totalPrice: number;

  /**
   * Scans a product adding it to the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  scan(code: string): this;

  /**
   * Apply the discount value for each item product.
   */
  applyDiscount(code: string, qty: number, total: number, price: number): any;

  /**
   * Scans the code and return the discount
   */
  getDiscount(code: string): number;

  /**
   * Returns the value of all cart products with the discounts applied.
   */
  total(price: number): number;
}

class Checkout implements Checkout {
  constructor(cart: any) {
    this.cart = cart;
  }

  scan(code: string): any {
    const newItem = this.cart.products
      .filter((x: any) => x.code === code)
      .map((item: any) => ({
        price: item.price,
        qty: item.quantity.qty,
        code: item.code,
        total: item.price.amount * item.quantity.qty,
        discount: this.applyDiscount(
          item.code,
          item.quantity.qty,
          item.price.amount * item.quantity.qty,
          item.price.amount
        ),
      }));

    this.cart.items.push(...newItem);
    const totalItems = this.cart.items
      .map((p: any) => p.qty)
      .reduce((a: number, b: number) => a + b, 0);

    const totalPrice = this.cart.items
      .map((p: any) => p.total)
      .reduce((a: number, b: number) => a + b, 0);

    this.cart.totalItems = totalItems;
    this.cart.totalPrice = totalPrice;
    return this;
  }

  applyDiscount(code: string, qty: number, total: number, price: number) {
    let discount = 0;

    if (code === 'TSHIRT' && qty >= 3) {
      return (discount = (total * 5) / 100);
    } else if (code === 'MUG' && qty >= 2) {
      const discount = Math.round(qty / 2) * price - total;
      return discount;
    }

    return discount;
  }

  getDiscount(code: string) {
    let discount = 0;
    this.cart.items.find((x: any) => {
      if (x.code === code) {
        discount = x.discount;
        return Math.abs(discount);
      }
    });
    return Math.abs(discount);
  }

  total(price: number) {
    const totalDiscounts = this.getDiscount('MUG') + this.getDiscount('TSHIRT');
    const total = price - totalDiscounts;
    return total;
  }
}

export default Checkout;
