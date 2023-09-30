import { Context } from '@root/utils/client/context';
import { useContext } from 'react';

const useDispatch = () => useContext(Context).dispatch;

export default useDispatch;
