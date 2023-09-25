import '../Global.scss';
import style from '../style/Story.module.scss'
import StoryCTA from './StoryCTA';
import StoryImage from './StoryImage';
import React, { useRef } from "react";

export default function Story({ story, callback, key } ) {
    const divRef = useRef(null);
    const _handleClick = (e, callback )=> {
        const divWidth = divRef.current.getBoundingClientRect().width;
        const halfDivWidth = divWidth / 2;
        const mouseXPos = e.nativeEvent.offsetX;
        if (mouseXPos <= halfDivWidth) {
          callback('left');
        } else {
          callback('right');
        }
      };

    return (
        <div className={style.story} onClick={(e) => _handleClick(e, callback)} ref={divRef}>
            <StoryImage image={story.image} />
            <div className={style.subContainer}>
                <div className={style.htmlContainer} dangerouslySetInnerHTML={{ __html: story.text.text }}></div>
                <StoryCTA cta={story.cta} />
            </div>
        </div>

    );
}
