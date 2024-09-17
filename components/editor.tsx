//@ts-nocheck
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

interface EditorProps {
  initialContent: string;
  editable: boolean;
  onChange: (content: string) => void;
}

const Editor = ({ initialContent, editable, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: initialContent,  // initial content to set in the editor
    editable: editable,  // controls if the content is editable or not
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();  // Get HTML content from the editor
      onChange(htmlContent);  // Pass updated content to parent
    },
  });

  // Reset content if initialContent changes
  useEffect(() => {
    if (editor && initialContent !== editor.getHTML()) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  if (!editor) {
    return <div>Loading Editor...</div>;
  }

  return (
    <div className="border p-4">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
