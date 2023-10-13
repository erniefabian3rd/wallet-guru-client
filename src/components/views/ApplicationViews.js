import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { BudgetingHome } from "../budgeting/BudgetingHome"

export const ApplicationViews = () => {
	return <>
		<Routes>
			<Route element={<Authorized />}>
				<Route path="/" element={<BudgetingHome />} />
			</Route>

		</Routes>
	</>
}

