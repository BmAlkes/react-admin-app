import React from "react";
import Charts from "../../components/Charts/Charts";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import Tables from "../../components/Tables/Tables";
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
                    <Charts aspect={1 / 2} title="Last 6 months (Revenue)" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transaction</div>
                    <Tables />
                </div>
            </div>
        </div>
    );
};

export default Home;
