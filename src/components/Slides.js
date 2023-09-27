import { useEffect } from 'react';
import '../Global.scss';
import style from '../style/Slide.module.scss'
export default function Slide({ slide, length, callback, count }) {
    const storyAction = (e, action, length) => {
        callback(action, length);
    }
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
            <div className='progress_bar_container' key={count}>
                <div className={"container"}>
                    <div className="progress progress-striped">
                        <div className="progress-bar">
                        </div>
                    </div>
                </div>
            </div>
            {slide.layers.map((item, i) => (
                    <div className={style.storyContainer}>
                        {item.type === "content" &&

                            <img className={style.image} src={item.url} alt={'story-image'}
                                height={item.props.height} width={item.props.width} />}
                        {item.type === "text" &&
                            // <text x="20" y="35" lassName={style.htmlContainer} class="small">{item.text}</text>
                            <div className={style.textContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill={item.props.color} onAnimationStart={'ease-in 1s'}>
                                    <style>
                                        {/* .animation {
                                        font: italic 40px serif;
                                        fill: red;
                                    } */}

                                    </style>
                                    {/* <rect width="10" height="10" fill="green">
                                    <animate attributeName="rx" values="0;20;0"
                                        dur="2s" repeatCount="10" />
                                </rect> */}

                                    <text x={item.props.left} y={item.props.top}
                                        style={{ fontFamily: item.props.font, fontSize: item.props.size }}
                                        className={style.htmlContainer}>{item.text}
                                        {/* <set attributeName='visibility' begin='0s' dur='3s' to='hidden' />
                                    <set attributeName='visibility' begin='5s' dur='3s' to='hidden' /> */}
                                        <set attributeName="fill" begin='3s' dur='3s' to="green" />
                                    </text>

                                </svg>
                            </div>
                            /* // <div className={style.htmlContainer} dangerouslySetInnerHTML={{ __html: item.text }}></div> */
                        }
                        {item.type === "cta" &&
                            <div className={style.ctaContainer}>
                                <button className={style.cta} style={{ top: item.props.top, left: item.props.left }}>{item.text}</button>
                            </div>
                        }
                    </div>
            ))}
        </div>

    );
}


