import React from 'react'
import Navbar from "./Navbar/Navbar";

type MapPropsType = {

}

type DispatchPropsType = {

}

type PropsType = {}

const Header: React.FC<PropsType> = (props) => (
    <div>
        <Navbar {...props} />
    </div>
)

export default Header