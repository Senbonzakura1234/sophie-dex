import { Context } from '@root/utils/context';
import { useContext } from 'react';

const useDispatch = () => useContext(Context).dispatch;

export default useDispatch;
