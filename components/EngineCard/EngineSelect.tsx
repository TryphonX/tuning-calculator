'use client';

import { Engine, EngineName } from '@/@types/calculator';
import { BaseProps } from '@/@types/globals';
import {
	resetReplacementParts,
	setGeneratedSetup,
} from '@/lib/features/autoGen/autoGenSlice';
import {
	selectCurrentEngine,
	updateEngine,
} from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ENGINE_CONFIGURATIONS } from '@/modules/common';
import { ChangeEvent, useCallback, useState } from 'react';
import engines from '../../data/cms21/engines.json';

const EngineConfigOptions = () => {
	return (
		<>
			<option value="">Any</option>
			{ENGINE_CONFIGURATIONS.map((option) => (
				<option key={option}>{option}</option>
			))}
		</>
	);
};

export default function EngineSelect({ className }: BaseProps) {
	const currentEngine = useAppSelector(selectCurrentEngine);
	const dispatch = useAppDispatch();
	const [engineConfig, setEngineConfig] = useState<string>('');

	const handleEngineChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const engineName = target.value as EngineName | null;
		const engine =
			engineName ?
				(structuredClone(engines[engineName as EngineName]) as Engine)
			:	null;

		dispatch(updateEngine(engine));
		dispatch(resetReplacementParts());
		dispatch(setGeneratedSetup(null));
	};

	const handleEngineConfigChange = ({
		target,
	}: ChangeEvent<HTMLSelectElement>) => {
		setEngineConfig(target.value);

		if (!target.value) {
			return;
		}

		const newEngine = structuredClone(
			Object.values(engines).find(
				(engine) => engine.specs.configuration === target.value,
			) ?? null,
		) as Engine | null;

		dispatch(updateEngine(newEngine));
		dispatch(resetReplacementParts());
	};

	const EngineOptions = () => {
		return (
			<>
				{!engineConfig && <option>-- None --</option>}
				{Object.keys(engines)
					.filter(
						(key) =>
							!engineConfig ||
							engines[key as EngineName].specs.configuration ===
								engineConfig,
					)
					.map((option) => (
						<option key={option}>{option}</option>
					))}
			</>
		);
	};

	const getClassName = useCallback(
		() => (className ? ` ${className}` : ''),
		[className],
	);

	return (
		<div className={`flex flex-col sm:flex-row gap-4 ${getClassName()}`}>
			<label className="select sm:select-sm md:select-md w-full">
				<span className="label">Configuration</span>
				<select
					value={engineConfig}
					onChange={handleEngineConfigChange}
				>
					<EngineConfigOptions />
				</select>
			</label>

			<label className="select sm:select-sm md:select-md w-full">
				<span className="label">Engine</span>
				<select
					value={currentEngine?.name ?? ''}
					onChange={handleEngineChange}
				>
					<EngineOptions />
				</select>
			</label>
		</div>
	);
}
