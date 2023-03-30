import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center mb-5 border broder-bottom'>Blogs Q/A</h3>
            <h5>1.Differece Between props and state?</h5>
            <p>-Props are not changeable.It passes data one component to another.
                On the contrary,state are not changeable.It holds the details of components.
            </p>
            <h5>2.How does useState work?</h5>
            <p>-useState is one of react hook which returns an array and it has two value.One is initial or current and another is updated value.It can hold number,array,string value initial state then when a function call which connented with this then it updates the state.</p>

            <h5>3.Purpose of useEffect other than fetching data.??</h5>
            <p>-Other than fetching data useEffect occurs side effects after rendering components.And it also used for avoiding unwanted side effects of components.</p>
            <h5>4.How Does React work?</h5>
            <p>-React works  based on component.In UI react divides the parts of UI in components and render.Then It uses a diffing algorithm which is working when any elements of the UI has benn changed.It also updates the browser dom together.</p>
        </div>
    );
};

export default Blog;