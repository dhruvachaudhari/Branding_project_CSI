// import React from 'react'
// import '../styles/contact.css'

// function Contact() {
//     return (
//         <div className='main_div'>
//             {/* <h1>Conatct</h1> */}
//             <div >
//                 <form className='form'>
//                     <div className='formcontrol'>
//                         <label htmlFor="name">Name
//                             <input name="name" placeholder='name' />
//                         </label>
//                         <label htmlFor="email">Email
//                             <input name="email" type='email' placeholder='email' />
//                         </label>
//                         <label htmlFor="number">Mobile no.
//                             <input name="number" type='number' placeholder='mobile no.' />
//                         </label>
//                     </div>


//                 </form>
//             </div>
//             <div className='post'>

//             </div>
//         </div>
//     )
// }

// export default Contact


import React from 'react';
import '../styles/contact.css';

function Contact() {
    return (
        <div className='main_div'>
            <form className='form'>
                <div className='form_control'>
                    <label htmlFor="name">Name
                        <input name="name" placeholder='name' />
                    </label>
                </div>
                <div className='form_control'>
                    <label htmlFor="email">Email
                        <input name="email" type='email' placeholder='email' />
                    </label>
                </div>
                <div className='form_control'>
                    <label htmlFor="number">Mobile no.
                        <input name="number" type='number' placeholder='mobile no.' />
                    </label>
                </div>
            </form>
            <div className='post'></div>
        </div>
    );
}

export default Contact;
