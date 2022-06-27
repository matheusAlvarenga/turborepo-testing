import React, { FC, HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export const Thing: FC<Props> = ({ text }) => (
  <div>{text || `the snozzberries taste like snozzberries`}</div>
);
