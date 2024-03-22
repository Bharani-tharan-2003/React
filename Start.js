import { useState } from 'react';
import Bloglist from './Bloglist';

const Start = () => {
 
    const [blogs, setname] = useState([
        {title: 'You can do it', body: 'lorem ipsum...', author: 'Lucky', id: 1},
        {title: 'Do somthing differnt', body: 'lorem ipsum...', author: 'ravi', id: 2}, 
        {title: 'Have a nice day', body: 'lorem ipsum...', author: 'Lucky', id: 3},
        {title: 'Have a good day', body: 'lorem ipsum...', author: 'Lucky', id: 4}
 
]);
 

    
    return (  
        <div className="start">
        <Bloglist index={blogs} heading="All should have a great aim" />
        <Bloglist index={blogs.filter((blog ) => blog.author === 'Lucky')} heading="Luckys blogs" />

         </div>
           
    );
        
}
       

 
export default Start;