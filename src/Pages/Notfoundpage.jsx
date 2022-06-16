import { Link } from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div className='not'>
            <h1>403</h1>
            <h2>Forbidden</h2>
            <h3>Access to this resource on the server is denied</h3>
            <a href="/Dashboard">Dashboard page</a>
        </div>
    )
}

export { Notfoundpage };