import React from "react";
import "./ListItem.css";

function ListItem(props){
    const items = props.items;
    const listItems = items.map((item) => {
        return <div className="list" key={item.key}>
                    <p>
                        {item.text}
                        <span> 
                            <button onClick={() => {props.editItem(item.text, item.key)}}>Edit</button>
                            <button onClick={() => props.deleteItem(item.key)}>Delete</button> 
                        </span>
                    </p>
                    
        </div>
    })
    return(
        <div>
            {listItems}
        </div>
    )
}

export default ListItem;