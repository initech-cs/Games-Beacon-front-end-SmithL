import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "../styles/cart_styles.css";
// import "../styles/cart_responsive.css";

function Cart() {
  let { currentCart, totalPrice } = useSelector((s) => s.user);
  let { loaded } = useSelector((s) => s.app);
  const currentCartList = currentCart.items;

  // const priceList = currentCartList.map((item) => item.price)
  // console.log(priceList)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!loaded || !currentCart) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>This is Cart Page</h1>
      <div className="cart_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container">
                <div className="cart_title">Shopping Cart</div>
                <div className="cart_items">
                  <ul className="cart_list">
                    <li className="cart_item clearfix">
                      <div className="cart_item_image">
                        <img src="images/shopping_cart.jpg" alt="" />
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">MacBook Air 13</div>
                        </div>
                        <div className="cart_item_color cart_info_col">
                          <div className="cart_item_title">Color</div>
                          <div className="cart_item_text">
                            <span style={{ backgroundColor: "#999999" }} />
                            Silver
                          </div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="cart_item_text">1</div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">$2000</div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                          <div className="cart_item_title">Total</div>
                          <div className="cart_item_text">$2000</div>
                        </div>
                      </div>
                    </li>
                    {currentCartList.map((game, index) => {
                      return (
                        <li key={index} className="cart_item clearfix">
                          <div className="cart_item_image">
                            <img src={game.cover} alt="" />
                          </div>
                          <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                            <div className="cart_item_name cart_info_col">
                              <div className="cart_item_title">Name</div>
                              <div className="cart_item_text">{game.name}</div>
                            </div>
                            {/* <div className="cart_item_color cart_info_col">
                              <div className="cart_item_title"></div>
                              <div className="cart_item_text">
                                <span
                                  style={{
                                    backgroundColor: "#999999",
                                  }}
                                />
                                Silver
                              </div>
                            </div> */}
                            {/* <div className="cart_item_quantity cart_info_col">
                              <div className="cart_item_title">Quantity</div>
                              <div className="cart_item_text">1</div>
                            </div> */}
                            <div className="cart_item_price cart_info_col">
                              <div className="cart_item_title">Price</div>
                              <div className="cart_item_text">
                                ${game.price}
                              </div>
                            </div>
                            {/* <div className="cart_item_total cart_info_col">
                              <div className="cart_item_title">Total</div>
                              <div className="cart_item_text">$2000</div>
                            </div> */}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* Order Total */}
                <div className="order_total">
                  <div className="order_total_content text-md-right">
                    <div className="order_total_title">Order Total:</div>
                    <div className="order_total_amount">${totalPrice}</div>
                  </div>
                </div>
                <div className="cart_buttons">
                  <button type="button" className="button cart_button_clear">
                    Add to Cart
                  </button>
                  <button type="button" className="button cart_button_checkout">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
