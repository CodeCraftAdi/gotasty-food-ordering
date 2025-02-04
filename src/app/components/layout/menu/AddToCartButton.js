import FlyingButton from 'react-flying-item';

export default function AddToCartButton({
	hasSizesOrExtras, onClick, basePrice, image
}) {
	if (!hasSizesOrExtras) {
		return (
			<div className='flying-button-parent mt-4'>
				<FlyingButton
					targetTop={'1%'}
					targetLeft={'99%'}
					src={image} >
					<div onClick={onClick}>
						<span className='text-[0.85rem] leading-[1rem] font-thin text-justify -ml-4'>
							Add to cart :-
						</span>
						<span className='text-2xl ml-20'>
							₹{basePrice}
						</span>
					</div>
				</FlyingButton>
			</div>
		)
	}
	return (
		<button
			type="button"
			onClick={onClick}
			className="mt-4 bg-primary text-white rounded-full items-center justify-between" >
			<span className='text-[0.85rem] leading-[1rem] font-thin text-justify '>
				Order starts just :-
			</span>
			<span className='text-2xl'>
				₹{basePrice}
			</span>
		</button>
	);
}