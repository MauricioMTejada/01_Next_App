import Link from "next/link"
import { useRouter } from "next/router"

export const ActiveLink = ({ text, href}) => {

    const { asPath } = useRouter();
    const router = useRouter();
    console.log(router);

    const style = {
        color: '#0070f3',
        textDecoration: 'underline',
    }

  return (
    <Link href={href} passHref>
        <span style={ asPath === href ? style : null }>{text}</span>
        {/* <span style={ style }>{text}</span> */}
    </Link>
  )
}
