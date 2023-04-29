import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium placeat voluptatem porro, ullam quisquam quod animi! Porro dolore tempore, necessitatibus molestiae expedita aspernatur tempora labore debitis assumenda ducimus, numquam fugiat laboriosam harum ea mollitia earum vero? Recusandae id assumenda illo ducimus repellendus necessitatibus corrupti illum, ipsa laboriosam sapiente, facere placeat rem optio porro cumque, veritatis doloribus. Error molestiae adipisci recusandae!</p>

            <p>Go back to <Link to='/register'>Register?</Link></p>
        </div>
    );
};

export default Terms;