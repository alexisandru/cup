import React, {useState, useEffect} from 'react'

import style from './styles/ProgressiveImg.module.css'

const ProgressiveImg = ({placeholderSrc, src, ...props}) => {

	const [imgSrc, setImgSrc] = useState(placeholderSrc || src)

	useEffect(() => {
		const img = new Image()
		img.src = src 
		img.onload = () => {
			setImgSrc(src)
		}
	}, [src])

	return (
		<img 
			{...{src: imgSrc, ...props}}
			alt={props.alt || ""}
			className={style.image}
		/>
	)
}

export default ProgressiveImg