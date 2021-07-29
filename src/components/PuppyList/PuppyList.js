import PuppyListItem from '../PuppyListItem/PuppyListItem';

export default function PuppyList({puppies}) {
    
    return (
        <main className="PuppyList">
            {puppies.map(puppy => (
					<PuppyListItem 
					puppy={puppy}
					key={puppy._id}
					/>
				))}
        </main>
    )
}