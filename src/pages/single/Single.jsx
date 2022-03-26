import React from "react";
import "./single.scss";
import SideBar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Charts/Charts";
import List from "../../components/Tables/Tables";

const Single = () => {
    return (
        <div className="single">
            <SideBar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">John Doe</h1>
                                <div className="detailsItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">
                                        johnDoe@gmail.com
                                    </span>
                                </div>
                                <div className="detailsItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">
                                        +1 0120 033 45
                                    </span>
                                </div>
                                <div className="detailsItem">
                                    <span className="itemKey">Adress:</span>
                                    <span className="itemValue">
                                        9 Av. 230, New York, NY
                                    </span>
                                </div>
                                <div className="detailsItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart
                            aspect={3 / 1}
                            title="User Spending (last 6 months)"
                        />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transaction</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;
