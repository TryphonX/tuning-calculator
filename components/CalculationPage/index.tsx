'use client';

import { selectCalculator } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';
import { useCallback, useMemo } from 'react';
import { LuWandSparkles, LuWrench } from 'react-icons/lu';
import { AutoGenTuningView } from '../AutoGen/AutoGenTuningView';
import { CartView } from '../CartView';
import EngineCard from '../EngineCard';
import { ManualCalculator } from '../ManualCalculator';
import { TabData, Tabs } from '../Tabs';

const TABS_NAME = 'cms-calc-21-tabs';

const STEPS = ['Engine selection', 'Tuning method', 'Cart'];

export const CalculationPage = () => {
	const { currentStep, method } = useAppSelector(selectCalculator);

	const tabs: TabData[] = useMemo<TabData[]>(
		() => [
			{
				title: (
					<>
						<LuWandSparkles aria-hidden /> Auto-generate
					</>
				),
				content: <AutoGenTuningView />,
				default: method === 'auto',
				method: 'auto',
			},
			{
				title: (
					<>
						<LuWrench aria-hidden /> Manual
					</>
				),
				content: <ManualCalculator />,
				default: method === 'manual',
				method: 'manual',
			},
		],
		[method],
	);

	const CurrentStepView = useCallback(() => {
		switch (currentStep) {
			case 0:
				return <EngineCard className="w-4xl" />;
			case 1:
				return <Tabs tabsName={TABS_NAME} tabs={tabs}></Tabs>;
			case 2:
				return <CartView />;
			default:
				return null;
		}
	}, [currentStep, tabs]);

	const currentStepVisual = useMemo(
		() => (method === 'manual' && currentStep === 1 ? 2 : currentStep),
		[currentStep, method],
	);

	return (
		<>
			<div className="relative">
				<h1 className="hidden">Car Mechanic Simulator 21 Calculator</h1>
				<div className="p-8 xl:p-16 space-y-16">
					<div className="flex w-full justify-center">
						<ul className="steps steps-horizontal w-2xl">
							{STEPS.map((step, index) => (
								<li
									key={index}
									className={`step ${index <= currentStepVisual ? 'step-secondary' : ''}`}
								>
									{step}
								</li>
							))}
						</ul>
					</div>
					<div className="flex justify-center">
						<CurrentStepView />
					</div>
				</div>
			</div>
		</>
	);
};
