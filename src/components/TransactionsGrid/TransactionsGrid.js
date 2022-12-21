import React from "react";
import DataTable from "../DataTable/DataTable";

const columns = [
	{
		field: "id",
		headerName: "Tx",
		sortable: false,
		width: 700,
	},
];

const TransactionsGrid = ({ rows }) => {
	return <DataTable columns={columns} rows={rows} />;
};

export default TransactionsGrid;
