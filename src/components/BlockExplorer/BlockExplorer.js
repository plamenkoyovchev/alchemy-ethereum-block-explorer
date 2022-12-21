import React, { useEffect, useState } from "react";
import { alchemy } from "../../App";
import TransactionsGrid from "../TransactionsGrid/TransactionsGrid";
import useDebounce from "../../hooks/useDebounce";
import { Grid, TextField } from "@mui/material";

const BlockExplorer = () => {
	const [blockNumber, setBlockNumber] = useState(1);
	const blockNumberDebounce = useDebounce(blockNumber);
	const [blockInfo, setBlockInfo] = useState();

	useEffect(() => {
		async function getBlockNumber() {
			setBlockNumber(await alchemy.core.getBlockNumber());
		}

		getBlockNumber();
	}, []);

	useEffect(() => {
		async function getBlockInfo() {
			setBlockInfo(await alchemy.core.getBlock(blockNumberDebounce));
		}

		if (blockNumberDebounce && blockNumberDebounce !== 1) {
			getBlockInfo();
		}
	}, [blockNumberDebounce]);

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} marginTop={2}>
				<TextField
					label="Block number"
					type="number"
					value={blockNumber}
					onChange={(e) => setBlockNumber(+e.target.value)}
					InputLabelProps={{
						shrink: true,
					}}
					sx={{width: "650px"}}
				/>
			</Grid>
			{blockInfo && (
				<Grid item xs={12}>
					<TransactionsGrid
						rows={blockInfo.transactions.map((tx) => ({
							id: tx,
						}))}
					/>
				</Grid>
			)}
		</Grid>
	);
};

export default BlockExplorer;
