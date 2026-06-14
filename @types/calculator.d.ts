import engines from '@/data/cms21/engines.json';
import tuningParts from '@/data/cms21/tuning-parts.json';

export type Method = 'auto' | 'manual';

type Enumerate<
	N extends number,
	Acc extends number[] = [],
> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
>;

export declare interface CompatiblePart extends TuningPartBase {
	/**
	 * The name of the part
	 */
	name: TuningPartName;
	/**
	 * The number of times this type of part is fitted on each engine
	 */
	quantity: number;
	/**
	 * The part's price (in CR)
	 */
	cost: number;
	/**
	 * Whether the part is missing
	 */
	missing?: boolean;
}

export declare interface EngineSpecs {
	/**
	 * The engine's peak power (in HP)
	 */
	power: string;
	/**
	 * The engine's peak torque (in N-m)
	 */
	torque: string;
	/**
	 * The name of the compatible gearbox
	 */
	gearbox: string;
	/**
	 * The configuration of the engine (eg V8)
	 */
	configuration: string;
}

export type EngineName = keyof typeof engines;

export declare interface Engine {
	/**
	 * The name of the engine
	 */
	name: EngineName;
	/**
	 * The url of the engine's image
	 */
	imgUrl: string;
	/**
	 * The engine's specifications
	 */
	specs: EngineSpecs;
	/**
	 * The parts that are compatible with the engine
	 */
	compatibleParts: CompatiblePart[];
}

export declare interface TuningPartBase {
	/**
	 * The name of the part
	 */
	name: TuningPartName;
}

export declare interface SelectedPart extends TuningPartBase {
	/**
	 * The name of the part
	 */
	name: TuningPartName;
	/**
	 * The number of times this type of part is fitted on each engine
	 */
	quantity: number;
}

export type TuningPartName = keyof typeof tuningParts;

export declare interface TuningPart extends TuningPartBase {
	/**
	 * The part's price (in CR)
	 */
	cost: number;
	/**
	 * The part's boost increase
	 */
	boost: number;
	/**
	 * The part's cost to boost ratio - CR / Boost
	 */
	costToBoost: number;
}

export declare interface TuningSetup {
	partNames: TuningPartName[];
	cost: number;
	boost: number;
	costToBoost: number;
	replacementParts?: {
		names: TuningPartName[];
		/** The cost of the tuning minus the replacements */
		netCost: number;
		netCostToBoost: number;
		totalSaved: number;
	};
}

declare interface ReplacementPartValue {
	quantity: number;
	deductibleCost: number;
}

/**
 * key: TuningPartName
 * value: The cost of the replacement part x(-1)
 */
export type ReplacementParts = Record<
	Partial<TuningPartName>,
	ReplacementPartValue
>;

declare interface CalculatorWorkerMessage {
	parts: TuningPart[];
	targetBoostIncrease: number;
	replacementParts: ReplacementParts;
}
