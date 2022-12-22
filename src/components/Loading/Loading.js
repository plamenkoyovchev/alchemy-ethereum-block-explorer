import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loading = () => {
	return (
		<Stack spacing={2} sx={{ marginTop: 5 }}>
            <Box><CircularProgress /></Box>
            <Box>Loading...</Box>
		</Stack>
	);
};

export default Loading;
