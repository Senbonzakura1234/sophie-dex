import { usePathname } from 'next/navigation';

export default function usePageSegment() {
	const pathname = usePathname();

	return { segment: pathname.split('/')[1], isDetailPage: Boolean(pathname.split('/')[2]) };
}
