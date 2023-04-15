import { Navbar, Text, Switch } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import DarkIconComponent from "@/assets/darkIcon";
import LightIconComponent from "@/assets/lightIcon";
import { Dispatch, SetStateAction } from "react";

function NavbarComponent({ props }: { props: { IsDark: boolean, setIsDark: Dispatch<SetStateAction<boolean>> } }) {

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
      "link": '#about'
    },
    {
      "text": 'Projects',
      "link": '#projects'
    },
    {
      "text": 'Contact',
      "link": '#contact'
    },
  ]
  const router = useRouter();
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Link href="/"><i><Text className="font-serif">Srivatsa R Upadhya</Text></i></Link>
        </Navbar.Brand>
        <div className="hidden sm:contents">
          <Navbar.Content activeColor="primary" hideIn="xs" variant="highlight-rounded">
            {links.map((navlink, key) =>
              <Navbar.Link
                key={key}
                href={navlink.link}>
                {navlink.text}
              </Navbar.Link>)}
          </Navbar.Content>
          <Navbar.Content>
            <Switch
              checked={props.IsDark}
              iconOff={<DarkIconComponent />}
              iconOn={<LightIconComponent />}
              onChange={() => { window.localStorage.setItem('isDark', !props.IsDark ? "true" : ""); props.setIsDark(!props.IsDark) }}
            />
          </Navbar.Content>
        </div>
        <Navbar.Toggle className="visible sm:hidden" />
        <Navbar.Collapse>
          {links.map((navlink, key) =>
            <Navbar.CollapseItem>
              <Link
                key={key}
                href={navlink.link}>
                {navlink.text}
              </Link>
            </Navbar.CollapseItem>
          )}
          <Switch
            checked={props.IsDark}
            iconOff={<DarkIconComponent />}
            iconOn={<LightIconComponent />}
            onChange={() => { window.localStorage.setItem('isDark', !props.IsDark ? "true" : ""); props.setIsDark(!props.IsDark) }}
          />
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarComponent;
