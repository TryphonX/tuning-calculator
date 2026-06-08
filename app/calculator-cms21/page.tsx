'use client';

import { CalculationPage } from '@/components/CalculationPage';
import CalculatorWrapper from '@/components/CalculatorWrapper';
import { appStore } from '@/lib/store';
import { Provider } from 'react-redux';

export default function Calculator() {
	return (
		<CalculatorWrapper>
			<Provider store={appStore}>
				<CalculationPage />
			</Provider>
		</CalculatorWrapper>
	);
}
