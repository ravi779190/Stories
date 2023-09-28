import { useState, useEffect } from 'react';
import '../Global.scss';
export default function Loader({ length, isLoading, isclick }) {

    // const [getLoader, setGetLoader] = useState([]);
    // var getLoader = [];
    // useEffect(() => {
    //     console.log("loader chale")
    //     const emptyArray = [];
    //     const width = `${100 / length}%`;
    //     for (let i = 0; i < length; i++) {
    //         emptyArray.push(<div className='progress_bar_container' style={{ width: width }} key={i} id={i}>
    //             <div className={"container"}>
    //                 <div className="progress progress-striped">
    //                     <div className="progress-bar-filled">
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>);
    //     }
    //     console.log(emptyArray, length)
    //     console.log("isLoading : ", isLoading)
    //     setGetLoader(emptyArray);
    // }, [isLoading])
    
    

    let getLoader = [];
    const width = `${100 / length}%`;
    for (let i = 0; i < length; i++) {
        console.log(i, isLoading);
        if(i < isLoading) {
            console.log("condition 1")
            getLoader.push(<div className='progress_bar_container' style={{ width: width }} key={i} id={i}>
            <div className={"container"}>
                <div className="progress progress-striped">
                    <div className="progress-bar progress-bar-filled">
                    </div>
                </div>
            </div>
        </div>);
        } else if (i==isLoading){
            console.log("condition 2")
            getLoader.push(<div className='progress_bar_container' style={{ width: width }} key={i} id={i}>
            <div className={"container " + isLoading +' '+i} >
                <div className="progress progress-striped">
                    <div className="progress-bar">
                    </div>
                </div>
            </div>
        </div>);
        } else {
            console.log("condition 3")
            getLoader.push(<div className='progress_bar_container' style={{ width: width }} key={i} id={i}>
            <div className={"container"}>
                <div className="progress">
                    <div className="progress-bar progress-bar-empty">
                    </div>
                </div>
            </div>
        </div>);
        }
        
    }

    return (
        <>
        {getLoader}
        </>
    // <>
    //     {getLoader && console.log(getLoader)}
    // </>
);
}


