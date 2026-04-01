import React, { use, useEffect, useState } from 'react';
import Card from '../Card';

const CardSection = ({ toolsPromise, cart, setCart }) => {

    const toolsData = use(toolsPromise);

    const [allTools, setAllTools] = useState([]);

    useEffect( ()=>{
        setAllTools(toolsData)
    }, [toolsData])

    // console.log(allTools)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                toolsData.map(tool => <Card key={tool.id} tool={tool} cart={cart} setCart={setCart} ></Card>)
            }
        </div>
    );
};

export default CardSection;