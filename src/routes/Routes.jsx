import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "./home/Home";
import Shifokorlar from "./shifokorlar/Shifokorlar";
import Bolimlar from "./bo'limlar/Bo'limlar";
import Yangiliklar from "./yangiliklar/Yangiliklar";
import Bosh_ish from "./bosh_ish/Bosh_ish";
import Qvp from "./qvp/Qvp"
import Aloqa from "./aloqa/Aloqa";

import { Route } from "react-router-dom"


const Routes = () => {
    return (
        <>
            <Header />

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/leaders">
                <Shifokorlar />
            </Route>

            <Route path="/departments">
                <Bolimlar />
            </Route>

            <Route path="/news">
                <Yangiliklar />
            </Route>

            <Route path="/vacancy">
                <Bosh_ish />
            </Route>

            <Route path="/qvp">
                <Qvp />
            </Route>

            <Route path="/contact">
                <Aloqa />
            </Route>

            <Footer />
        </>
    )
}

export default Routes