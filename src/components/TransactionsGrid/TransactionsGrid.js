
import React from "react";
import { NavLink } from "react-router-dom";
import DataTable from "../DataTable/DataTable";

const columns = [
	{
		field: "id",
		headerName: "Tx",
		sortable: false,
		width: 630,
		renderCell: ({ row: { id, value, asset } }) => (
			<NavLink
				state={{ value, asset }}
				to={{ pathname: `/transaction/${id}` }}
			>
				{id}
			</NavLink>
		),
	},
];

const TransactionsGrid = ({ rows }) => {
	return <DataTable columns={columns} rows={rows} />;
};

export default TransactionsGrid;
