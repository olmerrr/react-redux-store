import React from "react";
import GameList from "../game-list";
import ShoppingCartTable from "../shopping-cart-table";
const HomePage = () => {

    return (
        <div>
            <GameList/>
            <ShoppingCartTable/>
        </div>
    );
};
export default HomePage;