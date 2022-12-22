import React, { useState, useEffect } from "react";
import { alchemy } from "../../App";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Utils } from "alchemy-sdk";
import styles from "./TransactionDetailsPage.module.css";
import { Card, CardContent, Chip, Stack } from "@mui/material";
import TransactionItem from "../../components/TransactionItem/TransactionItem";

const transactionStatusMap = {
	0: "Failed",
	1: "Success",
};

const TransactionDetailsPage = () => {
	const { id } = useParams();
    const [transaction, setTransaction] = useState({});
    
    const { state } = useLocation();
    const { value, asset } = state;
    
	useEffect(() => {
		async function fetchTransactionData() {
			const receipt = await alchemy.core.getTransactionReceipt(id);
			setTransaction(receipt);
		}

		fetchTransactionData();
	}, [id]);

	const {
		blockNumber,
		confirmations,
		from,
		to,
		status,
		effectiveGasPrice,
		gasUsed,
	} = transaction;

	return (
		<div className={styles.TransactionDetailsPage}>
			{!transaction.from && <p>Loading...</p>}
			{transaction.from && (
				<Card sx={{ minWidth: 300, maxWidth: 600, margin: "0 auto" }}>
					<CardContent>
						<Stack spacing={1}>
							<TransactionItem label={"Block Number:"} value={blockNumber} />
							<TransactionItem label={"Confirmations:"} value={confirmations} />
							<TransactionItem label={"From:"} value={from} />
							<TransactionItem label={"To:"} value={to} />
							<TransactionItem
								label={"Status:"}
								value={
									<Chip label={transactionStatusMap[status]} color="success" />
								}
							/>
							<TransactionItem label="Gas used:" value={parseInt(gasUsed)} />
							<TransactionItem
								label="Gas price:"
								value={`${Utils.formatEther(effectiveGasPrice)} ${asset}`}
							/>
							<TransactionItem
								label="Amount:"
								value={`${value} ${asset}`}
							/>
						</Stack>
					</CardContent>
				</Card>
            )}
            <p className={styles.backToBlockExplorer}>
                <NavLink to="/block-explorer">Back to block explorer</NavLink>
            </p>
		</div>
	);
};

export default TransactionDetailsPage;
