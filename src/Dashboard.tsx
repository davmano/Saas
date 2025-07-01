import { useEffect, useState } from 'react'

function Dashboard() {
  const [metrics, setMetrics] = useState<any>(null)

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/metrics`)
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Failed to fetch metrics:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">SaaS Dashboard</h1>
      {metrics ? (
        <pre className="mt-4 bg-gray-100 p-2 rounded">{JSON.stringify(metrics, null, 2)}</pre>
      ) : (
        <p>Loading metrics...</p>
      )}
    </div>
  );
}

export default Dashboard;
