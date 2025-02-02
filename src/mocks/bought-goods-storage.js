import goods from "@/mocks/goods.js";

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

  changeGoodAvailability(id, additionFlag) {
    const good = goods.find((good) => good.id === id);
    const { price } = good;

    const cart = this.#cartContent;
    if (additionFlag) {
      this.#totalPrice += price;
      this.#cartSize++;
      cart[id] = 1;
    } else {
      const count = this.#cartContent[id];
      const priceToSubtract = price * count;

      this.#totalPrice -= priceToSubtract;
      this.#cartSize -= count;
      delete cart[id];
    }

    addToStorage({
      cartContent: cart,
      totalPrice: this.#totalPrice,
      cartSize: this.#cartSize,
    });
  }

  changeGoodCount(id, additionFlag) {
    const good = goods.find((good) => good.id === id);
    const { price } = good;
    const sign = additionFlag ? 1 : -1;

    this.#totalPrice += sign * price;
    this.#cartSize += sign;
    this.#cartContent[id] += sign;

    addToStorage({
      cartContent: this.#cartContent,
      totalPrice: this.#totalPrice,
      cartSize: this.#cartSize,
    });
  }

  isBought(id) {
    return Object.keys(this.#cartContent).includes(id);
  }

  clearCartContent() {
    this.#totalPrice = 0;
    this.#cartSize = 0;
    this.#cartContent = {};

    addToStorage({
      cartContent: this.#cartContent,
      totalPrice: this.#totalPrice,
      cartSize: this.#cartSize,
    });
  }
}

export default new BoughtGoodsStorage();
