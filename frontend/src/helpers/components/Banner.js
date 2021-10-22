import React from 'react';
import classNames from 'classnames';

const Banner = ({ title, className, onClose }) => {
	const props = {
		container: {
			className: classNames(
				'alert alert-dismissible fade show', className, {
				'alert-danger': !className,
				className
			}
			),
			role: 'alert'
		},
		button: {
			className: 'close',
			onClick: onClose,
			type: 'button'
		}
	}
	return (
		<div {...props.container}>
			{title}
			<button {...props.button}>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
};

export default Banner;
