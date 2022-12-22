import React, { useEffect, useState } from "react";
import { alchemy } from "../../App";
import TransactionsGrid from "../TransactionsGrid/TransactionsGrid";
import useDebounce from "../../hooks/useDebounce";
import { Grid, TextField } from "@mui/material";
import Loading from "../Loading/Loading";

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
			setBlockInfo(
				await alchemy.core.getAssetTransfers({
					fromBlock: blockNumberDebounce,
					toBlock: blockNumberDebounce,
					category: ["external"],
				})
			);
		}

		if (blockNumberDebounce && blockNumberDebounce !== 1) {
			getBlockInfo();
		}
	}, [blockNumberDebounce]);

	return (
		<>
			<h1>Block Explorer</h1>
			<hr />
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
						sx={{ width: "650px" }}
					/>
				</Grid>
				{!blockInfo && (
					<Grid item xs={12}>
						<Loading />
					</Grid>
				)}
				{blockInfo && (
					<Grid item xs={12}>
						<TransactionsGrid
							rows={blockInfo.transfers.map(({ hash, value, asset }) => ({
								id: hash,
								value,
								asset,
							}))}
						/>
					</Grid>
				)}
			</Grid>
		</>
	);
};

export default BlockExplorer;
