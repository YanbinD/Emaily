import React, { Component } from 'react'
//connect the component to redux store L82
import { connect } from 'react-redux';

class Header extends Component {


	renderContent() {
		switch (this.props.auth) {
			case null:
				return ;
			case false:
				// return <a href="/auth/google"> Login with Google &nbsp; </a> 
					return <li><a href="/auth/google" class="waves-effect waves-light btn light-blue lighten-3">
						<span class="black-text">Login with Google</span>
								</a></li>;
						   
			default:
				return "logged in";
		}	
	}

		render() {
			// console.log(this.props);

			return (
			<nav> 
				<div className = "nav-wrapper  pink lighten-3">
					<a href="/" className="brand-logo"> &nbsp;&nbsp;&nbsp; Logo</a>

				
					<ul class="right hide-on-med-and-down">
       				 
					{/* needs to changed if logged in */}
{/*						<li> 
							<a href="/api/auth/google"> Login with Google &nbsp; </a> 
						</li>*/}

						{this.renderContent()}
					</ul>


				</div>
			</nav>
			);
		}
}

//L81 Step3
function mapStateToProps(state) {
	return {auth: state.auth};
}


//L81 step 2
export default connect(mapStateToProps) (Header);


//from materialize CSS library
  // <nav>
  //   <div class="nav-wrapper">
  //     <a href="#" class="brand-logo">Logo</a>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //       <li><a href="sass.html">Sass</a></li>
  //       <li><a href="badges.html">Components</a></li>
  //       <li><a href="collapsible.html">JavaScript</a></li>
  //     </ul>
  //   </div>
  // </nav>