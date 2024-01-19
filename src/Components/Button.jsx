import React from "react";
import "../index.css";
function ButtonFilled({ text, clickHandler, children }) {
	return (
		<div className='btn' onClick={clickHandler}>
			<div className='btn-content'>
				<div>
					{text}
				</div>
				<div>
					{children}
				</div>
         
			</div>
		</div>
	);
}
function ButtonBordered({ text, clickHandler, children }) {
	return (
		<div className='btn-bordered' onClick={clickHandler}>
			<div className='btn-content'>
				<div>
					{text}
				</div>
				<div>
					{children}
				</div>
         
			</div>
		</div>
	);
}

export { ButtonBordered, ButtonFilled };
