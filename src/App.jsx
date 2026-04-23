import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [score, setScore] = useState(null);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!url.startsWith("http")) {
      alert("Enter valid URL (https://...)");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setScore(60 + Math.floor(Math.random() * 30));
      setIssues([
        "Missing structured data (schema markup)",
        "No FAQ section for AI extraction",
        "Weak heading hierarchy (H1/H2)",
        "Low semantic clarity in content",
        "Content not optimized for LLM understanding",
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white px-4">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white/20">

        <h1 className="text-3xl font-bold text-center mb-2">
          🚀 AI Readiness Audit
        </h1>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Analyze how AI-friendly your website is
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter website URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
          />

          <button
            onClick={handleAnalyze}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-lg font-semibold"
          >
            Analyze
          </button>
        </div>

        {loading && (
          <p className="text-center mt-4 animate-pulse">Analyzing...</p>
        )}

        {score && !loading && (
          <div className="mt-6 bg-white/10 p-5 rounded-xl border border-white/20">

            <h2 className="text-xl font-semibold mb-2">
              Score: <span className="text-green-400">{score}/100</span>
            </h2>

            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {issues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;