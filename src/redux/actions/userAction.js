export const loginFacebook = (data) => async (dispatch) => {
  if (data && data.accessToken) {
    console.log(data.accessToken);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/auth/login/facebook?token=${data.accessToken}`
    );
    if (res.ok) {
      const dt = await res.json();
      const user = dt.data;
      const wishlist = dt.wishlist;
      const wishlistRawgId = wishlist.map((e) => e.rawgId);
      const cartList = dt.cart.items;
      const cartPrices = cartList.map((e) => e.price);
      const totalPrice = cartPrices.reduce((a, b) => a + b).toFixed(2);
      console.log(totalPrice);
      console.log("this is fetch user dt", user);
      dispatch({
        type: "LOGIN",
        payload: {
          user: user,
          wishlist: wishlist,
          wishlistId: wishlistRawgId,
          cart: cartList,
          totalCartPrice: totalPrice,
        },
      });
      localStorage.setItem("token", dt.token);
      dispatch({ type: "CLOSE-LOGIN-MODAL" });
      dispatch({ type: "LOADED" });
    } else {
      console.log(res);
    }
  }
};

export const loginGoogle = (data) => async (dispatch) => {
  if (data && data.accessToken) {
    console.log(data.accessToken);
    let token = data.accessToken;
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/auth/login/google?token=${token}`
    );
    if (res.ok) {
      const dt = await res.json();
      const user = dt.data;
      const wishlist = dt.wishlist;
      const wishlistRawgId = wishlist.map((e) => e.rawgId);
      const cartList = dt.cart.items;
      const cartPrices = cartList.map((e) => e.price);
      const totalPrice = cartPrices.reduce((a, b) => a + b).toFixed(2);
      console.log(totalPrice);
      console.log("this is fetch user dt", user);
      dispatch({
        type: "LOGIN",
        payload: {
          user: user,
          wishlist: wishlist,
          wishlistId: wishlistRawgId,
          cart: cartList,
          totalCartPrice: totalPrice,
        },
      });
      localStorage.setItem("token", dt.token);
      dispatch({ type: "CLOSE-LOGIN-MODAL" });
      dispatch({ type: "LOADED" });
    } else {
      console.log(res);
    }
  }
};

export const loginEmail = (email, password, event) => async (dispatch) => {
  event.preventDefault();
  console.log(email, password);
  let loginData = { email: email, password: password };
  console.log(loginData);
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  if (res.ok) {
    const dt = await res.json();
    const user = dt.data;
    const wishlist = dt.wishlist;
    const wishlistRawgId = wishlist.map((e) => e.rawgId);
    const cartList = dt.cart.items;
    const cartPrices = cartList.map((e) => e.price);
    const totalPrice = cartPrices.reduce((a, b) => a + b).toFixed(2);
    console.log(totalPrice);
    console.log("this is fetch user dt", user);
    dispatch({
      type: "LOGIN",
      payload: {
        user: user,
        wishlist: wishlist,
        wishlistId: wishlistRawgId,
        cart: cartList,
        totalCartPrice: totalPrice,
      },
    });
    localStorage.setItem("token", dt.token);
    dispatch({ type: "CLOSE-LOGIN-MODAL" });
    dispatch({ type: "LOADED" });
  } else {
    console.log(res);
  }
};

export const logOut = () => async (dispatch) => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  } else {
    console.log("You are messing with my code somehow");
  }
};

export const fetchUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch({ type: "LOADED" });
    return;
  }
  const findUser = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/user/profile`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (findUser.ok) {
    const dt = await findUser.json();
    const user = dt.data;
    const wishlist = dt.wishlist;
    const wishlistRawgId = wishlist.map((e) => e.rawgId);
    const cartList = dt.cart.items;
    const cartPrices = cartList.map((e) => e.price);
    const totalPrice = cartPrices.reduce((a, b) => a + b).toFixed(2);
    console.log(totalPrice);
    console.log("this is fetch user dt", user);
    dispatch({
      type: "LOGIN",
      payload: {
        user: user,
        wishlist: wishlist,
        wishlistId: wishlistRawgId,
        cart: cartList,
        totalCartPrice: totalPrice,
      },
    });
    dispatch({ type: "LOADED" });
  } else {
    localStorage.removeItem("token");
  }
};
