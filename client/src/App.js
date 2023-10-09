import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import CrudAdd from "./components/workshop/CrudAdd";
import CrudTable from "./components/workshop/CrudTable";
import CrudListView from "./components/workshop/CrudListView";
import CrudGridView from "./components/workshop/CrudGridView";
import CrudDetails from "./components/workshop/CrudDetails";
import CrudEdit from "./components/workshop/CrudEdit";
import CrudDelete from "./components/workshop/CrudDelete";
import Footer from "./components/common/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/workshop" element={<CrudTable />} />					
					<Route exact path="/workshop/list-view" element={<CrudListView />} />
					<Route exact path="/workshop/grid-view" element={<CrudGridView />} />
					<Route exact path="/workshop/new" element={<CrudAdd />} />
					<Route exact path="/workshop/:_id" element={<CrudDetails />} />
					<Route exact path="/workshop/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/workshop/:_id/delete" element={<CrudDelete />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
