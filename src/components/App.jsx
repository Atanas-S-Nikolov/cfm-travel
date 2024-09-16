import styles from "../styles/App.module.css";
import OfferTeaser from "./OfferTeaser";
import { dummyOffers } from "../dummyData";

export default function App() {
	return (
		<div className={styles.app}>
			<section className={styles.offers_list}>
				{dummyOffers.map((offer) => (
					<OfferTeaser key={offer.id} offer={offer} />
				))}
			</section>
		</div>
	);
}
