// import goods from "./goods";

class BoughtGoodsStorage {
  #totalPrice = 0;
  #cartSize = 0;
  #cartContent = {};

  constructor() {
    const boughtGoods = localStorage.getItem("shopCart");
    if (boughtGoods === null) {
      this.#totalPrice = 0;
      this.#cartSize = 0;

      const obj = {
        cartContent: {},
        totalPrice: 0,
        cartSize: 0,
      };

      localStorage.setItem("shopCart", JSON.stringify(obj));
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
}

export default new BoughtGoodsStorage();
