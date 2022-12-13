import React from "react";


export default function PortSample(props){
    return(
        <>
        <div className="portsample-header"><h1> {props.header} </h1>
        <div className="portsample-header-content"><p>{props.headerContent} </p></div>
        </div>
        <div className="portsample-image-content">
            <img className="portsample-image" src={props.image1.src}/>
            <h1 className="portsample-section-header"> {props.sectionHeader1} </h1>
            <p className="portsample-content"> {props.content1}</p>
        </div>


        <div className="portsample-image-content">
            <img className="portsample-image" src={props.image2.src}/>
            <h1 className="portsample-section-header"> {props.sectionHeader2} </h1>
            <p className="portsample-content"> {props.content2}</p>
        </div>


        <div className="portsample-image-content">
            <img className="portsample-image" src={props.image3.src}/>
            <h1 className="portsample-section-header"> {props.sectionHeader3} </h1>
            <p className="portsample-content"> {props.content3}</p>
        </div>

        <div className="portsample-image-content">
            <img className="portsample-image" src={props.image4.src}/>
            <h1 className="portsample-section-header"> {props.sectionHeader4} </h1>
            <p className="portsample-content"> {props.content4}</p>
        </div>
        </>
    )
}