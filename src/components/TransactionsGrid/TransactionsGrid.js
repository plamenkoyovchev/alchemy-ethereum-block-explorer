
import React from "react";
import { NavLink } from "react-router-dom";
import DataTable from "../DataTable/DataTable";
import styles from "./TransactionsGrid.module.css";

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
				className={styles.NavLink}
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
