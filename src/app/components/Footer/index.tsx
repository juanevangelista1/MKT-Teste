"use client";

import { useEffect, useState } from "react";
import { FooterContainer } from "./styles";
import Skeleton from "react-loading-skeleton";

export function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <FooterContainer>
      {loading ? (
        <Skeleton count={0} />
      ) : (
        <p className="footer__text">
          MKS sistemas © Todos os direitos reservados
        </p>
      )}
    </FooterContainer>
  );
}
