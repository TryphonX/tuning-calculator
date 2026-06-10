'use client';

import { PartSortBy } from '@/@types/globals';
import { selectAutoGen } from '@/lib/features/autoGen/autoGenSlice';
import { selectCalculator } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';
import { getFullPartByName, partSortFn } from '@/modules/common';
import { UpdateSortEvent } from '@/modules/customEvents';
import { useEffect, useMemo, useState } from 'react';
import SortBtn from '../SortBtn';

export const SelectedPartsTable = () => {
	const { currentEngine, selectedParts, method } =
		useAppSelector(selectCalculator);
	const { generatedSetup } = useAppSelector(selectAutoGen);

	const [sortBy, setSortBy] = useState<PartSortBy>('name_asc');

	// onMount
	useEffect(() => {
		const handleUpdateSort = (e: Event) => {
			e.stopPropagation();
			setSortBy((e as CustomEvent<PartSortBy>).detail ?? 'name_asc');
		};

		window.addEventListener(UpdateSortEvent.name, handleUpdateSort);

		return () => {
			window.removeEventListener(UpdateSortEvent.name, handleUpdateSort);
		};
	}, []);

	const sortedSelectedParts = useMemo(
		() => selectedParts.toSorted(partSortFn(sortBy)),
		[selectedParts, sortBy],
	);

	if (!currentEngine) return;

	const totalBoost = selectedParts.reduce(
		(sum, current) =>
			sum + getFullPartByName(current.name)?.boost * current.quantity,
		0,
	);

	const totalCost = selectedParts.reduce(
		(sum, current) =>
			sum + getFullPartByName(current.name)?.cost * current.quantity,
		0,
	);

	const totalCostToBoost = totalBoost > 0 ? totalCost / totalBoost : 0;

	return (
		<>
			<div className="overflow-x-auto w-full rounded-xl border border-base-content/10">
				<table className="table table-sm sm:table-md table-zebra">
					<thead>
						<tr>
							<th className="w-1/2 xl:w-1/3 2xl:w-1/2">
								Part{' '}
								<SortBtn
									sortBy={sortBy}
									values={['name_asc', 'name_desc']}
								/>
							</th>
							<th className="text-right">
								Boost{' '}
								<SortBtn
									sortBy={sortBy}
									values={['boost_asc', 'boost_desc']}
								/>
							</th>
							<th className="text-right">
								Cost{' '}
								<SortBtn
									sortBy={sortBy}
									values={['cost_asc', 'cost_desc']}
								/>
							</th>
							<th className="text-right max-md:hidden">
								Cost / Boost{' '}
								<SortBtn
									sortBy={sortBy}
									values={[
										'costToBoost_asc',
										'costToBoost_desc',
									]}
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{sortedSelectedParts.map((part) => {
							const tuningPartData = getFullPartByName(part.name);

							if (!tuningPartData) {
								console.warn(`Part missing: ${part.name}`);
							}

							return (
								<tr
									key={`${part.name.replaceAll(
										' ',
										'-',
									)}-row`}
								>
									<td>
										x{part.quantity} {part.name}
									</td>
									<td className="text-right">
										+
										{(
											tuningPartData?.boost *
											part.quantity
										).toFixed(2)}
										%
									</td>
									<td className="text-right">
										{tuningPartData?.cost * part.quantity}{' '}
										CR
									</td>
									<td
										className="text-right max-md:hidden"
										title={(
											tuningPartData?.cost /
											tuningPartData?.boost
										).toString()}
									>
										{(
											tuningPartData?.cost /
											tuningPartData?.boost
										).toFixed(0)}{' '}
										CR/Boost
									</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot className="text-xs 2xl:text-sm">
						{method === 'auto' &&
							generatedSetup?.replacementParts && (
								<tr className="bg-accent text-accent-content border-b border-accent-content">
									<th>Replacement Parts</th>
									<th
										colSpan={2}
										className="text-right font-bold"
									>
										-
										{
											generatedSetup.replacementParts
												.totalSaved
										}{' '}
										CR
									</th>
									<th className="text-right font-bold">
										-
										{(
											totalCostToBoost -
											generatedSetup.replacementParts
												.netCostToBoost
										).toFixed(0)}{' '}
										CR/Boost
									</th>
								</tr>
							)}
						<tr className="bg-secondary text-secondary-content">
							<th>Total:</th>
							<th className="text-right">
								+{totalBoost.toFixed(2)}%
							</th>
							<th className="text-right">
								{generatedSetup?.replacementParts ?
									generatedSetup.replacementParts.netCost
								:	totalCost}{' '}
								CR
							</th>
							<th
								className="text-right max-md:hidden"
								title={(generatedSetup?.replacementParts ?
									generatedSetup.replacementParts
										.netCostToBoost
								:	totalCostToBoost
								).toFixed(2)}
							>
								{(generatedSetup?.replacementParts ?
									generatedSetup.replacementParts
										.netCostToBoost
								:	totalCostToBoost
								).toFixed(0)}{' '}
								CR/Boost
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
};
