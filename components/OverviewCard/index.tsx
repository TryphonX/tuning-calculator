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
	const { targetIncrease, withReplacements, replacementParts } =
		useAppSelector(selectAutoGen);

	const hasAnyReplacement = useMemo(
		() => Object.values(replacementParts).some((part) => part.quantity > 0),
		[replacementParts],
	);

	const hasActualReplacements = useMemo(
		() => withReplacements && hasAnyReplacement,
		[withReplacements, hasAnyReplacement],
	);

	const actions = useMemo<Action[]>(
		() => [
			{
				label: (
					<>
						<FaRegCircleXmark aria-hidden /> Clear
					</>
				),
				className: 'btn-error',
				onClick: () => dispatch(resetReplacementParts()),
				disabled: !hasActualReplacements,
			},
		],
		[hasActualReplacements, dispatch],
	);

	return (
		<Card title="Overview" className={className} actions={actions}>
			<div className="flex flex-col justify-between h-full">
				<div className="flex flex-col gap-2">
					<p>
						<span className="font-bold">Target Increase</span>:{' '}
						{targetIncrease}%
					</p>
					<p>
						<span className="font-bold">Includes Replacements</span>
						:{' '}
						<label>
							<input
								type="checkbox"
								checked={hasActualReplacements}
								readOnly
								className="checkbox checkbox-sm checkbox-accent"
							/>
							<span className="sr-only">
								{hasActualReplacements ? 'Yes' : 'No'}
							</span>
						</label>
					</p>
					{hasActualReplacements && (
						<div>
							<span className="font-bold">Replacing:</span>
							<ul className="list-disc px-8 py-2">
								{Object.entries(replacementParts).map(
									([partName, part]) => (
										<li key={partName}>
											x{part.quantity} {partName}
										</li>
									),
								)}
							</ul>
						</div>
					)}
				</div>
				<StepsNavigation />
			</div>
		</Card>
	);
}
