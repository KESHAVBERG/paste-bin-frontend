const API_BASE = import.meta.env.VITE_API_URL || "";

export async function createPaste(payload) {
  const res = await fetch(`${API_BASE}/pastes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to create paste");
  }

  return res.json();
}

export async function fetchPaste(id) {
  const res = await fetch(`${API_BASE}/api/pastes/${id}`);

  if (!res.ok) {
    throw new Error("Paste not found or expired");
  }

  return res.json();
}
