import Link from "next/link";
import styles from "./Navbar.module.css"
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
	const menuItems = [
		{ text: 'Home', href: '/' },
		{ text: 'About', href: '/about' },
		{ text: 'Contact', href: '/contact' },
		{ text: 'Pricing', href: '/pricing' },
	];

	return (
		<nav className={ styles['menu-container'] }>
			{menuItems.map((elem, index) =>
				(<ActiveLink key={index} text={elem.text} href={elem.href} />))}
		</nav>
  )
}
