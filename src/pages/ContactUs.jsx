import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailicon from "../assets/email.svg";
import telephoneicon from "../assets/telephone.svg";
import locationicon from "../assets/location.svg";
import { ImSpinner9 } from "react-icons/im";

export default class ContactUs extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
		isSubmitted: false,
		isLoading: false,
		successMessage: "",
	};

	onChangeHandle = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.setState({
			isLoading: true,
		});
		axios
			.post("https://contact-nodeberry.herokuapp.com/contacts/form/nflabs", {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				subject: this.state.subject,
				message: this.state.message,
			})
			.then((response) => {
				console.log(response);
				if (response.data.error === false) {
					this.setState({
						firstName: "",
						lastName: "",
						email: "",
						subject: "",
						message: "",
						isSubmitted: true,
						isLoading: false,
						successMessage: "Thanks for contacting us! We will be in touch with you shortly.",
					});
				} else
					this.setState({
						firstName: "",
						lastName: "",
						email: "",
						subject: "",
						message: "",
						isSubmitted: true,
						isLoading: false,
						successMessage: response.data.message,
					});
			})
			.catch((error) => {
				if (error) {
					this.setState({
						firstName: "",
						lastName: "",
						email: "",
						subject: "",
						message: "",
						isSubmitted: true,
						isLoading: false,
						successMessage:
							"We are unable to process this request at the moment, Please try again later.",
					});
				}
			});

		setTimeout(() => {
			this.setState({
				successMessage: "",
			});
		}, 6000);
	};
	render() {
		const { firstName, lastName, email, subject, message, isLoading, isSubmitted, successMessage } =
			this.state;
		return (
			<div>
				<Navbar />
				<div className="products-wrapper">
					<div className="container">
						<h1>Contact Us</h1>
						<p>Get in touch and let us know how we can help you.</p>
					</div>
					<div className="container contact-form-container">
						<form className="form" onSubmit={this.submitHandler}>
							<div className="two-box">
								<div className="container1 form-group">
									<input
										type="text"
										name="firstName"
										value={firstName}
										placeholder="First Name"
										onChange={this.onChangeHandle}
										required
									/>
								</div>
								<div className="container2 form-group">
									<input
										type="text"
										name="lastName"
										value={lastName}
										placeholder="Last Name"
										onChange={this.onChangeHandle}
										required
									/>
								</div>
							</div>
							<div className="two-box">
								<div className="container1 form-group">
									<input
										type="email"
										name="email"
										value={email}
										placeholder="Email Id"
										onChange={this.onChangeHandle}
										required
									/>
								</div>
								<div className="container2 form-group">
									<input
										type="text"
										name="subject"
										value={subject}
										placeholder="Subject"
										onChange={this.onChangeHandle}
										required
									/>
								</div>
							</div>
							<div className="form-group">
								<textarea
									name="message"
									cols="30"
									rows="4"
									value={message}
									placeholder="Message"
									onChange={this.onChangeHandle}
									required
								></textarea>
							</div>
							<div className="form-group">
								<button type="submit">
									{isLoading && <ImSpinner9 className="loader" />}
									Submit
								</button>
							</div>
							{isSubmitted && (
								<p id="success" className="success-message">
									{successMessage}
								</p>
							)}
						</form>
					</div>
					<div className="contacts">
						<div className="contacts-info">
							<div className="contact-icon-circle">
								<img src={locationicon} alt="Location Icon" />
							</div>
							<p>
								<a
									href="https://goo.gl/maps/puCRkbjmhTpSQ5Ks9"
									target="_blank"
									rel="noreferrer noopener"
								>
									Kemp House, 152-160 City Road, <br /> London, UK EC IV 2NX
								</a>
							</p>
						</div>
						<div className="contacts-info">
							<div className="contact-icon-circle">
								<img src={telephoneicon} alt="Telephone Icon" />
							</div>
							<p>
								<a href="tel:+65 8855 6655">+65 8855 6655</a>
							</p>
						</div>
						<div className="contacts-info">
							<div className="contact-icon-circle">
								<img width="22px" src={emailicon} alt="Email Icon" />
							</div>
							<p>
								<a href="mailto:support@nflabs.io">support@nflabs.io</a>
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
