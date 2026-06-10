import { ReplacementParts } from '@/@types/calculator';
import {
	selectAutoGen,
	setReplacementParts,
} from '@/lib/features/autoGen/autoGenSlice';
import { selectCurrentEngine } from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { partSortFn } from '@/modules/common';
import { useCallback, useMemo } from 'react';
import { RangeInput } from './RangeInput';

export const RepairPartsTable = () => {
	const dispatch = useAppDispatch();
	const { replacementParts: repairParts } = useAppSelector(selectAutoGen);
	const currentEngine = useAppSelector(selectCurrentEngine);

	const onRepairPartsChange = useCallback(
		(repairParts: ReplacementParts) => {
			dispatch(setReplacementParts(repairParts));
		},
		[dispatch],
	);

	const sortedCompatibleParts = useMemo(
		() =>
			currentEngine?.compatibleParts
				.filter((part) => !part.missing)
				.toSorted(partSortFn('name_asc')) ?? [],
		[currentEngine],
	);

	return (
		<div className="py-4">
			<div className="overflow-x-auto overflow-y-auto max-h-[40vh] w-full rounded-xl border border-base-content/10">
				<table className="table table-pin-rows table-xs sm:table-sm xl:table-md table-zebra">
					<thead>
						<tr className="text-lg">
							<th className="w-1/2">Repair Part</th>
							<th className="text-right">Quantity</th>
						</tr>
					</thead>
					<tbody>
						{sortedCompatibleParts.map((part) => {
							return (
								<tr
									key={`${part.name.replaceAll(
										' ',
										'-',
									)}-row`}
								>
									<td>{part.name}</td>
									<td>
										<RangeInput
											part={part}
											repairParts={repairParts}
											onRepairPartsChange={
												onRepairPartsChange
											}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
