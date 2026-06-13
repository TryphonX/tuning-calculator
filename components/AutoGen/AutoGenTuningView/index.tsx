import OverviewCard from '../../OverviewCard';
import ParametersCard from '../ParametersCard';

export const AutoGenTuningView = () => {
	return (
		<div className="grid grid-cols-1 gap-8 p-4 2xl:grid-cols-5 2xl:gap-20">
			<ParametersCard className="2xl:col-span-4" />
			<OverviewCard className="2xl:col-span-1" />
		</div>
	);
};
