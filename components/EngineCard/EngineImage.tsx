'use client';

import { selectCurrentEngine } from '@/lib/features/calculator/calculatorSlice';
import { useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export default function EngineImage() {
	const currentEngine = useAppSelector(selectCurrentEngine);
	const [isImageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		setImageLoaded(false);
	}, [currentEngine]);

	const skeletonElement = useMemo(
		() => <div className="skeleton w-full min-h-[256px] rounded-lg" />,
		[],
	);

	if (!currentEngine) {
		return skeletonElement;
	}

	return (
		<Image
			className={`${!isImageLoaded ? 'w-0' : ''} w-full rounded-lg`}
			src={currentEngine.imgUrl}
			alt={`${currentEngine?.name}`}
			width={200}
			height={188}
			onLoadingComplete={() => setImageLoaded(true)}
		/>
	);
}
