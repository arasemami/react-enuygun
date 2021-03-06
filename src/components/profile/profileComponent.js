import React, {Component} from 'react';     
import './style.scss';

class ProfileComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			data: this.props.location.state.data
		};
	} 
	backToHistory() {
		this.props.router.goBack();
	}

	render() { 
		const { 
			firstName, 
			lastName, 
			jobTitle, 
			avatar, 
			vote, 
			mobile, 
			email, 
			address, 
			summary 
		} = this.props.location.state.data;

		return ( 
			<div className="container-fluid">
				<div className="avatar-container" >
					<div className="btn-back" onClick={() => this.backToHistory()}>
						<i class="fas fa-chevron-left"></i>
					</div>
					<div className="bg-image" style={{backgroundImage: 'url(' + avatar  + ')'}}></div>
					<div className="employee-avatar" style={{backgroundImage: 'url(' + avatar  + ')'}}></div>
					<h2>{firstName } {lastName}</h2>
					<p>{jobTitle}</p>
					<p>Total Vote: {vote}</p>
				</div>
				<div className="container">
					<div className="card-full">
						<h2>Contact</h2>
						<hr className="silver"/>
						<div className="contact-container">
							<div className="contact-box">
								<p>Email</p>
								<h3>{email}</h3>
							</div>
							<div className="contact-box">
								<p>Mobile</p>
								<h3>{mobile}</h3>
							</div>
							<div className="contact-box">
								<p>Address</p>
								<h3>{address}</h3>
							</div>
						</div>
					</div>
					<div className="card-full">
						<h2>summary</h2>
						<hr className="silver"/>
						<p className="summary">{summary}</p>
					</div>
				</div>
       
			</div>
		);
	}
}
 
export default ProfileComponent;