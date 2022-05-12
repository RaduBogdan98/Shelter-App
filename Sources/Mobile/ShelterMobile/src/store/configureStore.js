import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./reducers/usersReducer";
import servicesReducer from "./reducers/servicesReducer";

const store = configureStore({
    reducer: {
        users: usersReducer,
        services: servicesReducer,
    }
});

export default store;
