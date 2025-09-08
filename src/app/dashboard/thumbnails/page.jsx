"use client";
import React from "react";
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
} from "@/components/prompt-input";
const page = () => {
  return (
    <div>
      <PromptInput onSubmit={() => {}} className="mt-4 relative">
        <PromptInputTextarea onChange={(e) => {}} value={""} />
        <PromptInputToolbar>
          <PromptInputSubmit
            className="absolute right-1 bottom-1 rounded-full"
            disabled={false}
            status={"ready"}
          />
        </PromptInputToolbar>
      </PromptInput>
    </div>
  );
};

export default page;
