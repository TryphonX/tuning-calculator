'use client';

import { TuningPartName } from '@/@types/calculator';
import { PartSortBy } from '@/@types/globals';
import { selectAutoGen } from '@/lib/features/autoGen/autoGenSlice';
import { selectCalculator } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';
import { getFullPartByName, partSortFn } from '@/modules/common';
import { useCallback, useMemo, useState } from 'react';
import SortBtn from '../SortBtn';

interface Props {
	isSkeleton?: boolean;
}

export const SelectedPartsTable = ({ isSkeleton }: Props) => {
	const { currentEngine, selectedParts, method } =
		useAppSelector(selectCalculator);
	const { generatedSetup } = useAppSelector(selectAutoGen);

	const [sortBy, setSortBy] = useState<PartSortBy>('name_asc');

	const sortedSelectedParts = useMemo(
		() => selectedParts.toSorted(partSortFn(sortBy)),
		[selectedParts, sortBy],
	);

	const totalCost = useMemo(
		() =>
			selectedParts.reduce(
				(sum, current) =>
					sum +
					getFullPartByName(current.name)?.cost * current.quantity,
				0,
			),
		[selectedParts],
	);

	const totalDisplayCost = useMemo(
		() =>
			generatedSetup?.replacementParts
				? generatedSetup.replacementParts.netCost
				: totalCost,
		[generatedSetup?.replacementParts, totalCost],
	);

	const totalBoost = useMemo(
		() =>
			selectedParts.reduce(
				(sum, current) =>
					sum +
					getFullPartByName(current.name)?.boost * current.quantity,
				0,
			),
		[selectedParts],
	);

	const totalCostToBoost = useMemo(
		() => (totalBoost > 0 ? totalCost / totalBoost : 0),
		[totalCost, totalBoost],
	);

	const totalDisplayCostToBoost = useMemo(
		() =>
			generatedSetup?.replacementParts
				? generatedSetup.replacementParts.netCostToBoost
				: totalCostToBoost,
		[generatedSetup?.replacementParts, totalCostToBoost],
	);

	const skeletonContent = useMemo(
		() => <div className="skeleton h-4 w-full" />,
		[],
	);

	const getSkeletonRows = useCallback(() => {
		return Array.from({ length: 5 }).map((_, i) => (
			<tr key={`skeleton-row-${i}`}>
				<td className="text-center">{skeletonContent}</td>
				<td className="text-center">{skeletonContent}</td>
				<td className="text-center">{skeletonContent}</td>
				<td className="text-center">{skeletonContent}</td>
			</tr>
		));
	}, [skeletonContent]);

	const isReplacement = useCallback(
		(partName: TuningPartName) => {
			return (
				method === 'auto' &&
				generatedSetup?.replacementParts?.names.includes(partName)
			);
		},
		[method, generatedSetup?.replacementParts],
	);

	if (!currentEngine) return;

	return (
		<>
			<div className="overflow-x-auto w-full rounded-xl">
				<table className="table table-sm sm:table-md">
					<thead>
						<tr>
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
						{isSkeleton
							? getSkeletonRows()
							: sortedSelectedParts.map((part) => {
									const tuningPartData = getFullPartByName(
										part.name,
									);

									if (!tuningPartData) {
										console.warn(
											`Part missing: ${part.name}`,
										);
									}

									return (
										<tr
											key={`${part.name.replaceAll(
												' ',
												'-',
											)}-row`}
											className={
												isReplacement(part.name)
													? 'text-accent text-semibold'
													: undefined
											}
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
												{tuningPartData?.cost *
													part.quantity}{' '}
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
								<tr className="bg-accent text-accent-content border-b border-accent-conten font-bold">
									<th>Replacement Parts</th>
									<th colSpan={2} className="text-right">
										-
										{
											generatedSetup.replacementParts
												.totalSaved
										}{' '}
										CR
									</th>
									<th className="text-right max-md:hidden">
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
								{isSkeleton
									? skeletonContent
									: `+${totalBoost.toFixed(2)}%`}
							</th>
							<th className="text-right">
								{isSkeleton
									? skeletonContent
									: `${totalDisplayCost}CR`}
							</th>
							<th
								className="text-right max-md:hidden"
								title={totalDisplayCostToBoost.toFixed(2)}
							>
								{isSkeleton
									? skeletonContent
									: `${totalDisplayCostToBoost.toFixed(
											0,
									  )} CR/Boost`}
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
};
