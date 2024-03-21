import { useState } from 'react';

const Start = () => {
 
    const [blogs, setname] = useState([
        {title: 'You can do it', body: 'lorem ipsum...', author: 'Bhernish', id: 1},
        {title: 'Do somthing differnt', body: 'lorem ipsum...', author: 'ravi', id: 2}, 
        {title: 'Have a nice day', body: 'lorem ipsum...', author: 'Lucky', id: 3}
]);
 

    
    return (  
        <div className="start">
        {blogs.map((blog) => (
         <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
         </div>
        ))}
        </div>
        
        
        
    );
        
}
       

 
export default Start;