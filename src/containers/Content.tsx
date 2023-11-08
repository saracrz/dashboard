import { SmallTextIcon, SmallVisualIcon, SmallWorldIcon } from "../assets/icons";
import { IDashboardItem } from "../types";
import { ContentList, Divider } from "./styles/ContentStyles";

const removeFirstWord = (word: string): string => {
	const index = word.indexOf(":");
	if (index !== -1) {
		return word.slice(index + 1).trim();
	}

	return word;
};

export const Content = ({ items }: { items: IDashboardItem[] }) => {
	const itemsArray = Array.isArray(items) ? items : [];

	return (
		<ContentList>
			{itemsArray.map((item: IDashboardItem) => (
				<li key={item.id}>
					{item.visualization && item.visualization.name && (
						<>
							<>
								<SmallVisualIcon />
								{removeFirstWord(item.visualization.name)}
							</>
							<Divider />
						</>
					)}
					{item.map && item.map.name && (
						<>
							<>
								<SmallWorldIcon />
								{removeFirstWord(item.map.name)}
							</>
							<Divider />
						</>
					)}
					{item.text && (
						<>
							<>
								<SmallTextIcon />
								{item.text}
							</>
							<Divider />
						</>
					)}
				</li>
			))}
		</ContentList>
	);
};
