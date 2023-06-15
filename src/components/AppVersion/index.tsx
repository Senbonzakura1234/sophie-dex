import { APP_VERSION } from '@root/constants';

export default function AppVersion() {
	return <small className='absolute bottom-3 left-3 font-bold'>{APP_VERSION}</small>;
}
