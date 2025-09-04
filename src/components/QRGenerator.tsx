// src/components/QRGenerator.tsx
import React from "react";
import QRCode from "qrcode.react";

export function QRGenerator({ slug }: { slug: string }) {
  const url = `${window.location.origin}/play/${slug}`;
  return (
    <div className="p-2">
      <p className="mb-2">{url}</p>
      <QRCode value={url} size={180} />
    </div>
  );
}
