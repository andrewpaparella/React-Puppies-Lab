import {Link} from 'react-router-dom'

export default function PuppyList({puppy, handleDeletePuppy}) {
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
            &nbsp; | &nbsp;
            <Link
					className='btn btn-xs btn-warning'
					to={{
						pathname: '/edit',
						state: { puppy },
					}}
				>
					EDIT
				</Link>
                &nbsp; | &nbsp;
                <button className='btn btn-xs btn-danger margin-left-10' onClick={() => handleDeletePuppy(puppy._id)}>
                    DELETE
                </button>
            <hr />
        </div>
	);
}
