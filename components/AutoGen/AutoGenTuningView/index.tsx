import OverviewCard from '../../OverviewCard';
import ParametersCard from '../ParametersCard';

export const AutoGenTuningView = () => {
	return (
		<div className="grid grid-cols-5 gap-20">
			<ParametersCard className="col-span-4" />
			<OverviewCard className="col-span-1" />
		</div>
	);
};
