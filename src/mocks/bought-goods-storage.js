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

  addGoodToCart(id, price) {
    this.#totalPrice += price;
    this.#cartSize++;

    const cart = this.#cartContent;
    if (typeof cart[id] !== "number") {
      cart[id] = 1;
    } else {
      cart[id]++;
    }

    addToStorage({
      cartContent: cart,
      totalPrice: this.#totalPrice,
      cartSize: this.#cartSize,
    });
  }

  removeGoodFromCart(id, price) {
    this.#totalPrice -= price;
    this.#cartSize--;

    const cart = this.#cartContent;
    if (cart[id] > 1) {
      cart[id]--;
    } else {
      delete cart[id];
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

  incrementGood(id, price) {
    this.#totalPrice += price;
    this.#cartSize++;
    this.#cartContent[id]++;

    addToStorage({
      cartContent: this.#cartContent,
      totalPrice: this.#totalPrice,
      cartSize: this.#cartSize,
    });
  }

  decrementGood(id, price) {
    this.#totalPrice -= price;
    this.#cartSize--;

    addToStorage({
      cartContent: this.#cartContent,
      totalPrice: this.#totalPrice,
      cartSize: this.#cartSize,
    });
  }
}

export default new BoughtGoodsStorage();
