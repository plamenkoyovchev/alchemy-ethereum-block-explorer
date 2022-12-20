import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import styles from "./DataTable.module.css";

const DataTable = ({ columns, rows }) => {
	return (
		<div className={styles.DataTable}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}
			/>
		</div>
	);
};

export default DataTable;
