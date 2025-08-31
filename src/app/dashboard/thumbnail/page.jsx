"use client";
import Dashboard from "../components/dashboard";
import {
  PromptInput,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/prompt-input";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/conversation";
import { Message, MessageContent } from "@/components/message";
import { Response } from "@/components/response";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

import { Image, Sparkles } from "lucide-react";

const page = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle");
  const [referenceUrl, setReferenceUrl] = useState(null);

  const { getToken } = useAuth();

  // Reference upload
  async function uploadReference(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const fd = new FormData();
    fd.append("file", file);

    const token = await getToken();

    try {
      if (!token) {
        throw new Error("No authentication token available");
      }

      const res = await fetch("/api/upload-reference", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });

      if (!res.ok) throw new Error("Upload failed");

      const json = await res.json();
      console.log("Uploaded file URL:", json.url);

      if (json.url) {
        setReferenceUrl(json.url);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "system",
            parts: [{ type: "text", text: "Reference uploaded." }],
          },
        ]);
      }
      return json.url;
    } catch (err) {
      console.error(err);
    }
  }

  async function generate(prompt, refUrl) {
    const token = await getToken();

    if (!token) {
      throw new Error("No authentication token available");
    }

    const res = await fetch("/api/generate-thumbnail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ prompt, referenceUrls: refUrl ? [refUrl] : [] }),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
    }

    return res.json();
  }
  // History
  async function myThumbs() {
    const token = await getToken();

    if (!token) {
      throw new Error("No authentication token available");
    }

    const res = await fetch("/api/my-thumbnails", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
    }

    return res.json();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;

    const token = await getToken();

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      parts: [{ type: "text", text }],
    };
    setMessages((prev) => [...prev, userMessage]);

    setStatus("loading");

    try {
      if (!token) {
        throw new Error("No authentication token available");
      }

      const res = await fetch("/api/generate-thumbnail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          prompt: text,
          referenceUrls: referenceUrl ? [referenceUrl] : [],
        }),
      });

      const data = await res.json();
      if (res.ok) {
        const botMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          parts: [
            { type: "text", text: "Thumbnail generated successfully." },
            { type: "image", url: data.url },
          ],
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error(data.error || "Generation failed");
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          parts: [{ type: "text", text: `Error: ${err.message}` }],
        },
      ]);
    } finally {
      setStatus("idle");
      setText("");
    }
  }

  return (
    <Dashboard pageName="Thumbnails">
      <div className="flex flex-col relative">
        <div className="flex-1 overflow-hidden">
          <Conversation>
            <ConversationContent className="h-[calc(100vh-240px)] overflow-y-auto">
              {messages.map((message) => (
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <Response key={`${message.id}-${i}`}>
                              {part.text}
                            </Response>
                          );
                        case "image":
                          return (
                            <img
                              key={`${message.id}-${i}`}
                              src={part.url}
                              alt="Generated Thumbnail"
                              className="rounded-lg mt-2"
                            />
                          );
                        default:
                          return null;
                      }
                    })}
                  </MessageContent>
                </Message>
              ))}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
        </div>
        <div className="sticky bottom-0 left-0 right-0 bg-background mx-12">
          <PromptInput
            onSubmit={handleSubmit}
            className="relative bg-zinc-900 border-zinc-950 rounded-3xl px-1"
          >
            <PromptInputTextarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Describe the style of thumbnail you’re looking for"
            />
            <PromptInputToolbar>
              <PromptInputTools>
                <PromptInputButton>
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={uploadReference}
                    aria-label="Image upload"
                    accept=".jpg,.jpeg,.png"
                  />
                  <Image size={16} />
                  <label htmlFor="fileInput">
                    <span>Faces & Objects</span>
                  </label>
                </PromptInputButton>
                <PromptInputButton>
                  <Sparkles size={16} />
                  <span>Reference</span>
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit
                disabled={!text}
                status={status}
                className="rounded-full m-1"
              />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>
    </Dashboard>
  );
};

export default page;
