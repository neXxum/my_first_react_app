import React from 'react'
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import Header from "./Header";

type PropsType = {

}

class HeaderContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return <Header {...this.props} />
    }
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {}

const mapStateToProps = (props: AppStateType) => ({

})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {}
)(HeaderContainer)