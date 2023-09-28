import { useEffect } from 'react';
import '../Global.scss';
import style from '../style/Slide.module.scss'
export default function Slide({ slide, length, callback, count }) {
    const storyAction = (e, action, length) => {
        callback(action, length);
    }
    // var getLoader = [];
    // const width = `${100/length}%`;
    // for(let i=0; i<length; i++){
    //     getLoader.push(<div className='progress_bar_container' style={{width:width}} key={i} id={i}>
    //     <div className={"container"}>
    //         <div className="progress progress-striped">
    //             <div className="progress-bar">
    //             </div>
    //         </div>
    //     </div>
    // </div>);
    // } 
    // console.log('slide :', slide)

    return (
        <div className={style.story}>
            <div className={style.hidden_container}>
                <div className={style.left} style={{}}
                    onClick={(e) => storyAction(e, 'prev', length)}>
                    &nbsp;
                </div>
                <div className={style.center} style={{}}
                    onClick={(e) => storyAction(e, 'pause', length)}>
                    &nbsp;
                </div>
                <div className={style.right} style={{}}
                    onClick={(e) => storyAction(e, 'next', length)}>
                    &nbsp;
                </div>
            </div>
            {/* <div className={'loader_container'}>
                {getLoader}
            </div> */}
            {/* <div className='progress_bar_container' key={count}>
                <div className={"container"}>
                    <div className="progress progress-striped">
                        <div className="progress-bar">
                        </div>
                    </div>
                </div>
            </div> */}
            {slide.layers.map((item, i) => (
                <div className={style.storyContainer}>
                    {item.type === "content" &&

                        <img className={style.image} src={item.url} alt={'story-image'}
                            height={item.props.height} width={item.props.width} />}
                    {item.type === "text" &&
                        // <text x="20" y="35" lassName={style.htmlContainer} class="small">{item.text}</text>
                        <div className={style.textContainer}>
                            {/* <svg height={item.props.height} width={item.props.width} xmlns="http://www.w3.org/2000/svg" fill={item.props.color} 
                                onAnimationStart={'ease-in 1s'} >
                                    <g font-face="sans-serif"></g>
                                    <text x={item.props.left} y={item.props.top}
                                        style={item.props}
                                        className={style.htmlContainer}>{item.text} 
                             <set attributeName='visibility' begin='0s' dur='3s' to='hidden' />
                                    <set attributeName='visibility' begin='5s' dur='3s' to='hidden' /> 
                            <set attributeName="fill" begin='3s' dur='3s' to="green" /> 
                             </text> 

                            </svg> */}
                            {/* <svg height={item.props.height} width={item.props.width} >

                                <switch>
                                    <foreignObject x="20" y="90" width="150" height="200" style={item.props}>
                                        <p>Text goes here</p>
                                    </foreignObject>
                                </switch>

                            </svg> */}
                            <p style={item.props}>{item.text}</p>

                        </div>
                        /* // <div className={style.htmlContainer} dangerouslySetInnerHTML={{ __html: item.text }}></div> */
                    }
                    {item.type === "cta" &&

                        <div className={style.ctaContainer}>
                            {
                                (item.text || item.url) && <a href={item.url}>
                                <button className={style.cta} style={item.props}>
                                    {item.text}
                                </button>
                            </a>
                            }
                            
                        </div>
                    }
                </div>
            ))}
        </div>


    );
}


