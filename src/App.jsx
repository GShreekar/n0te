import { useState } from 'react'
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  tablePlugin,
  toolbarPlugin,
  InsertTable,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  ListsToggle,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('')

  return (
    <div className="w-screen h-screen bg-neutral-800 text-shadow-white overflow-hidden">
      <div className="max-w-3xl mx-auto h-full pt-2">
        <MDXEditor
          markdown={markdown}
          onChange={setMarkdown}
          placeholder="Start typing n0te here..."
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),
            linkPlugin(),
            tablePlugin(),
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  <BoldItalicUnderlineToggles />
                  <UndoRedo />
                  <BlockTypeSelect />
                  <ListsToggle />
                  <InsertTable />
                </>
              )
            }),
          ]}
          contentEditableClassName="prose prose-lg max-w-none p-4 overflow-hidden prose-ul:list-disc prose-ol:list-decimal prose-li:list-item [&_ul]:!list-disc [&_ol]:!list-decimal [&_li]:!list-item [&_ul]:!ml-6 [&_ol]:!ml-6"
          className="h-full w-full text-white [&_.mdxeditor-root-contenteditable]:text-white [&_.mdxeditor-root-contenteditable_*]:text-white [&_.mdxeditor-root-contenteditable]:overflow-hidden [&_.mdxeditor-root-contenteditable]:scrollbar-none [&_.mdxeditor-toolbar]:opacity-0 [&_.mdxeditor-toolbar]:transition-opacity [&_.mdxeditor-toolbar:hover]:opacity-100 [&_.mdxeditor-toolbar]:!bg-neutral-800 [&_.mdxeditor-toolbar_*]:!bg-neutral-800 [&_.mdxeditor-toolbar_*]:!text-white [&_.mdxeditor-toolbar_svg]:!fill-white [&_.mdxeditor-toolbar_button]:!text-white [&_.mdxeditor-toolbar]:!border-none [&_.mdxeditor]:!border-none [&_.mdxeditor]:!bg-neutral-800 [&_ul]:!text-white [&_ol]:!text-white [&_li]:!text-white [&_ul]:!list-disc [&_ol]:!list-decimal [&_li]:!list-item [&_ul_li::marker]:!text-white [&_ol_li::marker]:!text-white"
        />
      </div>
    </div>
  )
}

export default App