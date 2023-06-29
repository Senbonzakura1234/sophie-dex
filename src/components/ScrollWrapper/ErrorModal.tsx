import { AnimationWrapper } from '@root/components/ui/dynamic';
import type { ErrorResultProps } from '@root/types/common/props';
import { getFramerFade } from '@root/utils/animations';
import ErrorCard from '../ui/static/ErrorCard';

type ErrorModalProps = Omit<ErrorResultProps, 'isError'> & {
	isShow: boolean;
	onCloseModal: () => void;
};

export default function ErrorModal({
	isShow,
	errorData,
	errorMessage = 'Unknown Error Occur In Server',
	onCloseModal,
}: ErrorModalProps) {
	const httpStatus = errorData ? errorData.httpStatus : 400;

	return (
		<AnimationWrapper
			show={isShow}
			options={getFramerFade()}
			className='absolute inset-0 z-50 grid cursor-pointer grid-cols-1 place-content-center bg-slate-900/50 p-2 md:grid-cols-none'
			onClick={onCloseModal}
		>
			<ErrorCard errorMessage={errorMessage} httpStatus={httpStatus} showShadow />
		</AnimationWrapper>
	);
}
