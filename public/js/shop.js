class List {
  _items = []

  constructor (CartInstane) {
    let goods = this.fetchGoods()
    goods = goods.map(item => {
      return new GoodItem(item, CartInstane)
    })
    this._items = goods
    this.render()
  }

  fetchGoods () {
    return [
      { name: 'Shirt', price: 150, img: '/img/gb.png' },
      { name: 'Socks', price: 250, img: '/img/gb.png' },
      { name: 'Jacket', price: 750, img: '/img/gb.png' },
    ]
  }

  render () {
    this._items.forEach(Good => {
      Good.render()
    })
  }
}

class GoodItem {
  _name = ''
  _price = 0
  _img = 0
  _CartInstane = null

  constructor ({ name, price, img }, CartInstane) {
    this._name = name
    this._price = price
    this._img = img
    this._CartInstane = CartInstane
  }

  addToCart () {
    this._CartInstane.add(this)
    console.log('Added!', this._name)
  }

  render () {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.innerHTML = `
        Товар: ${this._name} = ${this._price}
        <img src="${this._img}" />
      `
      const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
      btn.render(block)

      placeToRender.appendChild(block)
    }
  }
}

// class Cart {
//   add ()
// }

// class CartItem {

// }

// const CartInstane = new Cart()
new List(null)
