import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Votes() {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);
    return (
        <div>
            <Button variant="primary" onClick={() => {
                setChocolateVotes(prv => prv + 1);
                setTotalVotes(prv => prv + 1);
            }}>Chocolate</Button>{' '}
            <Button variant="secondary" onClick={() => {
                setStrawberryVotes(prv => prv + 1);
                setTotalVotes(prv => prv + 1);
            }}>Strawberry</Button>{' '}
            <Button variant="success" onClick={() => {
                setVanillaVotes(prv => prv + 1);
                setTotalVotes(prv => prv + 1);
            }}>Vanilla</Button>{' '}
            <p>Chocolate: {chocolateVotes}</p>
            <p>Strawberry: {strawberryVotes}</p>
            <p>Vanilla: {vanillaVotes}</p>


        </div>

    )
}

export default Votes;