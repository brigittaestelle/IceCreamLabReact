import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "./AdDesigner.css";

function AdDesigner() {
    const [ad, setAd] = useState("Chocolate");

    const [theme, setTheme] = useState("Light");

    const [font, setFont] = useState(12)

    return (
        <div className="AdDesigner">

            <Card style={{ width: '18rem', textAlign: "center" }}>
                <Card.Body className={theme == "Light" ? "light" : "dark"}>
                    <Card.Title>Vote for</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ad}</Card.Subtitle>

                </Card.Body>
            </Card>
            <Button disabled={ad === "chocolate"} variant="primary" onClick={() => { setAd("chocolate") }}>Chocolate</Button>{' '}
            <Button disabled={ad === "strawberry"} variant="secondary" onClick={() => { setAd("strawberry") }}>Strawberry</Button>{' '}
            <Button disabled={ad === "vanilla"} variant="success" onClick={() => { setAd("vanilla") }}>Vanilla</Button>{' '}
            <h2>Color Theme</h2>
            <Button disabled={ad === "vanilla"} variant="success" onClick={() => { setTheme("Light") }}>Light</Button>
            <Button disabled={ad === "vanilla"} variant="success" onClick={() => { setTheme("Dark") }}>Dark</Button>
            <h2>Font Size</h2>
            <Button variant="success" onClick={() => { setFont((prv) => prv - 1) }}>Down</Button>
            <span className="fontSize">{font}</span>
            <Button variant="success" onClick={() => { setFont((prv) => prv + 1) }}>Up</Button>



        </div>
    )
}

export default AdDesigner;