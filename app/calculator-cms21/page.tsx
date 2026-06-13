'use client';

import { CalculationPage } from '@/components/CalculationPage';
import { appStore } from '@/lib/store';
import { Provider } from 'react-redux';

export default function Calculator() {
	return (
		<Provider store={appStore}>
			<div className="relative">
				<div className="bg-linear-to-b from-base-100 via-base-300 to-base-100 absolute w-full h-full" />
				<CalculationPage />
			</div>
		</Provider>
	);
}
