import { Method } from '@/@types/calculator';
import { setMethod } from '@/lib/features/calculator/calculatorSlice';
import { useAppDispatch } from '@/lib/hooks';
import { Fragment } from 'react';

export interface TabData {
	title: React.ReactNode;
	content: React.ReactNode;
	default?: boolean;
	method?: Method;
}

interface Props {
	tabsName: string;
	tabs: TabData[];
}

export const Tabs = ({ tabsName, tabs }: Props) => {
	const dispatch = useAppDispatch();
	return (
		<div className="tabs tabs-box tabs-sm p-2 pb-4 max-w-[1920px]">
			{tabs.map((tab, index) => (
				<Fragment key={index}>
					<label className="tab gap-2">
						<input
							type="radio"
							name={tabsName}
							defaultChecked={tab.default}
							onChange={({
								target,
							}: React.ChangeEvent<HTMLInputElement>) => {
								if (target.checked && tab.method) {
									dispatch(setMethod(tab.method));
								}
							}}
						/>
						{tab.title}
					</label>
					<div className="tab-content bg-base-100 border-base-300 pb-2 xl:p-4 mt-2 rounded-2xl">
						{tab.content}
					</div>
				</Fragment>
			))}
		</div>
	);
};
