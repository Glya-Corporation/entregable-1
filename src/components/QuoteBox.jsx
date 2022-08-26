import { useState } from "react";

const QuoteBox = ({ info, index, colors }) => {

    

    return (
        <div className="cart" style={{color: `${colors}`}}>
            <div className="quote"><span class="material-symbols-outlined quotes">format_quote</span></div>
            <div className="phrases"><span>{info[index].quote}</span></div>
            <div className="author">{info[index].author}</div>
            <div className="relleno"></div>
        </div>
    );
};

export default QuoteBox;