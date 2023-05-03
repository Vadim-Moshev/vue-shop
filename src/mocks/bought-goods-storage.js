function addToStorage(obj) {
  localStorage.setItem("shopCart", JSON.stringify(obj));
}

class BoughtGoodsStorage {
  #totalPrice = 0;
  #cartSize = 0;
  #cartContent = {};

  constructor() {
    const boughtGoods = localStorage.getItem("shopCart");
    if (boughtGoods === null) {
      this.#totalPrice = 0;
      this.#cartSize = 0;

      addToStorage({
        cartContent: {},
        totalPrice: 0,
        cartSize: 0,
      });
      return;
    }

    const obj = JSON.parse(boughtGoods);
    this.#cartContent = obj.cartContent;
    this.#cartSize = obj.cartSize;
    this.#totalPrice = obj.totalPrice;
  }

  get cartContent() {
    return this.#cartContent;
  }

  get cartSize() {
    return this.#cartSize;
  }

  get totalPrice() {
    return this.#totalPrice;
  }

  changeCartContent(id, price, count, flag) {
    const sign = flag ? 1 : -1;

    this.#totalPrice += sign * count * price;
    this.#cartSize += sign * count;

    const cart = this.#cartContent;
    if (flag) {
      if (cart[id] === undefined) {
        cart[id] = count;
      } else {
        cart[id] += count;
      }
    } else {
      if (cart[id] > count) {
        cart[id] -= count;
      } else {
        delete cart[id];
      }
    }

    addToStorage({
      cartContent: cart,
      totalPrice: this.#totalPrice,
      cartSize: this.#cartSize,
    });
  }

  isBought(id) {
    return Object.keys(this.#cartContent).includes(id);
  }
}

export default new BoughtGoodsStorage();
