'use strict'

import Button from './button'

import './styles.css'

class List {
  _items = []
  preloading = false
  _page = 1
  _CartInstane = null

  constructor (CartInstane) {
    this._CartInstane = CartInstane
    this.initShowMoreButton()
    this.fetchGoods()
  }

  initShowMoreButton () {
    const showMoreBtn = document.querySelector('#showmore')
    if (showMoreBtn) {
      showMoreBtn.addEventListener('click', () => {
        this._page++
        this.fetchGoods()
      })
    }
  }

  fetchGoods () {
    this.preloading = true
    const url = `/database/items${this._page}.json`;
    return fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.preloading = false
        const goods = data.data.map(item => {
          return new GoodItem(item, this._CartInstane)
        })
        this._items = [...this._items, ...goods]
        return this._items
      })
      .then(this.render.bind(this))
      .catch((err) => {
        alert(`No more pages, ${err}`)
      });
  }

  render () {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      placeToRender.innerHTML = ''
      this._items.forEach(Good => {
        Good.render(placeToRender)
      })
    }
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

  render (placeToRender) {
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

class Cart {
  _items = [/* CartItem */]

  add (GoodItemInstance) {
    const FoundItem = this._items.find((CartItem) => {
      return CartItem._name === GoodItemInstance._name
    })

    if (FoundItem) {
      FoundItem.counter++
    } else {
      this._items.push(new CartItem({
        name: GoodItemInstance._name,
        price: GoodItemInstance._price,
      }))
    }

    this.render()
  }

  render () {
    const placeToRender = document.querySelector('.cart-list')
    if (placeToRender) {
      placeToRender.innerHTML = ''
    }

    this._items.forEach(CartItemInstance => {
      CartItemInstance.render(placeToRender)
    })
  }
}

class CartItem {
  _name = ''
  _price = 0
  counter = 1

  constructor ({ name, price }) {
    this._name = name
    this._price = price
  }

  render (placeToRender) {
    const block = document.createElement('div')
    block.innerHTML = `Товар: ${this._name} : ${this._price} x ${this.counter}`
    placeToRender.appendChild(block)
  }
}

const CartInstane = new Cart()
new List(CartInstane)
