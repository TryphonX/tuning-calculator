import { PartSortBy } from '@/@types/globals';
import { useCallback, useMemo } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';

type SortBtnProps = {
	sortBy: PartSortBy;
	values: [PartSortBy, PartSortBy];
	setSortBy: (sortBy: PartSortBy) => void;
};

export default function SortBtn({ sortBy, values, setSortBy }: SortBtnProps) {
	const handleClick = useCallback(() => {
		setSortBy(
			sortBy === (values[0] as PartSortBy)
				? (values[1] as PartSortBy)
				: (values[0] as PartSortBy),
		);
	}, [setSortBy, sortBy, values]);

	const isAscending = useMemo(() => sortBy === values[0], [sortBy, values]);

	return (
		<button
			type="button"
			aria-label={`Sort by ${isAscending ? 'ascending' : 'descending'}`}
			className={`btn btn-xs btn-square btn-ghost ${
				values.some((val) => val === sortBy) ? 'btn-active' : ''
			}`}
			onClick={handleClick}
		>
			{isAscending ? (
				<FaCaretUp aria-hidden />
			) : (
				<FaCaretDown aria-hidden />
			)}
		</button>
	);
}
