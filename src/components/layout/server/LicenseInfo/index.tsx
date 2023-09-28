import CheckList from '@root/components/common/server/CheckList';
import CommonWrapper from '@root/components/common/server/CommonWrapper';
import CheckIcon from '@root/components/common/server/icons/solid/CheckIcon';
import InfoIcon from '@root/components/common/server/icons/solid/InfoIcon';
import XMarkIcon from '@root/components/common/server/icons/solid/XMarkIcon';
import { APP_AUTHOR } from '@root/constants/common';
import { getLicense } from '@root/utils/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import LicenseInfoHead from './LicenseInfoHead';

export default async function LicenseInfo() {
	const { body, conditions, limitations, permissions, ...rest } = await getLicense();

	return (
		<CommonWrapper className='order-2 lg:order-1'>
			<div className='flex flex-wrap gap-2'>
				<LicenseInfoHead {...rest} />

				<div className='flex grow flex-wrap gap-2'>
					<CheckList
						list={permissions}
						title='permissions'
						icon={<CheckIcon className='aspect-square h-[18px] text-primary-focus' />}
					/>
					<CheckList
						list={limitations}
						title='limitations'
						icon={<XMarkIcon className='aspect-square h-[18px] text-error' />}
					/>
					<CheckList
						list={conditions}
						title='conditions'
						icon={<InfoIcon className='aspect-square h-[18px] text-info' />}
					/>
				</div>
			</div>

			<div className='my-auto bg-gradient-to-r from-accent to-primary py-1.5'>
				<div className='prose max-w-none bg-base-100 p-5 text-base-content'>
					<MDXRemote
						source={body.replace('[year]', new Date().getFullYear().toString()).replace('[fullname]', APP_AUTHOR)}
					/>
				</div>
			</div>
		</CommonWrapper>
	);
}
