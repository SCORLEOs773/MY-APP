import React from 'react'
// import PropTypes from 'prop-types';

export default function About(props) {

    return (
        <div>
            <div className="accordion m-5" id="accordionExample" style={{ height: "100vh" }}>
                <div className={`accordion-item bg-${props.mode}-subtle`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button text-${props.textMode} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Q: What is the purpose of the TextUtills App?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>A:</strong> The TextUtills App is designed to provide users with a wide range of text-related tools and utilities to enhance their productivity and simplify their workflow. Whether you need to format text, analyze its properties, or generate specific types of content, this app offers a comprehensive suite of features to meet your needs.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}-subtle`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button text-${props.textMode} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q: What are some key features of the TextUtills App?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>A:</strong> The TextUtills App comes equipped with various powerful features to assist users in manipulating and managing text effectively. Some key features include:
                            <ul>
                                <li>
                                    Text Formatting: This feature allows users to easily modify the formatting of their text, such as changing the font style, size, color, and alignment.
                                </li>

                                <li>
                                    Word Count and Character Count: This utility provides users with accurate word and character counts for their text.
                                </li>

                                <li>
                                    Language Translation: With the language translation feature, users can effortlessly translate text between multiple languages.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}-subtle`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button text-${props.textMode} bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q: How can the TextUtills App simplify proofreading and editing tasks?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>A:</strong> The TextUtills App simplifies proofreading and editing through its spell and grammar check, plagiarism checker, and readability analysis features.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
