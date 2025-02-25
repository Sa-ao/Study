import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header' //一般组件
import MyNavLink from './components/MyNavLink' //一般组件
import Home from './pages/Home' //路由组件
import About from './pages/About' //路由组件

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header></Header>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html,使用a标签进行跳转页面 */}
							{/* {<a className="list-group-item active" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a>} */}
							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink  to="/home">home</MyNavLink>
							<MyNavLink  to="/about">About</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">

								{/* 注册路由 */}
								<Switch>
								{/* 当出现多个路由时，最好使用Switch组件包裹，这会使匹配到一个路由后不会继续往下匹配，效率更高 */}
								<Route path="/home" component={Home} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />
								<Route path="/about" component={About} />

								</Switch>
								
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
