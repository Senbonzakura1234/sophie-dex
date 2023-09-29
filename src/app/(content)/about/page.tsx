import CommonWrapper from '@root/components/common/server/CommonWrapper';
import ReadmeWrapper from '@root/components/layout/client/ReadmeWrapper';

export default function About() {
	return (
		<CommonWrapper className='prose h-auto max-w-none [&>*>*]:mb-1 [&>*>*]:mt-0 [&>*>h1]:text-primary [&>*>h2]:text-accent'>
			<ReadmeWrapper />
		</CommonWrapper>
	);
}
