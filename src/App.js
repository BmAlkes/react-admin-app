import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, productInputs } from "./formSource";
import "./style/dark.scss";

const App = () => {
    return (
        <div className="App dark">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/login" component={Login} />
                        <Route path="users">
                            <Route index element={<List />} />
                            <Route path=":userId" element={<Single />} />
                            <Route
                                path="new"
                                element={
                                    <New
                                        inputs={userInputs}
                                        title={"Add new User"}
                                    />
                                }
                            />
                        </Route>
                        <Route path="products">
                            <Route index element={<List />} />
                            <Route path=":productId" element={<Single />} />
                            <Route
                                path="new"
                                element={
                                    <New
                                        inputs={productInputs}
                                        title="Add new Product"
                                    />
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
