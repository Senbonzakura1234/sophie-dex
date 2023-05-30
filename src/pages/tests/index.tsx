import { useForbiddenClient } from '@root/hooks/useForbiddenClient';
import type { NextPage } from 'next';
import Link from 'next/link';

const Tests: NextPage = () => {
	useForbiddenClient();

	return (
		<div className='btn-group'>
			<Link href={{ pathname: '/tests/export' }} prefetch={false} aria-label='export' className='btn'>
				Export
			</Link>
			<Link href={{ pathname: '/tests/seed' }} prefetch={false} aria-label='seed' className='btn'>
				Seed
			</Link>
			<Link href={{ pathname: '/tests/test' }} prefetch={false} aria-label='Test' className='btn'>
				Test
			</Link>
		</div>
	);
};

export default Tests;
