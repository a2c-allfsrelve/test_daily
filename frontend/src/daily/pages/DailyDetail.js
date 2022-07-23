import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDailyDetail } from '../api/getDaily';
import { marked } from 'marked';
import { CategoryList } from '../components/CategoryList';
export default marked;

export const DailyDetail = () => {
    const initialState = {
        date: '',
        univ: '',
        study: '',
        other: '',
        first_meet: '',
        wanna_do: '',
        summary: '',
    };

    const [detail, setDetail] = useState(initialState)
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        getDailyDetail(id)
        .then(d => {
            setDetail(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])
    
    return(
        <div>
            {loading ?
                <h1>loading....</h1>
                :
                <div className='detail_daily'>
                    <h1 className='detail_name'>{detail.date}</h1>
                    <h2 className='about_school'>大学のこと</h2>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.univ}`)}` }} className="detail-content"></div>
                    <h2 className='about_study'>勉強</h2>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.study}`)}` }} className="detail-content"></div>
                    <h2 className='about_etc'>その他</h2>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.other}`)}` }} className="detail-content"></div>
                    <h2 className='about'>初めましてだったこと</h2>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.first_meet}`)}` }} className="detail-content"></div>
                    <h2 className='do_about'>やりたいこと</h2>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.wanna_do}`)}` }} className="detail-content"></div>
                    <h2 className='about_day'>1日のまとめ</h2>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.summary}`)}` }} className="detail-content"></div>
                </div>
            }
            <CategoryList />
        </div>
    )
    
}