import { Alchemy, Network } from "alchemy-sdk";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AccountsPage from "./pages/AccountsPage/AccountsPage";
import BlockExplorerPage from "./pages/BlockExplorerPage/BlockExplorerPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
	apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
	network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
export const alchemy = new Alchemy(settings);

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/accounts" element={<AccountsPage />} />
				<Route path="/block-explorer" element={<BlockExplorerPage />} />
				<Route path="/" element={<BlockExplorerPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
