import React from "react";
import {GamestoreServiceConsumer} from "../gamestore-service-context";

const withGamestoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <GamestoreServiceConsumer>
                {
                    (gamestoreService) => {
                        return (
                            <Wrapped {...props}
                                     gamestoreService={gamestoreService}/>
                        )
                    }
                }
            </GamestoreServiceConsumer>
        )
    }
};
export { withGamestoreService };