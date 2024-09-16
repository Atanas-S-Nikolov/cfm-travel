import styles from "../styles/OfferTeaser.module.css";
import { Fragment } from "react";
import { FaStar } from "react-icons/fa";

function renderRatings(rating) {
	const elements = [];
	for (let index = 1; index <= 5; index++) {
		if (index <= rating) {
			elements.push(<FaStar className={styles.checked} />);
		} else {
			elements.push(<FaStar />);
		}
	}
	return elements.map((el, index) => <Fragment key={index}>{el}</Fragment>);
}

export default function OfferTeaser({ offer }) {
	const { title, description, image, badge, usps, rating, fromPrice } = offer;

	return (
		<div className={styles.offer_teaser}>
			<section className={styles.image_section}>
				<img src={image} alt={title} />
				<span className={styles.badge}>{badge}</span>
			</section>
			<section className={styles.offer_details}>
				<h3 className={styles.title}>{title}</h3>
				<p>{description}</p>
				<ul>
					{usps.map((usp, index) => (
						<li key={index}>{usp}</li>
					))}
				</ul>
				<section className={styles.pricing}>
					<div className={styles.rating}>
						Rating: &nbsp; {renderRatings(rating)}
					</div>
					<span>
						From price: <b>{fromPrice} &euro;</b>
					</span>
					<button>book now</button>
				</section>
			</section>
		</div>
	);
}
