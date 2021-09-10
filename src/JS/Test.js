import '../CSS/Test.css';
import { useHistory } from 'react-router-dom';

export default () => {
    const history = useHistory();

    return (
        <div class="test">
            <button onClick={() => history.push('/')}>Home</button>
            <button onClick={() => history.push('/test/a')}>Test A</button>
        </div>
    );
}