import React, { useEffect, useState } from "react";
import { alchemy } from "../App";

import TransactionsGrid from "./TransactionsGrid";

const BlockExplorer = () => {
	const [blockNumber, setBlockNumber] = useState(1);
	const [blockInfo, setBlockInfo] = useState();

	useEffect(() => {
		async function getBlockNumber() {
			setBlockNumber(await alchemy.core.getBlockNumber());
		}

		getBlockNumber();
	}, []);

	useEffect(() => {
		async function getBlockInfo() {
			setBlockInfo(await alchemy.core.getBlock(blockNumber));
		}

		if (blockNumber && blockNumber !== 1) {
			getBlockInfo();
		}
	}, [blockNumber]);

	return (
		<>
			<h3>
				<span>Block Number: </span>
				<input
					type="text"
					value={blockNumber}
					onChange={(e) => setBlockNumber(+e.target.value)}
				/>
			</h3>
			{blockInfo && (
				<TransactionsGrid
					rows={blockInfo.transactions.map((tx) => ({
						id: tx,
					}))}
				/>
			)}
		</>
	);
};

export default BlockExplorer;