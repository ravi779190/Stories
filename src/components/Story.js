import '../Global.scss';
import style from '../style/Story.module.scss'
import React, { useRef } from "react";

export default function Story({ story,length, callback,}) {
    const divRef = useRef(null);
    const _handleClick = (e, callback, length) => {
        const divWidth = divRef.current.getBoundingClientRect().width;
        const halfDivWidth = divWidth / 2;
        const mouseXPos = e.nativeEvent.offsetX;
        if (mouseXPos <= halfDivWidth) {
            callback('left', length);
        } else {
            callback('right', length);
        }
    };
    console.log('story.layers : ', story.layers)
    return (
        <div className={style.story} onClick={(e) => _handleClick(e, callback, length)} ref={divRef}>
            {story.layers.map((item, i) => (
                <div className={style.storyContainer}>
                    {item.type === "content" && 
                        <img className={style.image +'----'+i+ (i > 0 ? 'fade-in' : '')} src={item.url} alt={'story-image'}
                            height={item.props.height} width={item.props.width} />}
                    {item.type === "text" && 
                        <div className={style.htmlContainer} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                    }
                    {item.type === "cta" && 
                        <div className={style.ctaContainer}>
                            <button className={style.cta}>{item.text}</button>
                        </div>
                    }
                </div>
            ))}
        </div>

    );
}
