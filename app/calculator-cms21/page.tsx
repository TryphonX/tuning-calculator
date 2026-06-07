'use client';

import CalculatorWrapper from '@/components/CalculatorWrapper';
import { ManualCalculator } from '@/components/ManualCalculator';
import { TabData, Tabs } from '@/components/Tabs';
import { useMemo } from 'react';
import { LuWandSparkles } from 'react-icons/lu';

const TABS_NAME = 'cms-calc-21-tabs';

export default function Calculator() {
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
		<CalculatorWrapper>
			<h1 className="hidden">Car Mechanic Simulator 21 Calculator</h1>
			<div className="p-8 xl:p-16">
				<Tabs tabsName={TABS_NAME} tabs={tabs}></Tabs>
			</div>
		</CalculatorWrapper>
	);
}
