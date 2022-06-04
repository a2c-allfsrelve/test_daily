import React from 'react';
import { Link } from 'react-router-dom';

// import img1 from '../../images/daily/hiyoko_perfect.png';
// import img2 from '../../images/daily/hiyoko_good.png';
// import img3 from '../../images/daily/hiyoko_soso.png';
// import img4 from '../../images/daily/hiyoko_bad.png';

export const DailyContent = (daily) => {
    let eva;
    if (daily.evaluation === 'perfect') {
        eva = "hello";
    } else if (daily.evaluation === 'good') {
        eva = "good night";
    } else if (daily.evaluation === 'soso') {
        eva = "see you";
    } else {
        eva = "good morning";
    }

    return (
        <div>
            {/* /が足りなかった */}
            <Link to={`/daily/${daily.id}`}> <h1>{daily.date}</h1> </Link>
            {/* <img src={eva}/> */}
        </div>
    )
}