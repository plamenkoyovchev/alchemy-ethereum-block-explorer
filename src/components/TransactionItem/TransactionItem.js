import { Box, Typography } from "@mui/material";
import React from "react";

const TransactionItem = ({ label, value }) => {
	return (
		<Box sx={{ fontSize: 14, textAlign: "left" }}>
			{label}
			<Typography
				component="span"
				sx={{ textAlign: "left", marginLeft: "5px" }}
				color="text.secondary"
				gutterBottom
			>
				{value}
			</Typography>
		</Box>
	);
};

export default TransactionItem;
