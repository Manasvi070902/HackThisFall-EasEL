import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import "./Home.css"

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/video/${url[url.length - 1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/video/${url}`
		}
	}

	render() {
		return (
			<div class="services-section">
				<div class="inner-width">


					<h1 class="section-title">EasEL Classroom</h1>

					<div class="border"></div>
					<div class="services-container">
						<div className="container2">


							<div>

								<p style={{ fontWeight: "400", color: "white", fontSize:"2rem" }}>Conduct and join meets, conferences and classes!</p>
							</div>

							<div style={{
								background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
								textAlign: "center", margin: "auto", marginTop: "100px"
							}}>
								<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Begin or join a class</p>
								<Input placeholder="URL" onChange={e => this.handleChange(e)} />
								<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;