'use client';

import { CalculationPage } from '@/components/CalculationPage';
import { appStore } from '@/lib/store';
import { Provider } from 'react-redux';

export default function Calculator() {
	return (
		<Provider store={appStore}>
			<CalculationPage />
		</Provider>
	);
}
