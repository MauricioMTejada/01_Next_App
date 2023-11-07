import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

interface Props{
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href}) => {

    const { asPath } = useRouter();
    const router = useRouter();
    // console.log(router);

    const style: CSSProperties = {
        color: '#0070f3',
        textDecoration: 'underline',
    }

  return (
    <Link href={href} passHref>
        <span style={ asPath === href ? style : undefined }>{text}</span>
        {/* <span style={ style }>{text}</span> */}
    </Link>
  )
}
