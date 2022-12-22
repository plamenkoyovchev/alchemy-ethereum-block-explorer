import React from "react";
import { useParams } from "react-router-dom";

const TransactionDetailsPage = () => {
	const { id } = useParams();
    return <div>TransactionDetailsPage for {id}</div>;
};

export default TransactionDetailsPage;
