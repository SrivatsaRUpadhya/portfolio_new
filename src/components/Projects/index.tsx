import { Card, Grid, Row, Text } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import ghLogo from "public/Images/github-mark-white.svg";

export default function ProjectsComponent(): React.ReactElement {
	type project = {
		title: string;
		desc: string;
		link: string;
		ghLink: string;
		image: string;
	};
	const projectsList: project[] = [
		{
			title: "Pravis",
			desc: "A cloth store product gallery! Yes that's all it is. I designed it for my dad's cloth shop. It just has a landing page with an about section and some product pages with different catagories of clothes available. This was built using HTML,CSS and PHP. My first project with PHP so expect the code to be very unreadable!",
			link: "https://pravis.co.in",
			ghLink: "",
			image: "/Images/Pravis.png",
		},
		{
			title: "Amazon vs flipkart",
			desc: "Again one of my first project with nodejs and react! Hence it is very messy. It does nothing great except for fetching products from flipkart and amazon using an API from a third party web scrapper and just displays the results on either side of the screen, but I love looking at it and feel stupid about my own work sometimes!",
			link: "https://avsf.onrender.com/",
			ghLink: "https://github.com/SrivatsaRUpadhya/Bubbly",
			image: "/Images/AvsF.png",
		},
		{
			title: "Smart Trolley",
			desc: "This is a smart trolley that tries solve the problem of long queues at billing counters at shopping centers. The idea is to have an RFID system with RFID scanners in the shopping carts that scan the RFID tags on products. As the products are dropped into the trolley the bill is updated.",
			link: "https://smart-trolley.vercel.app/",
			ghLink: "https://github.com/SrivatsaRUpadhya/smart_trolley",
			image: "Images/Smart-Trolley.png",
		},
		{
			title: "Robotics Club",
			desc: "A website that manages registrations and events conducted by the robotics club of NMAMIT Nitte. This was built using React,Prisma and Express. It has a login system for admins and users. It has also has an attendace system that uses QR codes given to each user. Admins can create events and users can register for the events in the website.",
			link: "https://roboticsclubnitte.com",
			ghLink: "https://github.com/SrivatsaRUpadhya/rbclub-server",
			image: "/Images/Roboticsclub.png",
		},
		{
			title: "Speak Stocks",
			desc: "A website that displays information of a stock when you speak the name of the stock. It uses the speech recognition API to get the name of the stock and then fetches the data from an API and displays it. It also has a search bar to search for stocks. This was built using Nextjs.",
			link: "https://voicestock.vercel.app",
			ghLink: "https://github.com/SrivatsaRUpadhya/stock-scraper",
			image: "/Images/Speakstocks.png",
		},
		{
			title: "Paperless jury",
			desc: "A paperless jury system for a cultural event developed with the team at finiteloop club NMAMIT. Features included participant registrations and a portal for the jury. It was built using T3 stack.",
			link: "https://yakshagavishti.in",
			ghLink: "https://github.com/Kalaasangama/yakshagavishti-website",
			image: "/Images/Yakshagavishti.png",
		},
	];
	return (
		<>
			<Grid.Container gap={2} >
				{projectsList.map((project, key) => {
					return (
						<Grid xs={12} sm={6} md={4} lg={4}>
							<Card isPressable key={key}>
								<Card.Header
									as={"div"}
									css={{
										margin: "auto",
										width: "fit-content",
									}}
								>
									{project.title}
								</Card.Header>
								<Card.Body css={{ p: 20 }}>
									<Card.Image
										src={project.image}
										objectFit="scale-down"
										width="100%"
										alt={project.title}
									/>
								</Card.Body>
								<Card.Body
									css={{ p: 20, "text-align": "center" }}
								>
									<p>{project.desc}</p>
								</Card.Body>
								<Card.Footer
									css={{ justifyItems: "flex-start" }}
								>
									<Row
										wrap="wrap"
										justify="space-between"
										align="center"
									>
										<Link target="_blank" href={project.link}>
											<Text b>Visit</Text>
										</Link>
										{project.ghLink && (
											<Link target="_blank" href={project.ghLink}>
												<Text b>Source Code</Text>
											</Link>
										)}
									</Row>
								</Card.Footer>
							</Card>
						</Grid>
					);
				})}
			</Grid.Container>
		</>
	);
}
