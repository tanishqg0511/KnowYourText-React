import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:"rgb(54, 51, 51)",
    //     backgroundColor: "white"
    // })
    let myStyle={
        color: props.mode==="dark"?"white":"black",
        backgroundColor: props.mode==="dark"?"#382e6e":"#white",
    }
    return (
        <div className='container my-3' style={{color: props.mode==="dark"?"white":"black"}}>
            <h1>About Us</h1>
            <div id="accordion" style={myStyle}>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" style={myStyle} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne"  style={myStyle} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            KnowYourText gives you a way to analyze your text quicklyand efficiently. Be it word count, character count, line count or Reading time. 
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to Use</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" style={myStyle} aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            KnowYourText is a free character counter tool which provides instant character count & word count statistics for a given text. KnowYourText reports the number of words and Characters. Thus it is suitable for writing text word and character limit.  
                        </div>
                    </div>
                </div>
                <div className="card" style={myStyle}>
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" style={myStyle} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            The word counter software works in any browser such as Google chrome, Firefox, Microsoft Edge, Safari, Opera, Brave etc. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
