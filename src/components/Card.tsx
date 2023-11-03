import { FC } from "react";

import { CardWrapper } from "./styles";
import { ICard } from "./types/card";

export const Card: FC<ICard> = ({ className, children }) => (
	<CardWrapper className={className}>{children}</CardWrapper>
);
