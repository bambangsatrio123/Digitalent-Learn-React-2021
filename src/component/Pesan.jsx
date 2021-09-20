import React from "react";
import "./Pesan.css";

export default function Pesan({ size, ucapan, name, style }) {
  return <div className={`box box--${size}`} style={{ fontStyle: "italic", ...style }}>{`${ucapan} ${name}`}</div>;
}
