import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import CodeBlock from "@tiptap/extension-code-block";
import {
  BoldIcon,
  ItalicIcon,
  TextQuote,
  UnderlineIcon,
  CodeIcon,
} from "lucide-react";
import MenuButton from "./MenuButton";

function MenuBar(): React.JSX.Element | null {
  const { editor } = useCurrentEditor();
  if (!editor) return null;

  const menuItems = [
    {
      name: "Bold",
      Icon: BoldIcon,
      isActive: "bold",
      handler: () => editor.chain().focus().toggleBold().run(),
    },
    {
      name: "Italic",
      Icon: ItalicIcon,
      isActive: "italic",
      handler: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      name: "Underline",
      Icon: UnderlineIcon,
      isActive: "underline",
      handler: () => editor.chain().focus().toggleUnderline().run(),
    },
    {
      name: "Blockquote",
      Icon: TextQuote,
      isActive: "blockquote",
      handler: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      name: "Code",
      Icon: CodeIcon,
      isActive: "code_block",
      handler: () => editor.chain().focus().toggleCodeBlock().run(),
    },
  ];

  return (
    <div className="flex p-4 items-center flex-wrap gap-3">
      {menuItems.map((item, index) => {
        return (
          <MenuButton
            name={item.name}
            key={index}
            Icon={item.Icon}
            isActive={editor.isActive(item.isActive)}
            onClickHandler={item.handler!}
          />
        );
      })}
    </div>
  );
}

type TiptapProps = {
  onChange: (content: string) => void;
};

export default function Tiptap({ onChange }: TiptapProps): React.JSX.Element {
  const extensions = [StarterKit, Underline, CodeBlock];

  return (
    <div className="bg-card min-h-72 w-full rounded-lg resize-y flex flex-col menu-container p-4 border border-border">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        editorProps={{
          attributes: {
            class:
              "p-2 flex-1 focus:outline-none bg-background prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mb-3 mt-2 focus:outline-none rounded-lg text-foreground",
          },
        }}
        onUpdate={({ editor }) => {
          onChange(editor.getHTML());
        }}
      ></EditorProvider>
    </div>
  );
}
