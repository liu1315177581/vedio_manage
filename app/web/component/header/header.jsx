import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd';
import './header.css'


const Search = Input.Search;

 
export default class Header extends Component{
	
	constructor(props){
		super(props)
	
		let that = this;
		that.state = {
			logo_url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1900023495,3593820387&fm=27&gp=0.jpg'
		}
		that.searchMessageFun = that.searchMessageFun.bind(that)
	}

	searchMessageFun(data){
		console.log(data)
	}

	render(){
		return(
			<div className="header">
				<div className="container">
					<div className="w3layouts_logo">
						<a href="index.html"><h1>New<span>Movies</span></h1></a>
					</div>
					<div className="w3_search">
						<input type="text" name="Search" placeholder="请输入查询的视频" required=""/>
						<input type="submit" value="Go"/>
					</div>
					<div className="w3l_sign_in_register">
						<ul>
							
						</ul>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>
		)
	}
}