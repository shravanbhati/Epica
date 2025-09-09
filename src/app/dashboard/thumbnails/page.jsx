"use client";
import React from "react";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuItem,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  usePromptInputAttachments,
} from "@/components/ai-elements/prompt-input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Image } from "lucide-react";
import { Sparkles } from "lucide-react";
const page = () => {
  const isMobile = useIsMobile();
  const [prompt, setPrompt] = React.useState("");
  return (
    <div>
      <PromptInput
        onSubmit={() => {}}
        className="mt-4 relative border-0 dark:bg-zinc-800"
      >
        <PromptInputBody>
          <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments>
          <PromptInputTextarea
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
          />
        </PromptInputBody>
        <PromptInputToolbar>
          <PromptInputTools>
            <PromptInputButton size={100}>
              <Image />
              <span>Faces & Objects</span>
            </PromptInputButton>
            <PromptInputButton>
              <Sparkles />
              <span>Reference</span>
            </PromptInputButton>
          </PromptInputTools>
          <PromptInputSubmit disabled={false} status={"ready"} />
        </PromptInputToolbar>
      </PromptInput>
    </div>
  );
};

export default page;
