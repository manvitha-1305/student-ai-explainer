import ReactMarkdown from "react-markdown";

type Props = {
  topic: string;
  explanation: string;
};

export default function ExplanationCard({ topic, explanation }: Props) {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2
        className="mb-4 text-2xl font-bold"
        style={{ color: "#111827", WebkitTextFillColor: "#111827" }}
      >
        Topic: {topic}
      </h2>

      <div
        className="max-w-none text-base leading-8"
        style={{ color: "#1f2937", WebkitTextFillColor: "#1f2937" }}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p
                className="mb-4"
                style={{ color: "#1f2937", WebkitTextFillColor: "#1f2937" }}
              >
                {children}
              </p>
            ),
            li: ({ children }) => (
              <li
                className="ml-5 list-disc"
                style={{ color: "#1f2937", WebkitTextFillColor: "#1f2937" }}
              >
                {children}
              </li>
            ),
            strong: ({ children }) => (
              <strong
                style={{ color: "#111827", WebkitTextFillColor: "#111827" }}
              >
                {children}
              </strong>
            ),
            h1: ({ children }) => (
              <h1
                className="mb-3 text-2xl font-bold"
                style={{ color: "#111827", WebkitTextFillColor: "#111827" }}
              >
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2
                className="mb-3 text-xl font-bold"
                style={{ color: "#111827", WebkitTextFillColor: "#111827" }}
              >
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3
                className="mb-2 text-lg font-semibold"
                style={{ color: "#111827", WebkitTextFillColor: "#111827" }}
              >
                {children}
              </h3>
            ),
          }}
        >
          {explanation}
        </ReactMarkdown>
      </div>
    </div>
  );
}