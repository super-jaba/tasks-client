import { UserIdStorage, UsernameStorage } from '../../services/LocalStorageService';
import Button from '../ui/Button/Button';
import s from './AccountHeader.module.css';

const AccountHeader = () => {

    const username = UsernameStorage.get();

    // const navigate = useNavigate();

    const logoutHandler = () => {
        UserIdStorage.clear();
        UsernameStorage.clear();

        // navigate('/auth');
    }

    return (
        <div className={s.box}>
            <div className={s.username}>{username}</div>
            <Button onClick={() => {logoutHandler();}} width='100px' textColor='white'>Log out</Button>
        </div>
    )
}

export default AccountHeader