import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover></Cover>
            <h2>men men menu</h2>
        </div>
    );
};

export default Menu;