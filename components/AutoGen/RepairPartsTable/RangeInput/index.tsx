import { CompatiblePart, ReplacementParts } from '@/@types/calculator';
import { useRef } from 'react';

interface Props {
	repairParts: ReplacementParts;
	onRepairPartsChange: (parts: ReplacementParts) => void;
	part: CompatiblePart;
}

export const RangeInput = ({
	part,
	repairParts,
	onRepairPartsChange,
}: Props) => {
	const id = `rangeInput-${part.name.replaceAll(' ', '-')}`;
	const ref = useRef<HTMLInputElement>(null);

	return (
		<>
			<label className="sr-only" htmlFor={id}>
				How many to be repaired of this part?
			</label>
			<div
				className="max-sm:tooltip max-sm:tooltip-secondary w-full"
				data-tip={ref.current?.value}
			>
				<input
					id={id}
					ref={ref}
					className="range range-xs range-secondary w-full"
					type="range"
					min={0}
					max={part.quantity}
					defaultValue={repairParts[part.name]?.quantity ?? 0}
					onChange={({ currentTarget: { value } }) => {
						const newRepairParts = structuredClone(repairParts);

						if (!~~value) {
							delete newRepairParts[part.name];
						} else {
							newRepairParts[part.name] = {
								quantity: ~~value,
								deductibleCost: ~~value * part.cost * -1,
							};
						}

						onRepairPartsChange(newRepairParts);
					}}
				/>
			</div>
			<div className="flex justify-between px-2.5 mt-2 text-xs">
				{Array.from({ length: part.quantity + 1 }, (_, i) => (
					<span
						key={i}
						className={`text-xs${
							i % 2 !== 0 ? ' max-sm:hidden' : ''
						}`}
						aria-hidden
					>
						{i}
					</span>
				))}
			</div>
		</>
	);
};
