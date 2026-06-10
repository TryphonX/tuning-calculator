import { Action, BaseProps } from '@/@types/globals';
import Card from '@/components/Card';
import { StepsNavigation } from '@/components/StepsNavigation';
import {
	resetReplacementParts,
	selectAutoGen,
} from '@/lib/features/autoGen/autoGenSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';
import { FaRegCircleXmark } from 'react-icons/fa6';

export default function OverviewCard({ className }: BaseProps) {
	const dispatch = useAppDispatch();
	const {
		targetIncrease,
		withReplacements: withRepairs,
		replacementParts: repairParts,
	} = useAppSelector(selectAutoGen);

	const hasAnyRepairPart = useMemo(
		() => Object.values(repairParts).some((part) => part.quantity > 0),
		[repairParts],
	);

	const hasActualRepairs = useMemo(
		() => withRepairs && hasAnyRepairPart,
		[withRepairs, hasAnyRepairPart],
	);

	const actions = useMemo<Action[]>(
		() => [
			{
				label: (
					<>
						<FaRegCircleXmark aria-hidden /> Clear repairs
					</>
				),
				className: 'btn-error',
				onClick: () => dispatch(resetReplacementParts()),
				disabled: !hasActualRepairs,
			},
		],
		[hasActualRepairs, dispatch],
	);

	return (
		<Card title="Overview" className={className} actions={actions}>
			<div className="flex flex-col justify-between h-full">
				<div className="flex flex-col gap-4">
					<p>
						<span className="font-bold">Target Increase</span>:{' '}
						{targetIncrease}%
					</p>
					<p>
						<span className="font-bold">Includes Repairs</span>:{' '}
						{hasActualRepairs ? 'Yes' : 'No'}
					</p>
					{hasActualRepairs && (
						<p>
							<span className="font-bold">Repairing:</span>
							<ul className="list-disc px-8 py-2">
								{Object.entries(repairParts).map(
									([partName, part]) => (
										<li key={partName}>
											x{part.quantity} {partName}
										</li>
									),
								)}
							</ul>
						</p>
					)}
				</div>
				<StepsNavigation />
			</div>
		</Card>
	);
}
