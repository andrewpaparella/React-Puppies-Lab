import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to='/puppies'>Puppies</Link>
            &nbsp; | &nbsp;
            <Link to='/puppies/new'>New Puppy</Link>
        </nav>
    )
}