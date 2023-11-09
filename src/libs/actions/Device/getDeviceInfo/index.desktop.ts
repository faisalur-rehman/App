import getBaseInfo from './getBaseInfo';
import getOSAndName from './getOSAndName/index';
import {GetDeviceInfo} from './types';

const getDeviceInfo: GetDeviceInfo = () => ({
    ...getBaseInfo(),
    ...getOSAndName(),
    deviceName: 'Desktop',
});

export default getDeviceInfo;
