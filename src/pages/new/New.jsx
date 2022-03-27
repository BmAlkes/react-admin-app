import React, { useState } from "react";
import "./new.scss";
import SideBar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ title, inputs }) => {
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <SideBar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 className="title">{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
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
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
