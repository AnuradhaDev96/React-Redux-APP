import React from 'react';
import DynamicColor from '../HigherOrderComponents/DynamicColor';

//UI component | Stateless
const About = () => {
    return (
        <div className='container'>
            <h4 className='center'>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nunc vel odio pulvinar pharetra. Nunc elit quam, tincidunt id tortor ut, tincidunt interdum tortor. Sed efficitur est ac placerat accumsan. Ut aliquam augue finibus sapien congue pellentesque. Integer pulvinar eros quam, ac bibendum arcu fermentum ac. In cursus, risus in dapibus rutrum, nisi nisi aliquet metus, ac auctor sapien arcu a neque. Maecenas nulla arcu, commodo sed tortor a, finibus bibendum turpis. Proin blandit leo ac pulvinar commodo.</p>
        </div>
    )
}

export default DynamicColor(About);