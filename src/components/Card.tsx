import { FC } from "react";

import { ICard } from "../types/card";
import { CardWrapper } from "./styles";

export const Card: FC<ICard> = ({ className, children }) => (
	<CardWrapper className={className}>{children}</CardWrapper>
);
