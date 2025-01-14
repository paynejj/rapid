import React, { useState } from 'react';
import type { V2_MetaFunction } from '@remix-run/node';
import Layout from '~/components/Layout';
import { Heading, Text } from '@rapid-web/ui';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleArrowRight,
	faClipboard,
	faChevronRight,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';

export const meta: V2_MetaFunction = () => {
	return [
		{ title: 'RAPID' },
		{
			name: 'description',
			content: 'A new way to build web applications!',
		},
	];
};

export default function Index() {
	const [isCopied, setIsCopied] = useState(false);
	return (
		<Layout isNavigation>
			<div>
				<motion.div
					animate={{ y: 0, visibility: 'visible', opacity: 1 }}
					initial={{ y: -70, visibility: 'hidden', opacity: 0 }}
					transition={{ duration: 1, delay: 0 }}
				>
					<div className='mt-32 flex flex-col lg:mt-56'>
						<div className='flex w-max items-center gap-2 rounded-full border-2 border-[#27272D] bg-[#18181C] px-2 py-1 transition ease-linear hover:-translate-y-1 hover:cursor-pointer'>
							<Text styles='text-white'>
								Announcement blog post
							</Text>
							<FontAwesomeIcon
								icon={faCircleArrowRight}
								width={16}
								height={16}
								className='text-white'
							/>
						</div>
						<Heading styles='text-white font-extrabold md:text-4xl lg:text-6xl max-w-[1000px] gradient-text leading-tight mt-12'>
							A new way to build web applications with React and
							Rust.
						</Heading>
						<div className='mt-12 flex w-max gap-4 rounded-xl border-2 border-white p-4'>
							<div className='flex items-center gap-2'>
								<FontAwesomeIcon
									icon={faChevronRight}
									width={16}
									height={16}
									size='sm'
									className='text-white'
								/>
								<code className='text-white'>
									cargo install rapid-cli
								</code>
							</div>
							<button
								className='w-[20px]'
								onClick={() => {
									navigator.clipboard.writeText(
										'cargo install rapid-cli',
									);
									setIsCopied(true);
									setTimeout(() => {
										setIsCopied(false);
									}, 1000);
								}}
							>
								{isCopied ? (
									<FontAwesomeIcon
										icon={faCheck}
										size='lg'
										className='text-white'
									/>
								) : (
									<FontAwesomeIcon
										icon={faClipboard}
										size='lg'
										className='text-white'
									/>
								)}
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</Layout>
	);
}
