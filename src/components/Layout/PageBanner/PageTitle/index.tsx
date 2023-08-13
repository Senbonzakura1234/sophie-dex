import { useModuleId } from '@root/hooks/useModuleId';

export default function PageTitle() {
	const moduleId = useModuleId();

	return (
		<div className='font-roboto text-5xl font-bold capitalize tracking-widest text-slate-50 text-shadow-dark xl:text-6xl 2xl:text-7xl'>
			{moduleId}
		</div>
	);
}
