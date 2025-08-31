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
import { useChat } from "@ai-sdk/react";
import { Image, Sparkles } from "lucide-react";

const page = () => {
  const models = [
    { id: "gpt-4o", name: "GPT-4o" },
    { id: "claude-opus-4-20250514", name: "Claude 4 Opus" },
  ];

  const [text, setText] = useState("");
  const [model, setModel] = useState(models[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(
      { text: text },
      {
        body: {
          model: model,
        },
      }
    );
    setText("");
  };

  const { messages, status, sendMessage } = useChat();

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
                  <Image size={16} />
                  <span>Faces & Objects</span>
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
