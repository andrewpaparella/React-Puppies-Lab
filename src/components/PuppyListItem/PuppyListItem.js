import {Link} from 'react-router-dom'

export default function PuppyList({puppy}) {
    return (
		<div>
            <h3>{puppy.name}</h3>
            <span>Breed: {puppy.breed} &nbsp; | &nbsp;
            {puppy.age} Years Old</span>
            <br /><Link className='btn btn-xs btn-info'
            to={{
                pathname: '/details',
                state: { puppy },
            }}
            >
                DETAILS
            </Link>
            <hr />
        </div>
	);
}
