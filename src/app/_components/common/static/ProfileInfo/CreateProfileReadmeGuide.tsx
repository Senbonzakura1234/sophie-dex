import Link from 'next/link';

export default function CreateProfileReadmeGuide() {
	return (
		<div className='collapse prose'>
			<input type='checkbox' />
			<div className='collapse-title !p-0 text-lg'>
				Your Github <code>README</code> Profile goes here. See how to create it
			</div>

			<div className='collapse-content !p-0'>
				<ul className='m-0'>
					<li>
						Go to{' '}
						<Link href='https://github.com' scroll={false}>
							Github.com
						</Link>
					</li>
					<li>Create an account (if have not yet)</li>
					<li>
						Create a public Repository with your <code>username</code> as its name (
						<Link href='https://github.com/Senbonzakura1234/Senbonzakura1234' scroll={false}>
							Example Repo
						</Link>
						)
					</li>
					<li>
						Create <code>README.md</code> file and commit it to the <code>main</code> branch of the Repository
					</li>
				</ul>
			</div>
		</div>
	);
}
