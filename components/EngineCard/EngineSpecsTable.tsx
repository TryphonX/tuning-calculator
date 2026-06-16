'use client';

import { selectCurrentEngine } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';

export default function EngineSpecsTable() {
	const currentEngine = useAppSelector(selectCurrentEngine);

	if (!currentEngine) {
		return (
			<figure>
				<div className="overflow-x-auto w-full rounded-xl">
					<table className="table table-md">
						<tbody>
							<tr>
								<th className="w-1/4">Power</th>
								<td>N/A</td>
							</tr>
							<tr>
								<th>Torque</th>
								<td>N/A</td>
							</tr>
							<tr>
								<th>Gearbox</th>
								<td>N/A</td>
							</tr>
						</tbody>
					</table>
				</div>
			</figure>
		);
	}

	return (
		<figure>
			<div className="overflow-x-auto w-full rounded-xl">
				<table className="table table-md">
					<tbody>
						<tr>
							<th className="w-1/4">Power</th>
							<td>{currentEngine.specs.power}</td>
						</tr>
						<tr>
							<th>Torque</th>
							<td>{currentEngine.specs.torque}</td>
						</tr>
						<tr>
							<th>Gearbox</th>
							<td>{currentEngine.specs.gearbox}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</figure>
	);
}
