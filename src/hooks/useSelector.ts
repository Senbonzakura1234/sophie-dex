import { Context } from '@root/utils/context';
import { useContext } from 'react';

const useSelector = () => useContext(Context).state;

export default useSelector;
