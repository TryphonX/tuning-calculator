import {
	CalculatorWorkerMessage,
	Engine,
	ReplacementParts,
	SelectedPart,
	TuningPart,
	TuningSetup,
} from '@/@types/calculator';
import {
	selectAutoGen,
	setGeneratedSetup,
} from '@/lib/features/autoGen/autoGenSlice';
import {
	selectCalculator,
	updateSelectedParts,
} from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getFullPartByName } from '@/modules/common';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import Card from '../Card';
import { SelectedPartsTable } from '../CartCard/SelectedPartsTable';
import { StepsNavigation } from '../StepsNavigation';

export const CartView = () => {
	const dispatch = useAppDispatch();
	const { currentEngine, method } = useAppSelector(selectCalculator);
	const { targetIncrease, replacementParts, generatedSetup } =
		useAppSelector(selectAutoGen);

	const [isLoading, setLoading] = useState(method === 'auto');

	const bestSetupWorker = useMemo(() => {
		if (typeof Worker !== 'undefined') {
			return new Worker(
				new URL(
					'@/modules/workers/calculateBestSetup.ts',
					import.meta.url,
				),
			);
		}
		return null;
	}, []);

	const cardTitle = useMemo(
		() => (
			<h2 className="space-x-2">
				<FaCartShopping aria-hidden className="inline-block" />
				<span>Cart</span>
			</h2>
		),
		[],
	);

	const generateSetup = useCallback(
		(
			currentEngine: Engine,
			targetIncrease: number,
			replacementParts: ReplacementParts,
		) => {
			const tunedCompatibleParts = currentEngine.compatibleParts
				.map((part) => ({
					...part,
					tunedPart: getFullPartByName(part.name),
				}))
				.filter((part) => part.tunedPart)
				// The cost and boost are multiplied by quantity here to make
				// calculations easier for bestSetupWorker
				.map<TuningPart>((part) => ({
					...(part.tunedPart as TuningPart),
					cost: part.tunedPart.cost * part.quantity,
					boost: part.tunedPart.boost * part.quantity,
				}));

			if (window.Worker && bestSetupWorker) {
				const workerMessage: CalculatorWorkerMessage = {
					parts: tunedCompatibleParts,
					targetBoostIncrease: targetIncrease,
					replacementParts: replacementParts,
				};
				bestSetupWorker.postMessage(workerMessage);
			}
		},
		[bestSetupWorker],
	);

	// technically only runs on mount
	useEffect(() => {
		if (window.Worker && bestSetupWorker) {
			bestSetupWorker.onmessage = (
				e: MessageEvent<TuningSetup | null>,
			) => {
				dispatch(setGeneratedSetup(e.data));
				setLoading(false);
			};
		}
	}, [bestSetupWorker, dispatch]);

	// technically this means it will only run on mount
	useEffect(() => {
		if (method === 'auto') {
			generateSetup(currentEngine!, targetIncrease, replacementParts);
		}
	}, [
		currentEngine,
		targetIncrease,
		replacementParts,
		method,
		generateSetup,
	]);

	useEffect(() => {
		if (generatedSetup) {
			setLoading(true);
			dispatch(
				updateSelectedParts(
					currentEngine!.compatibleParts
						.filter((part) =>
							generatedSetup.partNames.includes(part.name),
						)
						.map<SelectedPart>((part) => ({
							name: part.name,
							quantity: part.quantity,
						})),
				),
			);

			setLoading(false);
		}
	}, [generatedSetup, dispatch, currentEngine]);

	return (
		<Card title={cardTitle}>
			<div className="flex flex-col justify-between gap-10">
				{isLoading && (
					<div className="mt-4">
						<SelectedPartsTable isSkeleton />
					</div>
				)}
				{!isLoading && method === 'auto' && !generatedSetup && (
					<p>
						There is no possible setup configuration that achieves{' '}
						{targetIncrease}% boost for this engine.
					</p>
				)}
				{!isLoading && (method !== 'auto' || generatedSetup) && (
					<div className="mt-4">
						<SelectedPartsTable />
					</div>
				)}
				<StepsNavigation forceLastStep />
			</div>
		</Card>
	);
};
