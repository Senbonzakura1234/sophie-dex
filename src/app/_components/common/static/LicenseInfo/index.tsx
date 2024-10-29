import CheckList from '@components/common/static/CheckList';
import CommonWrapper from '@components/common/static/CommonWrapper';
import MDXRenderer from '@components/common/static/MDXRenderer';
import CheckIcon from '@components/icons/solid/CheckIcon';
import InfoIcon from '@components/icons/solid/InfoIcon';
import XMarkIcon from '@components/icons/solid/XMarkIcon';
import type { LicenseInfo } from '@root/types/common/zod';
import { env } from '@root/utils/common/env';
import LicenseInfoHead from './LicenseInfoHead';

type Props = Readonly<LicenseInfo>;

export default function LicenseInfo({ body, conditions, limitations, permissions, ...rest }: Props) {
	return (
		<CommonWrapper classNames={{ wrapper: 'min-h-[42rem] w-full' }}>
			<div className='flex flex-wrap gap-6'>
				<LicenseInfoHead {...rest} />

				<div className='divider divider-vertical m-0 w-full 2xl:divider-horizontal before:bg-gradient-to-br before:from-accent before:to-primary after:bg-gradient-to-tl after:from-accent after:to-primary 2xl:w-auto' />

				<div className='flex grow flex-wrap gap-2'>
					<CheckList
						list={permissions}
						title='permissions'
						icon={<CheckIcon className='aspect-square h-[18px] text-primary' />}
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

			<div className='divider divider-vertical before:bg-gradient-to-br before:from-accent before:to-primary after:bg-gradient-to-tl after:from-accent after:to-primary' />

			<MDXRenderer
				body={body
					.replace('[year]', new Date().getFullYear().toString())
					.replace('[fullname]', env.NEXT_PUBLIC_APP_AUTHOR)}
				className='px-2 pb-5'
			/>
		</CommonWrapper>
	);
}
