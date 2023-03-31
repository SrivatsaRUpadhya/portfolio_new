import { Navbar, Text, Link, Switch } from "@nextui-org/react";
import { useRouter } from "next/router";
import DarkIconComponent from "@/assets/darkIcon";
import LightIconComponent from "@/assets/lightIcon";
import { Dispatch, SetStateAction } from "react";

function NavbarComponent({props}:{props:{IsDark:boolean, setIsDark:Dispatch<SetStateAction<boolean>>}}) {

  type link = {
    text: string,
    link: string
  }
  const links: link[] = [
    {
      "text": 'Home',
      "link": '/'
    },
    {
      "text": 'About',
      "link": '/about'
    },
    {
      "text": 'Projects',
      "link": '/projects'
    },
    {
      "text": 'Contact',
      "link": '/contact'
    },
  ]
  const router = useRouter();
  return (
    <>
      <Navbar isBordered={true} variant="floating">
        <Navbar.Brand>

        </Navbar.Brand>
        <Navbar.Content activeColor="primary" hideIn="xs" variant="highlight-rounded">
          {links.map((navlink) =>
            <Navbar.Link
              isActive = {router.pathname === navlink.link ? "true" : undefined}
              href={navlink.link}>{navlink.text}
            </Navbar.Link>)}
        </Navbar.Content>
        <Navbar.Content>
          <Switch
            iconOff = {<DarkIconComponent/>}
            iconOn = {<LightIconComponent/>}
            onChange = {()=>props.setIsDark(!props.IsDark)}
          />
        </Navbar.Content>
      </Navbar>
    </>
  )
}

export default NavbarComponent;
