import { Context } from '@root/utils/client/context';
import { useContext } from 'react';

const useSelector = () => useContext(Context).state;

export default useSelector;
