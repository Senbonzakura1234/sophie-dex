import { type NextPage } from 'next';
import { useRouter } from 'next/router';

const Item: NextPage = () => {
	const router = useRouter();

	const { id } = router.query;

	console.log({ id });
	return <div></div>;
};

export default Item;
