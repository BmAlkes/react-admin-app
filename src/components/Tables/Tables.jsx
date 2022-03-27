import React from "react";
import "./tables.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Tables = () => {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_..jpg",
            customer: "John",
            amount: 786,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2235235,
            product: "Plastation 5",
            img: "http://cdn.shopify.com/s/files/1/0271/5002/4727/products/PS5_RENDER_WITHNOTICE_01_1024x.jpg?v=1600878044",
            customer: "John ",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 2342353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/I/71cngLX2xuL._AC_SX569_.jpg",
            customer: "John  Smith",
            date: "1 March",
            amount: 350,
            method: "Cash on Delivery",
            status: "Pending",
        },
    ];

    return (
        <div className="table">
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">
                                Tracking ID
                            </TableCell>
                            <TableCell className="tableCell">Product</TableCell>
                            <TableCell className="tableCell">
                                Customer
                            </TableCell>
                            <TableCell className="tableCell">Date</TableCell>
                            <TableCell className="tableCell">Amount</TableCell>
                            <TableCell className="tableCell">
                                Payment Method
                            </TableCell>
                            <TableCell className="tableCell">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={rows.id}>
                                <TableCell className="tableCell">
                                    {row.id}
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img
                                            src={row.img}
                                            alt=""
                                            className="image"
                                        />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.customer}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.date}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.amount}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.method}
                                </TableCell>
                                <TableCell className="tableCell">
                                    <span className={` status ${row.status}`}>
                                        {row.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Tables;
