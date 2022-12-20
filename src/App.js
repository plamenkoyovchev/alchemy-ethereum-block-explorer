import { Alchemy, Network } from "alchemy-sdk";
import "./App.css";
import BlockExplorer from "./components/BlockExplorer";

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
			<h1>Block Explorer</h1>
			<hr />
			<BlockExplorer />
		</div>
	);
}

export default App;
