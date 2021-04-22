import React from "react";

const SingleBox = (props) => {
    return (
        <div>
             <div 
                    style={{
                            height: `${props.height}em`,
                            width: `${props.width}em`,
                            backgroundColor: props.color,
                        }}
                    />

                <button onClick={props.removeBox}>Close</button>

        </div>

      );
}
 
export default SingleBox;