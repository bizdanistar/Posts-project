import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layouts = () => {
    return (
        <>
            <Header />
            <main className="App">
                <Outlet />
            </main>
        </>
    )
}

export default Layouts