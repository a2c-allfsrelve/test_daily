import React from 'react';

export const Contact = () => {
    return(
        <div className="controls">
            <form>
            <label className="contact_label" htmlFor="name">
                <p>お名前（必須）</p>
                <input type="text" name="name" id="name"/>
            </label>
            <label className="contact_label" htmlFor="mail">
                <p>メールアドレス（必須）</p>
                <input type="text" name="mail" id="mail" />
            </label>
            <label className="contact_label" htmlFor="twitter" >
                <p>Twitterアカウント</p>
                <input type="text" name="twitter" id="teitter" />
            </label>
            <label className="contact_label" htmlFor="oshi">
                <p>推し</p>
                <input type="text" name="oshi" id="oshi" />
            </label>
            <label className="contact_label" htmlFor="otoiawase">
                <p>お問い合わせ内容（必須）</p>
                <textarea value="" name="otoiawase" id="otoiawase" ></textarea>
            </label>
            <div className='sbm_button'>
                <input type="submit" value="Submit" />
            </div>
            </form>
        </div>
    )
  }