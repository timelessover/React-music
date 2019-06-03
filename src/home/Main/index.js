import React from 'react'
import style from './style/index.module.scss'
import { inject, observer } from 'mobx-react'
import { NavLink, withRouter,Route,Switch,Redirect } from 'react-router-dom'
// import asyncComponent from '@/utils/AsyncComponent'

@inject('appStore') @withRouter @observer
class Main extends React.Component {
    toggleExpand = () => {
        this.props.appStore.toggleExpand()
    }
    render () {
        const {isExpandSider,playlist} = this.props.appStore
        return (
            <div className={style.container} style={{transform: `translateX(${isExpandSider ? '80%' : 0})`}}>
                <div className={style.header}>
                    <span className={'icon-weibiaoti12 iconfont'} onClick={this.toggleExpand}/>
                </div>
                <ul className={style['navigation-menu']}>
                    <li><NavLink to={'/my'} activeClassName={style.active}>我的</NavLink></li>
                    <li><NavLink to={'/find'} activeClassName={style.active}>发现</NavLink></li>
                    <li><NavLink to={'/toplist'} activeClassName={style.active}>排行榜</NavLink></li>
                    <li><NavLink to={'/search'} activeClassName={style.active}>搜索</NavLink></li>
                </ul>
                <div className={style.content} style={{bottom:playlist.length ? 60 : 0}}>
                    <Switch>
                        <Route path={'/my'} component={MyPage}/>
                        <Route path={'/find'} component={FindPage}/>
                        <Route path={'/toplist'} component={TopListPage}/>
                        <Route path={`/sheet/:id`} component={SheetPage}/>
                        <Route path={`/search`} component={SearchPage}/>
                        <Route path={`/singer/:id`} component={SingerPage}/>
                        <Route path={`/album/:id`} component={AlbumPage}/>
                        <Route path={`/playlists`} component={PlayListsPage}/>
                        <Route path={`/artists`} component={ArtistsPage}/>
                        <Route path={`/mv/:id`} component={MVPage}/>
                        <Route path={`/history`} component={HistoryPage}/>

                        <Redirect exact from={'/'} to={'/find'}/>
                    </Switch>
                </div>
                <Player/>

                {isExpandSider && <div className={style.mask} onClick={this.toggleExpand}/>}
            </div>
        )
    }
}

export default Main