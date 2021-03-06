import { useState } from 'react';
import { Form, FormControl, Dropdown, Button } from 'react-bootstrap';
import './SearchBar.css';

function SearchBar() {
    const [choose, setChoose] = useState("plan");
    let d = {
        "plan": {
            "action": "./plan",
            "title": "教案"
        },
        "element": {
            "action": "./element",
            "title": "素材"
        },
    }

    return (
        <Form className="search-bar" inline action={d[choose]["action"]}>
            <Dropdown>
                <Dropdown.Toggle className="search-item"> {d[choose]["title"]} </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setChoose("plan")}>教案</Dropdown.Item>
                    <Dropdown.Item onClick={() => setChoose("element")}>素材</Dropdown.Item>
                </Dropdown.Menu>
                <FormControl type="text" placeholder={"尋找" + d[choose]["title"]} className="mr-sm-2 search-item word" />

                <Button className="search-item search-btn" type="submit"><i className="fas fa-search"></i></Button>
            </Dropdown>
        </Form>
    );
}

export default SearchBar;