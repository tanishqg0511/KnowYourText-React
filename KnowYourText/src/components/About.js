import React,{useState} from 'react'

export default function About() {
    const [myStyle,setMyStyle]=useState({
        color:"rgb(54, 51, 51)",
        backgroundColor: "white"
    })
    const [btnText, setBtnText]=useState("Enable dark Mode")
    const togglestyle=()=>{
        if(myStyle.color === "white")
        {
            setMyStyle({
                color:"rgb(54, 51, 51)",
                backgroundColor: "white"
            })   
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:"white",
                backgroundColor: "rgb(54, 51, 51)",
                border: "1px solid white"
            })
            setBtnText("Enable Light Mode")
        }
    }
    return (
        <div className='container my-3' style={myStyle}>
            <h1>About Us</h1>
            <div id="accordion" style={myStyle}>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" style={myStyle} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne"  style={myStyle} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" style={myStyle} aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" style={myStyle} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={togglestyle} className='btn btn-secondary'>{btnText}</button>
            </div>
        </div>
    )
}
