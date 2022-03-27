import React from "react";
import "./dataTable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";

const DataTable = () => {
    const actionColumn = [
        {
            field: "action",
            HeaderName: "Action ",
            width: 100,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link
                            to="/users/test"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="viewButton">View</div>
                        </Link>

                        <div className="deleteButton">Delete</div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="dataTable">
            <div className="dataTableTitle">
                Add New User
                <Link to="/users/new" className="link">
                    Add new
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTable;
