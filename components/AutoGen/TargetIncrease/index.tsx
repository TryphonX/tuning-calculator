import { IntRange } from '@/@types/calculator';
import {
	selectAutoGen,
	setTargetIncrease,
} from '@/lib/features/autoGen/autoGenSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export const TargetIncrease = () => {
	const dispatch = useAppDispatch();
	const { targetIncrease } = useAppSelector(selectAutoGen);
	return (
		<div>
			<label>
				<p className="py-4">Target boost increase:</p>
				<input
					id="autoGenTargetInput"
					type="range"
					min="0"
					max="100"
					title={`${targetIncrease}%`}
					defaultValue={targetIncrease}
					onChange={({ currentTarget }) =>
						dispatch(
							setTargetIncrease(
								~~currentTarget.value as IntRange<0, 100>,
							),
						)
					}
					className="range range-secondary w-full"
				/>
			</label>
			<div className="flex justify-between px-2.5 mt-2 text-xs">
				{Array.from({ length: 101 }, (_, i) => {
					if (i % 10 === 0) {
						return (
							<span
								key={i}
								className={`text-xs${
									i % 20 !== 0 ? ' max-sm:hidden' : ''
								}`}
								aria-hidden
							>
								{i}%
							</span>
						);
					}
				})}
			</div>
		</div>
	);
};
