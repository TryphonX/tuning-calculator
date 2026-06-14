import {
	CalculatorWorkerMessage,
	TuningPartName,
	TuningSetup,
} from '@/@types/calculator';

const isNewSetupBetter = (newSetup: TuningSetup, currentBest: TuningSetup) => {
	const newSetUpNetCost = newSetup.replacementParts?.netCost ?? newSetup.cost;
	const currentBestNetCost =
		currentBest.replacementParts?.netCost ?? currentBest.cost;

	return newSetUpNetCost !== currentBestNetCost
		? newSetUpNetCost < currentBestNetCost
		: newSetup.boost > currentBest.boost;
};

onmessage = function (e: MessageEvent<CalculatorWorkerMessage>) {
	const parts = e.data.parts;
	const targetBoostIncrease = e.data.targetBoostIncrease;
	const replacementParts = e.data.replacementParts;

	const numParts = parts.length;
	let bestSetup: TuningSetup | null = null;

	// iterate over each possible combination via a bitmask
	for (let mask = 1; mask < 1 << numParts; mask++) {
		let comboCost = 0;
		let netCost = 0;
		let comboBoost = 0;
		let hasReplacementParts = false;
		const replacementPartNames = [] as TuningPartName[];

		const partNames: TuningPartName[] = [];

		// generate combination for current mask
		for (let i = 0; i < numParts; i++) {
			if (mask & (1 << i)) {
				// check i-th bit of the mask
				const part = parts[i];
				comboCost += part.cost;
				netCost += part.cost;
				comboBoost += part.boost;
				partNames.push(part.name);

				// remove the cost of the original part if it is being replaced
				if (Object.keys(replacementParts).includes(part.name)) {
					netCost += replacementParts[part.name].deductibleCost;
					replacementPartNames.push(part.name);
					hasReplacementParts = true;
				}
			}
		}

		// ignore combinations that don't meet the target
		if (comboBoost >= targetBoostIncrease) {
			const costToBoost = comboCost / comboBoost;
			const setup: TuningSetup = {
				partNames: partNames,
				cost: comboCost,
				boost: comboBoost,
				costToBoost: costToBoost,
				replacementParts: hasReplacementParts
					? {
							names: replacementPartNames,
							netCost: netCost,
							netCostToBoost: netCost / comboBoost,
							totalSaved: comboCost - netCost,
					  }
					: undefined,
			};

			// update bestSetup
			if (!bestSetup || isNewSetupBetter(setup, bestSetup)) {
				bestSetup = setup;
			}
		}
	}

	postMessage(bestSetup);
};
