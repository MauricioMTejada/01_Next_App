import {MainLayout} from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import Link from 'next/link'
import { ReactNode } from "react";

export default function Pricing() {
  return (
    <>
        <h1>Pricig Page</h1>
        <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing/index.jsx</code>
        </p>
	</>
  )
}

Pricing.getLayout = function getLayout(page: ReactNode) {
	return (
		<MainLayout>
			<DarkLayout>
				{page}
			</DarkLayout>
		</MainLayout>
	)
}
