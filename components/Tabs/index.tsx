import { Fragment } from 'react';

export interface TabData {
	title: React.ReactNode;
	content: React.ReactNode;
	default?: boolean;
}

interface Props {
	tabsName: string;
	tabs: TabData[];
}

export const Tabs = ({ tabsName, tabs }: Props) => {
	return (
		<div className="tabs tabs-box p-2">
			{tabs.map((tab, index) => (
				<Fragment key={index}>
					<label className="tab gap-2">
						<input
							type="radio"
							name={tabsName}
							defaultChecked={tab.default}
						/>
						{tab.title}
					</label>
					<div className="tab-content bg-base-100 border-base-300 p-6 mt-2 rounded-2xl">
						{tab.content}
					</div>
				</Fragment>
			))}
		</div>
	);
};
