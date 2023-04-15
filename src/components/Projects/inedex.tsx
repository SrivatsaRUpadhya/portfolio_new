import { Card, Grid, Row, Text } from "@nextui-org/react";
import React from "react";
import 'aos';
import Link from "next/link";
import ghLogo from "public/Images/github-mark-white.svg"

export default function ProjectsComponent(): React.ReactElement {
    type project = {
        title: string,
        desc: string,
        link: string,
        ghLink: string,
        image: string
    }
    const projectsList: project[] = [
        {
            title: "Pravis",
            desc: "A cloth store product gallery! Yes that's all it is. I designed it for my dad's cloth shop. It just has a landing page with an about section and some product pages with different catagories of clothes available. This was built using HTML,CSS and PHP. My first project with PHP so expect the code to be very unreadable!",
            link: "https://pravis.co.in",
            ghLink: "",
            image: "/Images/Pravis.png"
        },
        {
            title: "Amazon vs flipkart",
            desc: "Again one of my first project with nodejs and react! Hence it is very messy. It does nothing great except for fetching products from flipkart and amazon using an API from a third party web scrapper and jsut displays the results on either side of the screen, but I love looking at it and feel stupid about my own work sometimes!",
            link: "https://avsf.onrender.com/",
            ghLink: "https://github.com/SrivatsaRUpadhya/Bubbly",
            image: "/Images/AvsF.png"
        },
        {
            title: "Smart Trolley",
            desc: "This is a smart trolley that tries solve the problem of long queues at billing counters at shopping centers. The idea is to have an RFID system with RFID scanners in the shopping carts that scan the RFID tags on products. As the products are dropped into the trolley the bill is updated. This is a project that is currently in progress",
            link: "",
            ghLink: "",
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
    ];
    return (
        <>
            <Grid.Container gap={2} justify="space-between">
                {
                    projectsList.map((project, key) => {
                        return (
                            <Grid xs={12} sm={6} md={4} lg={3}>
                                <Card isPressable key={key}>
                                    <Card.Header as={"div"} css={{ "margin": "auto", "width": "fit-content" }}>{project.title}</Card.Header>
                                    <Card.Body css={{ p: 20 }}>
                                        <Card.Image
                                            src={project.image}
                                            objectFit="scale-down"
                                            width="100%"
                                            alt={project.title}
                                        />
                                    </Card.Body>
                                    <Card.Body css={{ p: 20, 'text-align': "center" }}>
                                        <p>{project.desc}</p>
                                    </Card.Body>
                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                        <Row wrap="wrap" justify="space-between" align="center">
                                            <Link href={project.link}><Text b>View</Text></Link>
                                            <Link href={project.ghLink}>
                                                <Text b>GitHub</Text>
                                            </Link>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid.Container>
        </>
    )
}