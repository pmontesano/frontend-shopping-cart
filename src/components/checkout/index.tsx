interface Checkout {
  products: any;
  cart: any;
  promotion: any;

  /**
   * Scans a product adding it to the current cart.
   * @param code The product identifier
   * @returns itself to allow function chaining
   */
  scan(code: string): this;
  /**
   * Returns the value of all cart products with the discounts applied.
   */
  total(price: number): number;
}

class Checkout implements Checkout {
  constructor(products: any, cart: any) {
    this.products = products;
    this.cart = cart;
  }

  scan(code: string): any {
    const newItem = this.products
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

    this.cart.push(...newItem);
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
    this.cart.find((x: any) => {
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
