'use client';

import { selectCurrentStep } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';
import { LuWandSparkles } from 'react-icons/lu';
import { ManualCalculator } from '../ManualCalculator';
import { TabData, Tabs } from '../Tabs';

const TABS_NAME = 'cms-calc-21-tabs';

const STEPS = ['Engine selection', 'Tuning method', 'Cart'];

export const CalculationPage = () => {
	const currentStep = useAppSelector(selectCurrentStep);

	const tabs: TabData[] = useMemo<TabData[]>(
		() => [
			{
				title: (
					<>
						<LuWandSparkles aria-hidden /> Auto-generate
					</>
				),
				content: <ManualCalculator />,
				default: true,
			},
			{
				title: (
					<>
						<LuWandSparkles aria-hidden /> Manual
					</>
				),
				content: <ManualCalculator />,
			},
		],
		[],
	);

	return (
		<>
			<h1 className="hidden">Car Mechanic Simulator 21 Calculator</h1>
			<div className="p-8 xl:p-16 space-y-16">
				<div className="flex w-full justify-center">
					<ul className="steps steps-vertical lg:steps-horizontal w-1/2">
						{STEPS.map((step, index) => (
							<li
								key={index}
								className={`step ${index <= currentStep ? 'step-secondary' : ''}`}
							>
								{step}
							</li>
						))}
					</ul>
				</div>
				<Tabs tabsName={TABS_NAME} tabs={tabs}></Tabs>
			</div>
		</>
	);
};
