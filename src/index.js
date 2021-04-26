import configureStore from "./store/configureStore";
import * as actions from "./store/api";
import { loadBugs, addBug } from "./store/bugs";

const store = configureStore();

store.dispatch(addBug({ description: "a" }));

// setTimeout(() => store.dispatch(loadBugs()), 2000);
