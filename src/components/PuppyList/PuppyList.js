import PuppyListItem from '../PuppyListItem/PuppyListItem';

export default function PuppyList({puppies, handleDeletePuppy}) {
    
    return (
        <main className="PuppyList">
            {puppies.map(puppy => (
					<PuppyListItem 
					puppy={puppy}
					key={puppy._id}
                    handleDeletePuppy={handleDeletePuppy}
					/>
				))}
        </main>
    )
}