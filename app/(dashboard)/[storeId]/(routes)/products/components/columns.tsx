'use client';

import { ColumnDef } from '@tanstack/react-table';

import { CellAction } from './cell-action';

export type ProductColumn = {
	id: string;
	name: string;
	price: string;
	category: string;
	size: string;

	createdAt: string;
	isFeatured: boolean;
	isAvailable: boolean;
};

export const columns: ColumnDef<ProductColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'isAvailable',
		header: 'Available',
	},
	{
		accessorKey: 'isFeatured',
		header: 'Featured',
	},
	{
		accessorKey: 'price',
		header: 'Price',
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},
	{
		accessorKey: 'size',
		header: 'Size',
	},

	{
		accessorKey: 'createdAt',
		header: 'Date',
	},
	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];
