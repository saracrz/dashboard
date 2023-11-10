import { SmallTextIcon, SmallVisualIcon, SmallWorldIcon } from "../assets/icons";
import { IDashboardItem } from "../types";
import { removeFirstWord } from "../utils/helper";
import { ContentList, Divider } from "./styles/ContentStyles";

export const Content = ({ items }: { items: IDashboardItem[] | null }) => {
	return (
		<ContentList>
			{items?.map((item: IDashboardItem) => (
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
