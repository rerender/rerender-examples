import { h } from 'rerender';
import { mask } from '../components/maskController/MaskController';

function ControllersPage(){
    return <input
        type='text'
        controller={mask}
        mask='+7 (___) ___-__-__'
        value='9251112233'
    />;
}

export default ControllersPage;
