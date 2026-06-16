'use client';

import { TuningPartName } from '@/@types/calculator';
import { PartSortBy } from '@/@types/globals';
import {
	selectCalculator,
	setPartMissing,
	toggleSelectedPart,
	updateSelectedParts,
} from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getFullPartByName, partSortFn } from '@/modules/common';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import MissingPartAlert from '../MissingPartAlert';
import SortBtn from '../SortBtn';

const getPartCheckboxes = () =>
	document.querySelectorAll(
		'input[data-part-checkbox]:not([disabled])',
	) as NodeListOf<HTMLInputElement>;

const getAllPartsCheckboxes = () =>
	document.querySelectorAll(
		'input[data-part-toggle-all-checkbox]',
	) as NodeListOf<HTMLInputElement>;

const markAllCheckboxes = (checked: boolean) => {
	getPartCheckboxes().forEach((checkbox) => {
		if (!checkbox.disabled) {
			checkbox.checked = checked;
		}
	});
};

export const PartsTable = () => {
	const dispatch = useAppDispatch();
	const { currentEngine, selectedParts, locked } =
		useAppSelector(selectCalculator);
	const [anyPartMissing, setAnyPartMissing] = useState(false);
	const [sortBy, setSortBy] = useState<PartSortBy>('name_asc');

	// onUpdate only if selectedParts changed
	useEffect(() => {
		if (!selectedParts.length) {
			markAllCheckboxes(false);
		} else {
			getPartCheckboxes()?.forEach((checkbox) => {
				const isSelected = selectedParts.some(
					(part) => part.name === checkbox.dataset.partName,
				);

				if (checkbox.checked !== isSelected) {
					checkbox.checked = isSelected;
				}
			});
		}
	}, [selectedParts]);

	// onUpdate
	useEffect(() => {
		const elements = getPartCheckboxes();

		let allSelected = true;

		elements.forEach((elem) => {
			if (!elem.checked) {
				allSelected = false;
			}
		});

		getAllPartsCheckboxes().forEach((checkbox) => {
			checkbox.checked = allSelected;
		});
	});

	useEffect(() => {
		setAnyPartMissing(false);
	}, [currentEngine]);

	const handleTogglePart = useCallback(
		({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
			const partName = currentTarget.dataset.partName! as TuningPartName;
			const partQt = ~~currentTarget.dataset.partQt!;

			dispatch(toggleSelectedPart({ name: partName, quantity: partQt }));
		},
		[dispatch],
	);

	const handleToggleAllParts = useCallback(
		({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
			const newParts = currentTarget.checked
				? currentEngine!.compatibleParts
						.filter((part) => !part.missing)
						.map((part) => ({
							name: part.name,
							quantity: part.quantity,
						}))
				: [];

			dispatch(updateSelectedParts(newParts));
			markAllCheckboxes(currentTarget.checked);
		},
		[currentEngine, dispatch],
	);

	const sortedCompatibleParts = useMemo(
		() => currentEngine?.compatibleParts.toSorted(partSortFn(sortBy)),
		[currentEngine, sortBy],
	);

	if (!currentEngine) return;

	return (
		<>
			<MissingPartAlert partMissing={anyPartMissing} />
			<div className="overflow-x-auto w-full rounded-xl">
				<table className="table table-xs sm:table-md">
					<thead className="text-lg">
						<tr>
							<td className="w-0">
								<input
									type="checkbox"
									className="checkbox checkbox-sm 2xl:checkbox-md checkbox-secondary"
									data-part-toggle-all-checkbox
									disabled={locked}
									aria-label="Select all parts"
									onChange={handleToggleAllParts}
								/>
							</td>
							<th className="w-1/2 xl:w-1/3 2xl:w-1/2">
								Part{' '}
								<SortBtn
									sortBy={sortBy}
									setSortBy={setSortBy}
									values={['name_asc', 'name_desc']}
								/>
							</th>
							<th className="text-right">
								Boost{' '}
								<SortBtn
									sortBy={sortBy}
									setSortBy={setSortBy}
									values={['boost_asc', 'boost_desc']}
								/>
							</th>
							<th className="text-right">
								Cost{' '}
								<SortBtn
									sortBy={sortBy}
									setSortBy={setSortBy}
									values={['cost_asc', 'cost_desc']}
								/>
							</th>
							<th className="text-right max-md:hidden">
								Cost / Boost{' '}
								<SortBtn
									sortBy={sortBy}
									setSortBy={setSortBy}
									values={[
										'costToBoost_asc',
										'costToBoost_desc',
									]}
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{sortedCompatibleParts!.map((part) => {
							const tuningPartData = getFullPartByName(part.name);

							if (!tuningPartData) {
								console.warn(`Part missing: ${part.name}`);
								dispatch(setPartMissing(part.name));
								if (!anyPartMissing) {
									setAnyPartMissing(true);
								}
							}

							return (
								<tr
									key={`${part.name.replaceAll(
										' ',
										'-',
									)}-row`}
								>
									<td>
										<input
											type="checkbox"
											className="checkbox checkbox-sm 2xl:checkbox-md checkbox-secondary"
											data-part-checkbox
											disabled={part.missing || locked}
											onChange={handleTogglePart}
											aria-label={`Select part ${part.name}`}
											data-part-name={part.name}
											data-part-qt={part.quantity}
										/>
									</td>
									<td
										className={
											part.missing
												? 'line-through text-error'
												: ''
										}
									>
										x{part.quantity} {part.name}
									</td>
									<td
										className={`text-right ${
											part.missing
												? 'line-through text-error'
												: ''
										}`}
									>
										+
										{(
											tuningPartData?.boost *
											part.quantity
										).toFixed(2) ?? '-'}
										%
									</td>
									<td
										className={`text-right ${
											part.missing
												? 'line-through text-error'
												: ''
										}`}
									>
										{tuningPartData?.cost * part.quantity}{' '}
										CR
									</td>
									<td
										className={`text-right max-md:hidden ${
											part.missing
												? 'line-through text-error'
												: ''
										}`}
										title={(
											tuningPartData?.cost /
											tuningPartData?.boost
										).toString()}
									>
										{(
											tuningPartData?.cost /
											tuningPartData?.boost
										)?.toFixed(0) || '-'}{' '}
										CR/Boost
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};
