import * as userService from '../../utilities/users-service';

function PuppiesPage() {
    async function handleCheckToken() {
        const expDate = await userService.checkToken();
        console.log(expDate);
    }

    return (
        <div className="puppies-page">
            <h1>Puppies Page</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}

export default PuppiesPage