import { Button, Grid, TextField } from "@mui/material";
import { Utils } from "alchemy-sdk";
import React from "react";
import { useState } from "react";
import { alchemy } from "../../App";
import useDebounce from "../../hooks/useDebounce";

const AccountsPage = () => {
	const [address, setAddress] = useState();
	const addressDebounce = useDebounce(address);

	const [balance, setBalance] = useState(0);

	const getBalanceHandler = async () => {
		const balance = await alchemy.core.getBalance(addressDebounce, "latest");
		setBalance(balance);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} marginTop={5}>
				<TextField
					label="Address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					InputLabelProps={{
						shrink: true,
					}}
					sx={{ width: "500px" }}
				/>
				<Button
					onClick={getBalanceHandler}
					variant="contained"
				sx={{marginLeft: "10px", height: "100%"}}>
					Get Balance
				</Button>
			</Grid>
			{balance && (
				<Grid item xs={12} marginTop={2}>
					Balance: {Utils.formatEther(balance)} ETH
				</Grid>
			)}
		</Grid>
	);
};

export default AccountsPage;
