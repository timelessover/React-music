import React from 'react'
import {withRouter} from 'react-router-dom'
import style from './style/index.module.scss'
import {get} from '@/utils/request'
import NavBar from '@/components/NavBar'
import HeaderInfo from '@/components/HeaderInfo'
import Content from './Content'

@withRouter
class Detail extends React.Component{
    state = {
        detail:{},
        loading:false //页面loading
    }

    componentDidMount(){
        const id = this.props.match.params.id
        this.getDetail(id)
    }
    getDetail = async (id)=>{
        this.setState({
            loading:true
        })
        const res = await get(`/songList?id=${id}`)
        
        this.setState({
            detail: res.data || {},
            loading:false
        })
    }
    render(){
        const {loading,detail} = this.state
        return (
            <div className={style.container}>
                <div>
                    <NavBar>{detail.name}</NavBar>
                    <HeaderInfo info={detail}/>
                    <Content info={detail} loading={loading}/>
                </div>
            </div>
        )
    }
}

export default Detail