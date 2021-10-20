import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TestDetail = () => {
    const { testid } = useParams();
    const [test, setTest] = useState({});
    useEffect(() => {

        fetch('/diagnosticServices.JSON')
            .then(res => res.json())
            .then(data => {
                const resultFound = data.find(testNumber => testNumber.id == testid)
                setTest(resultFound);

            });

    }, [])
    return (
        <div>
            <div className="mx-auto w-1/3 p-8 rounded overflow-hidden shadow-lg">
                <img className="w-full" src={test.img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{test.testName}</div>
                    <p className="text-gray-700 text-base">
                        {test.description}
                    </p>
                    <small className="text-blue-500 font-bold">Cost: $ {test.cost}</small>


                </div>
            </div>

        </div>
    );
};

export default TestDetail;