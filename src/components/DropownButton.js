import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropDownButton({ dropDownData }) {
    return (
        <DropdownButton id="dropdown-basic-button" title="Buy CHANGE">
            {dropDownData.map((item, index) => {
                return (
                    <Dropdown.Item id={index} href={item.link}>
                        <img src={item.image} alt={item.title} />
                    </Dropdown.Item>
                );
            })}
        </DropdownButton>
    );
}

export default DropDownButton;
