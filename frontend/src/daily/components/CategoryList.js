import { marked } from 'marked';
import React from 'react';
import { Link } from 'react-router-dom';
export default marked;

export const CategoryList = () => {
    return (
        <div className='category_list'>
            <ul>
                <li key={'univ'}><Link to='/daily/category/univ'>大学</Link></li>
                <li key={'study'}><Link to='/daily/category/study'>勉強</Link></li>
                <li key={'other'}><Link to='/daily/category/other'>その他</Link></li>
                <li key={'first_meet'}><Link to='/daily/category/first_meet'>はじめましてだったこと</Link></li>
                <li key={'wanna_do'}><Link to='/daily/category/wanna_do'>やりたいこと</Link></li>
                <li key={'summary'}><Link to='/daily/category/summary'>1日のまとめ</Link></li>
            </ul>
        </div>
    )
}