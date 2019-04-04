import { toggle, addToCart } from "../Logic/logic"

const product = {
  id: 1,
  product: "Fillets",
  price: 69.41,
  image: "http://goodtogostore.com/product-package-images/192837494.jpg"
}

describe("Tests Toggle function", () => {
  it("should be a function", () => {
    expect(typeof toggle).toBe("function")
  })

  it("should return a boolean", () => {
    const result = toggle()
    expect(typeof result).toBe("boolean")
  })

  it("should return false if given true", () => {
    const result = toggle(true)
    expect(result).toBe(false)
  })
  it("should return true if given a falsy value", () => {
    const result = toggle("")
    expect(result).toBeTruthy()
  })
})

describe.only("Can add item to cart", () => {
  it("should return an array", () => {
    const result = addToCart([], product)
    expect(result).toBeInstanceOf(Array)
  })

  it("should return an array with length of 1", () => {
    const result = addToCart([], product)
    expect(result).toHaveLength(1)
  })

  it("should add a qty property to the product", () => {
    const result = addToCart([], product)
    expect(result[0]).toHaveProperty("qty")
  })

  it("should increase qty if same product is added", () => {
    const result = addToCart([], product)
    const endCart = addToCart(result, product)
    expect(endCart[0]).toHaveProperty("qty", 2)
  })

  it("should not modify the array passed in", () => {
    const cart = []
    const newCart = addToCart(cart, product)
    expect(cart).toHaveLength(0)
  })

  it("does not modify the product passed in", () => {
    addToCart([], product)
    expect(product).not.toHaveProperty("qty")
  })
})

describe("can remove item", () => {
  // Using a beforeEach set a cart array to have 2 or more items of varrying quality
  // can lower quantity by one if quantity is over 1
  // can remove item from cart if quantity is 1
  // returns a new array
  // does not modify the items from the original cart
  // can handle being given an empty array
  // can handle if the item is not found in the array
})

// This function should take in one product item from a cart and return a string.
// Its a string so that we can always display two decimal points
// It should also display a dolar sign at the beggining
describe("can calculate sub total", () => {
  // can get correct sub total
  // can get a correct total with different input
  // has 2 decimal points at the end
  // does not go past 2 decimal palces
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two deciamals)
  // string starts with a $
  // does not modify passed in object
})

// This function should take in the array of products and return a string
// Its a string so that we can always display two decimal points
// It should also display a dolar sign at the beggining
describe("can calculate Total", () => {
  // can get correct total
  // can get a correct total with different input
  // Have 2 decimal points at the end
  // does not go past 2 decimal palces
  // returns a string(because numbers can't be 1.00 it has to be a string to keep the two deciamals)
  // starts with a $
  // does not modify passed in array
})
