import {OneBenefitProps} from '@/types/type';

const OneBenefit = ({ Icon, title, text, isVip = false }: OneBenefitProps) => {
	return <div
		className='w-full max-w-82.5 text-center'
	>
		<Icon className={`${isVip ? 'text-turquoise' : 'text-black'} text-[36px] mb-2.5 mx-auto`} />
		<h3 className={`${isVip ? 'text-turquoise' : 'text-black'} text-base sm:text-lg font-medium uppercase mb-2.5 sm:mb-3.75`}>
			{title}
		</h3>
		<p className={`${isVip ? 'text-gray-500' : 'text-gray-600'} text-sm leading-5`}>
			{text}
		</p>
	</div>
};

export default OneBenefit;
