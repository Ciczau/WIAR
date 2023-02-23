import React from "react";

const FAQ = ({faq, index, toggleFAQ}) => {
    return (
        <div className={"faq " + (faq.open ? 'open' : '')} key={index} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
               {faq.question}
            </div>
            <div className="faq-answer">
                <span className="vertical-line1"/>
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQ;