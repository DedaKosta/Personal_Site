import React from "react";

const Half = (props) => {
    return (
        <div className="picture-text">
            <div className={props.firstHalf === "picture" ? "picture-half-cont" : "text-half-cont"}>
                {
                    props.firstHalf === "picture"
                        ? <img className="picture-half" src={props.img} alt="half_image" />
                        : <p className="text-half">{props.text}</p>
                }
            </div>
            <div className={props.secondHalf === "picture" ? "picture-half-cont" : "text-half-cont"}>
                {
                    props.secondHalf === "picture"
                        ? <img className="picture-half" src={props.img} alt="half_image" />
                        : <p className="text-half">{props.text}</p>
                }
            </div>
        </div>
    );
};

export default Half;
