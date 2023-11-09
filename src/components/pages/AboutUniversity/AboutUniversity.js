import React from "react";
import Header from "../../common/Header/Header";
import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import "./AboutUniversity.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const AboutUniversity = () => {
	return (
		<div className="home">
			<Header />
			<div className="container" id="aboutContainer">
				<Grid container justify="center">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Grid
								container
								justify="center"
								alignItems="flex-start"
								className="p-3 ">
								<Grid item xs={8} md={4}>
									<Grid
										container
										justify="center"
										alignContent="center">
										<CardMedia
											component="img"
											style={{ maxWidth: "150px" }}
											image="gbu_logo.png"
											label={"Logo"}
										/>
									</Grid>
								</Grid>
								<Grid item xs={12} md={12}>
									<Grid container justify="center">
										<CardContent className="text-center">
											<Typography
												gutterBottom
												variant="h3"
												component="h2">
												{"University of Texas at Arlington"}
											</Typography>
											<Typography
												gutterBottom
												variant="subtitle1">
												<a
													href="https://www.uta.edu/about"
													target="_blank"
													rel="noreferrer noopener">
													{
														"Official University Website"
													}
													<OpenInNewIcon fontSize="small" />
												</a>
											</Typography>
										</CardContent>
									</Grid>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Grid container justify="center" className="my-3">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Container className="px-5 py-4">
								<Typography
									variant="h4"
									className="text-center pb-3">
									About University
								</Typography>
								<Typography variant="body2">
									{
										"The University of Texas at Arlington is a comprehensive teaching, research, and public service institution dedicated to the advancement of knowledge through scholarship and creative work."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"The University is committed to providing access and ensuring student success, and to a culture of innovation, entrepreneurship, and commercialization of discoveries by our community of scholars."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"The University promotes lifelong learning through its academic, continuing education, and experiential learning programs. The faculty, staff, and student community shares diverse cultural values that foster inclusivity and cultivate mutual respect."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"UTA is a Model 21st -Century Urban Research University, setting the standards for innovation, global leadership and diversity.Number 1 in Dallas-Fort Worth for return on investment. UTA makes a lot of things possible. We connect students with their careers. We empower our faculty to pursue their interests. And we supply the world with fresh ideas and determined talent. What makes all of those things possible is our strong central organization that operates with efficiency, clarity, and integrity."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"UTA campus spans 420 acres and includes more than 100 buildings and state-of-the-art facilities. Located in the heart of the Dallas-Fort Worth Metroplex, we’re able to offer flexible, innovative educational opportunities."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Through academic, internship, and research programs, our students receive real-world experiences that help them contribute to their community and, ultimately, the world. Each year, over 41,000 students engage in in-person and online coursework as they pursue studies in the 180-plus baccalaureate, master's, and doctoral degree programs we offer."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"UTA offers a vibrant experience where students can connect with each other and their campus. They live, learn, and explore together in an inclusive community designed to inspire.From sport clubs to counseling and psychological services, we want our students to maintain a healthy lifestyle. Our health and recreational programs give students an outlet to decompress through mental and physical wellness."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"UTA offers several programs that focus on empowering students at every level and from all walks of life. Whether you’re in high school or community college – these programs foster academic advancement and career-ready leadership skills."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Our nine colleges offer a wide variety of disciplines with more than 180 degree programs to choose from. Take the first step in joining more than 270,000 UTA alumni who forged a new path by discovering an academic experience deeply rooted in excellence."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"As a Carnegie R1 institution, research at The University of Texas at Arlington endeavors to improve the world we live in through the relentless pursuit of game-changing discovery.UTA's impressive research centers are developing eco-friendly alternative energy processes, addressing major health threats, and exploring the mysteries of the universe, among other things."
									}
								</Typography>
							</Container>
						</Card>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
