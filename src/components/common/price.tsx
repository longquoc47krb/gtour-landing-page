import { formatAsCurrency } from "@/utils";
import React from "react";
import classnames from "classnames";

function Price({
  previousPrice,
  currentPrice,
  className,
}: {
  previousPrice: number;
  currentPrice: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {previousPrice ? <del>{formatAsCurrency(previousPrice)}</del> : null}{" "}
      {formatAsCurrency(currentPrice)}
    </span>
  );
}

export default Price;
