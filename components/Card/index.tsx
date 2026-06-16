import { Action, BasePropsWithChildren } from '@/@types/globals';
import { useCallback } from 'react';

type CardLevel = '-1' | '0' | '1';

type CardProps = BasePropsWithChildren &
	HeaderProps &
	FooterActionsProps & {
		title?: React.ReactNode;
		cardLevel?: CardLevel;
	};

const getActionClassName = (action: Action) =>
	'btn join-item btn-xs ' + `${action.className ?? 'btn-neutral'}`;

type HeaderProps = ActionsProps & {
	title?: React.ReactNode;
};

type ActionsProps = {
	actions?: Action[];
};

type FooterActionsProps = {
	footerActions?: Action[];
};

function Actions({ actions }: { actions?: Action[] }) {
	if (!actions || !actions.length) return null;

	return (
		<div className="join">
			{actions.map((action, index) => (
				<button
					type="button"
					key={`action-${index}`}
					className={getActionClassName(action)}
					disabled={action.disabled}
					onClick={action.onClick}
					role="button"
				>
					{action.label}{' '}
					<span className="max-sm:hidden">
						{action.optionalLabel}
					</span>
				</button>
			))}
		</div>
	);
}

function Header({ title, actions }: HeaderProps) {
	if (!title) return;

	return (
		<>
			<div className="flex flex-row justify-between">
				<span className="card-title">{title}</span>
				<Actions actions={actions} />
			</div>
			<div className="divider my-0"></div>
		</>
	);
}

const getFActionClassName = (action: Action) => `btn ${action.className ?? ''}`;

function FooterActions({ footerActions }: FooterActionsProps) {
	if (!footerActions || !footerActions.length) return null;

	return (
		<div className="card-actions mt-6 justify-end">
			{footerActions.map((action, index) => (
				<button
					type="button"
					key={`footeraction-${index}`}
					className={getFActionClassName(action)}
					disabled={action.disabled}
					onClick={action.onClick}
				>
					{action.label}{' '}
					<span className="max-sm:hidden">
						{action.optionalLabel}
					</span>
				</button>
			))}
		</div>
	);
}

export default function Card({
	className,
	title,
	actions,
	children,
	footerActions,
	cardLevel = '0',
}: CardProps) {
	const getClassName = useCallback(
		() => (className ? ` ${className}` : ''),
		[className],
	);

	const getCardLevelClassName = useCallback(() => {
		switch (cardLevel) {
			case '-1':
				return 'bg-base-300';
			case '1':
				return 'bg-base-100';
			case '0':
			default:
				return 'bg-base-200';
		}
	}, [cardLevel]);

	return (
		<div
			className={`card border-t border-base-content/10 ${getCardLevelClassName()} shadow-md ${getClassName()}`.trimEnd()}
		>
			<div className="card-body">
				<Header title={title} actions={actions} />
				{children}
				<FooterActions footerActions={footerActions} />
			</div>
		</div>
	);
}
