import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import FoodItem from "../Components/FoodItem/FoodItem";
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [Cartitem, setCartitem] = useState({});

    const addtoCart = (itemid) => {
        if (!Cartitem[itemid]) {
            setCartitem((prev) => ({ ...prev, [itemid]: 1 }))
        }
        else {
            setCartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
    }
    const removefromCart = (itemid) => {
        setCartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }
    const gettotalcartamount = () => {
        let Totalamount = 0;
        for (const item in Cartitem ) {
            if (Cartitem[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                Totalamount += iteminfo.price * Cartitem[item];
            }

        }
        return Totalamount;
    }

    const ContextValue = {
        food_list,
        Cartitem,
        setCartitem,
        addtoCart,
        removefromCart,
        gettotalcartamount

    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}

        </StoreContext.Provider>

    )
}
export default StoreContextProvider;