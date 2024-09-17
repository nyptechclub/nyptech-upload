"use client";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable = true }: EditorProps) => {
  // Create the BlockNote editor
  const editor = useCreateBlockNote({
    uploadFile: async (file: File) => {
      return ""; // Handle file uploads here if necessary
    },
  });

  // Apply the `editable` flag to the editor when it changes
  useEffect(() => {
    if (editor) {
      editor.isEditable = editable;
    }
  }, [editor, editable]);

  // Initialize content if provided
  useEffect(() => {
    if (editor && initialContent) {
      try {
        const parsedContent = JSON.parse(initialContent);

        // Insert blocks into the editor (this assumes `parsedContent` is in the correct format)
        editor.insertBlocks(parsedContent.blocks, "after");
      } catch (error) {
        console.error("Error parsing initial content", error);
      }
    }
  }, [editor, initialContent]);

  // Watch for document changes and send updates to the parent
  useEffect(() => {
    if (editor) {
      const handleContentChange = () => {
        // Hypothetically using `getDocumentAsJSON` to serialize document content
        const updatedContent = JSON.stringify(editor._tiptapEditor.getJSON()); // Use appropriate method
        onChange(updatedContent); // Send updated content to the parent component
      };

      // Listen for updates using Tiptap's internal event system
      const unsubscribe = editor._tiptapEditor.on("update", handleContentChange);

      return () => {
        editor._tiptapEditor.off("update", handleContentChange); // Clean up the event listener
      };
    }
  }, [editor, onChange]);

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return <BlockNoteView editor={editor} />;
};

export default Editor;
