import React, { useEffect, useState } from 'react';
import Test from '../Test/Test';

const Services = () => {
    const [tests, setTests] = useState([]);
    useEffect(() => {
        fetch('/diagnosticServices.JSON')
            .then(res => res.json())
            .then(data => setTests(data));
        console.log(tests);
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    tests.map(test => <Test
                        key={test.id}
                        test={test}
                    ></Test>)
                }
            </div>
        </div>
    );
};

export default Services;