

    import React from 'react'
    import netflixLogo from '../../assets/Images/icons/nflxlogo.png'
    import notFoundSytles from './notfound.module.css'
    import { Link } from 'react-router-dom';


    function NotFound() {

            return (
                <div className={notFoundSytles.notfound} >

                    <div  style={{backgroundColor:'#111', height:'10vh',display:'flex',alignItems:'center'}}>
                        
                            <div className="netflix-logo" style={{paddingLeft:'20px'}}>
                                <img src={netflixLogo} alt="Netflix-Logo" />
                            </div>    

                    </div>

                    <div className={notFoundSytles.description}>
                           <h1>Lost Your way ?</h1>

                            <p> Oops! The page you're looking isn't found. But fear not! Our thrilling homepage awaits, ready for an exciting adventure!
                            </p>

                            <div className={notFoundSytles.butn}><button><Link to='/'>Netflix Home</Link></button></div>
                    </div>
                                

                </div>
            )
    }

export default NotFound;