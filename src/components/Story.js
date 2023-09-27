import { useState, useEffect } from 'react';
import '../Global.scss';
import Slide from './Slides';
import style from '../style/Story.module.scss'
export default function Story({ story, length, callback }) {

    const [count, setCount] = useState(0);
    const storyAction = (action, length) => {
        if (action === 'prev') {
            if (count === 0) {
                callback(action, length);
                return;
            }
            setCount(count - 1);
        } else if (action === 'next' || action === 'autoPlay') {
            if (length === count + 1) {
                let checkBundleNext = callback(action, length);
                if (checkBundleNext === false) {
                    return
                }
                setCount(0)
                return;
            }
            setCount(count + 1);
        }
    }

    const duration = 3000;
    useEffect(() => {
        const interval = setInterval(() => {
            storyAction('autoPlay', length);
        }, duration);
        return () => clearInterval(interval);
    }, [count])

    const getMeProgressBar = () => {
        for (let i = 0; i < length; i++) {
            return
        }
    }
    const width = (100 / length + '%');
    //     const progressAnimationStrike = `@keyframes progressAnimationStrike {
    //         from { width: 0 }
    //         to   { width: 100% }
    //    }`
    //     const myStyle = {
    //         progress:{
    //             background: "rgba(0, 0, 0, 0.25)",
    //             boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08)",
    //             margin: "0px 5px"
    //         },
    //         animation: {
    //             backgroundColor: "white",
    //             width: "100%",
    //             animation: `${progressAnimationStrike} 3s`,
    //             borderRadius: "10px 0px 0px 10px"
    //         },
    //     }
    // console.log("story : ", story)

    return (
        <div>
            <Slide slide={story[count]} count={count} length={length} callback={storyAction} />
        </div>
    );
}


