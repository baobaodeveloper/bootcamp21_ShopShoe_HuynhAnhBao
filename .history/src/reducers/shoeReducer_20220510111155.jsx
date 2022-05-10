const initialState = {
  shoeList: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ],
  shoeDetail: [],
  shopCard: [],
};

const shoeReducer = (state = initialState, action) => {
  function increa(arr) {}
  switch (action.type) {
    case "SHOW_DETAIL": {
      state.shoeDetail = action.item;
      state.shoeDetail.qty = 1;
      return { ...state };
    }
    case "ADD_TO_CARD": {
      const arrAddShopCard = [...state.shopCard];
      const index = arrAddShopCard.findIndex(
        (item) => item.id === action.item.id
      );
      console.log(index);
      if (index === -1) {
        arrAddShopCard.push(action.item);
      } else if (arrAddShopCard.length > 0) {
        arrAddShopCard[index].qty += 1;
        arrAddShopCard[index].price += action.item.price;
        state.shopCard = arrAddShopCard;
      }
      return { ...state };
    }
    case "ADD_SHOPPING_CARD": {
      const arrNewShopCart = [...state.shopCard];
      const index = arrNewShopCart.findIndex(
        (item) => item.id === action.item.id
      );
      if (index === -1) {
        arrNewShopCart.push(action.item);
      } else if (arrNewShopCart.length > 0) {
        let itemChange = { ...arrNewShopCart[index] };
        itemChange.price += state.shoeDetail.price;
        itemChange.qty += state.shoeDetail.qty;
        arrNewShopCart[index] = itemChange;
      }
      state.shopCard = arrNewShopCart;

      return { ...state };
    }

    case "QTY_INCREA": {
      const arrIncrea = { ...state.shoeDetail };
      arrIncrea.price = arrIncrea.price / arrIncrea.qty + arrIncrea.price;
      arrIncrea.qty += 1;
      state.shoeDetail = arrIncrea;

      return { ...state };
    }
    case "QTY_DECREA": {
      const arrDecrea = { ...state.shoeDetail };
      arrDecrea.price =
        arrDecrea.qty > 1
          ? arrDecrea.price - arrDecrea.price / arrDecrea.qty
          : arrDecrea.price;
      arrDecrea.qty > 1 ? (arrDecrea.qty -= 1) : (arrDecrea.qty = 1);

      state.shoeDetail = arrDecrea;
      return { ...state };
    }
    case "QTY_INCREA_SHOP_CARD": {
      const arrIncrea = [...state.shopCard];
      const index = arrIncrea.findIndex((item) => item.id === action.item.id);
      arrIncrea[index].price =
        arrIncrea[index].price / arrIncrea[index].qty + arrIncrea[index].price;
      arrIncrea[index].qty += 1;
      state.shopCard = arrIncrea;

      return { ...state };
    }
    case "DELETE_SHOE": {
      const arrDelete = [...state.shopCard];
      const index = arrDelete.findIndex((item) => item.id === action.item.id);
      arrDelete.splice(index, 1);
      state.shopCard = arrDelete;
      return { ...state };
    }
    case "QTY_DECREA_SHOP_CARD": {
      const arrDecrea = [...state.shopCard];
      const index = arrDecrea.findIndex((item) => item.id === action.item.id);
      arrDecrea[index].price =
        arrDecrea[index].qty > 1
          ? arrDecrea[index].price -
            arrDecrea[index].price / arrDecrea[index].qty
          : arrDecrea[index].price;
      arrDecrea[index].qty > 1
        ? (arrDecrea[index].qty -= 1)
        : (arrDecrea[index].qty = 1);

      state.shopCard = arrDecrea;
      return { ...state };
    }

    default:
      return state;
  }
};
export default shoeReducer;