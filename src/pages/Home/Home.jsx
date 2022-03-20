import React from "react";
import Charts from "../../components/Charts/Charts";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="erarning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Charts />
                </div>
            </div>
        </div>
    );
};

export default Home;
