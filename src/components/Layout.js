import React from 'react';
/* components */
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleSidebar = () => {
      setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} /> 
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {children}
        </>
    )
}

export default Layout;
