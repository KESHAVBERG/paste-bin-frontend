import React from 'react'
import { createPaste } from '../api/paste';
import { useState } from 'react'

const CreatePaste = () => {
    const [content, setContent] = useState("");
    const [ttl, setTtl] = useState("");
    const [views, setViews] = useState("");
    const [resultUrl, setResultUrl] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setError("")
        setResultUrl("")
        try {
            const payload = {
                content,
                ttl_seconds: ttl ? Number(ttl) : undefined,
                max_views: views ? Number(views) : undefined
            }
            const data = await createPaste(payload)
            setResultUrl(data?.url)
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto" }}>
            <h2>Create Paste</h2>

            <textarea
                rows={8}
                placeholder="Paste content..."
                value={content}
                onChange={e => setContent(e.target.value)}
                style={{ width: "100%" }}
            />

            <input
                type="number"
                placeholder="TTL (seconds, optional)"
                value={ttl}
                onChange={e => setTtl(e.target.value)}
            />

            <input
                type="number"
                placeholder="Max views (optional)"
                value={views}
                onChange={e => setViews(e.target.value)}
            />

            <button onClick={handleSubmit}>Create</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {resultUrl && (
                <p>
                    Share URL: <a href={resultUrl}>{resultUrl}</a>
                </p>
            )}
        </div>)
}

export default CreatePaste