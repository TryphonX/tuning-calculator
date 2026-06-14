import { PartSortBy } from '@/@types/globals';
import { useCallback } from 'react';
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

	return (
		<button
			type="button"
			className={`btn btn-xs btn-square btn-ghost ${
				values.some((val) => val === sortBy) ? 'btn-active' : ''
			}`}
			onClick={handleClick}
		>
			{sortBy === values[0] ? (
				<FaCaretUp aria-label="Sort ascending" />
			) : (
				<FaCaretDown aria-label="Sort descending" />
			)}
		</button>
	);
}
