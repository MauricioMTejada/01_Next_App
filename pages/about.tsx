import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactNode } from 'react'

export default function About() {
  return (
	<>
		<h1>About Page</h1>
		<h1 className={'title'}>
		Ir a <Link href="/">Home</Link>
		</h1>

		<p className={'description'}>
		Get started by editing{' '}
		<code className={'code'}>pages/about.jsx</code>
		</p>
	</>
  )
}

About.getLayout = function getLayout(page: ReactNode) {
	return (
		<MainLayout>
			<DarkLayout>
				{page}
			</DarkLayout>
		</MainLayout>
	)
}