import { useState, useEffect } from 'react';
import '../Global.scss';
import Slide from './Slides';
import style from '../style/Story.module.scss'
import Loader from './Loader';
export default function Story({ story, length, callback, thumbnail, title, createdAt }) {

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [uploadAgo, setUploadAgo] = useState('');
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
                setClicked(true)
                if (checkBundleNext === false) {
                    return
                }
                setCount(0)
                return;
            }
            setCount(count + 1);
        }
    }

    // const duration = 3000;
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         storyAction('autoPlay', length);
    //     }, duration);
    //     return () => clearInterval(interval);
    // }, [count])

    useEffect(() => {
        if (createdAt) {
            const date = new Date();
            const currenTime = date.getHours()
                + ':' + date.getMinutes()
                + ":" + date.getSeconds();
    
            function hmsToSeconds(s) {
                var b = s.split(':');
                return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
            }
            function secondsToHMS(secs) {
                function z(n) { return (n < 10 ? '0' : '') + n; }
                var sign = secs < 0 ? '-' : '';
                secs = Math.abs(secs);
                return sign + z(secs / 3600 | 0) + ':' + z((secs % 3600) / 60 | 0) + ':' + z(secs % 60);
            }
    
            let timeDifference = secondsToHMS(hmsToSeconds(createdAt) - hmsToSeconds(currenTime)).split(':')
            if (timeDifference[0] <= 0) {
                setUploadAgo(timeDifference[1] + 'm')
            } else if (timeDifference[1] <= 0) {
                setUploadAgo(timeDifference[2] + 's')
            } else {
                setUploadAgo(timeDifference[0] + 'h')
            }
        }
    },[createdAt])
    

    return (
        <div>
            <div className={'loader_container'}>
                {/* {getLoader} */}
                <Loader length={length} isLoading={count} isclick={clicked} />
            </div>
            <div className={style.bundle_container}>
                <img src={thumbnail}
                    alt="user-image" height={50} width={50}
                    className={style.bundle_image} />
                <div className={style.title}>{title}</div>
                <div className={style.time}>{uploadAgo}</div>
            </div>
            <Slide slide={story[count]} count={count} length={length} callback={storyAction} />
        </div>
    );
}


