import React from 'react';
import { Link } from 'react-router-dom';

const Test = (props) => {
    const { id, testName, description, cost, img } = props.test;
    return (
        <div>

            <div className=" p-8 rounded overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{testName}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                    <small className="text-blue-500 font-bold">Cost: $ {cost}</small>
                    <br />
                    <br />
                    <Link to={`/test/${id}`}>Book Test</Link>

                </div>
            </div>

        </div>
    );
};

export default Test;