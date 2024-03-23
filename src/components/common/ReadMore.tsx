import { useState } from "react";

export default function ReadMore({
  text,
  minLines = 2,
  aos = "",
}: {
  text: string;
  minLines?: number;
  aos?: string;

}) {
  const textList = text.split("\n");
  const body = textList.filter(
    (line, index) =>
      !(line === "" && (index === 0 || index === textList.length - 1))
  );
  const [expanded, setExpanded] = useState(false);
  const displayedText = expanded ? body : body.slice(0, minLines);

  return (
    <div>
      <p data-aos={aos}>
        {displayedText.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 hover:underline"
        >
          {expanded ? "Less" : "Read more"}
        </button>
      </p>
    </div>
  );
}
