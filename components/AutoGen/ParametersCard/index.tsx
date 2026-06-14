import { BaseProps } from '@/@types/globals';
import { ReplacementPartsTable } from '@/components/AutoGen/ReplacementPartsTable';
import Card from '@/components/Card';
import {
	selectAutoGen,
	setWithReplacements,
} from '@/lib/features/autoGen/autoGenSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { TargetIncrease } from '../TargetIncrease';

const TOOLTIP_DESCRIPTION_ID = 'replacement-parts-tooltip-text';
const TOOLTIP_CONTENT =
	'Damaged parts that will need to be replaced for the same job. It will only be included in the build, if it makes the build cheaper.';

export default function ParametersCard({ className }: BaseProps) {
	const dispatch = useAppDispatch();
	const { withReplacements } = useAppSelector(selectAutoGen);

	const handleIncludeReplacementsChange = useCallback(
		({ target }: React.ChangeEvent<HTMLInputElement>) => {
			dispatch(setWithReplacements(target.checked));
		},
		[dispatch],
	);

	return (
		<Card title="Parameters" className={className}>
			<div className="flex flex-col gap-14">
				<TargetIncrease />
				<div className="flex flex-col gap-4">
					<label className="flex flex-row gap-4 items-center">
						<input
							type="checkbox"
							className="toggle toggle-primary"
							defaultChecked={withReplacements}
							onChange={handleIncludeReplacementsChange}
						/>
						<div className="flex flex-row gap-2">
							Include replacement parts
							<button
								type="button"
								className="tooltip tooltip-top"
								data-tip={TOOLTIP_CONTENT}
								aria-describedby={TOOLTIP_DESCRIPTION_ID}
							>
								<FaRegCircleQuestion />
								<span className="sr-only">
									More info about including replacement parts
									and what to expect
								</span>
							</button>
							<span
								className="sr-only"
								id={TOOLTIP_DESCRIPTION_ID}
							>
								{TOOLTIP_CONTENT}
							</span>
						</div>
					</label>
					{withReplacements && <ReplacementPartsTable />}
				</div>
			</div>
		</Card>
	);
}
