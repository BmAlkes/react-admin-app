import React from "react";
import "./new.scss";
import SideBar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
const New = () => {
    return (
        <div className="new">
            <SideBar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 className="title">Add User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image:{" "}
                                    <DriveFolderUploadOutlined className="Icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                />
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="formInput">
                                <label>Name and Surname</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="formInput">
                                <label>email</label>
                                <input
                                    type="email"
                                    placeholder="JohnDoe@gmail.com"
                                />
                            </div>
                            <div className="formInput">
                                <label>Phone</label>
                                <input type="text" placeholder="Phone" />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div className="formInput">
                                <label>Adress</label>
                                <input type="text" placeholder="Adress" />
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" />
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
