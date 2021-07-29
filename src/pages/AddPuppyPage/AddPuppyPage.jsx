import React, { useState} from 'react';
import * as puppyAPI from '../../utilities/puppies-api'


export default function AddPuppyPage({puppies, setPuppies}) {
    const [formData, setFormData] = useState({
        name: '',
        breed: 'Mixed',
        age: 0
    })

    async function handleAddPuppy(newPupData){
        const newPup = await puppyAPI.create(newPupData);
        setPuppies([...puppies, newPup])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddPuppy(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        <h1>Add Puppy</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div className="form-group">
                <label>Pup's Name (Required)</label>
                <input className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                />
            </div>
            <div className="form-group">
                <label>Pup's Breed (Required)</label>
                <input className="form-control"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label>Pup's Age</label>
                <input className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn" >ADD PUPPY</button>
        </form>
        </>
    )
}