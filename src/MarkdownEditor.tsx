import { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';
const mdParser = new MarkdownIt();
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('## markdown preview');
    const handleEditorChange = ({ text }: { text: string }) => {
        setMarkdown(text);
    };
    return (
        <section className='container'>
            <div className='flex justify-center items-center'>
                <MdEditor
                    value={markdown}
                    style={{ height: "500px" }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleEditorChange}
                />
            </div>
        </section>
    );
};
export default MarkdownEditor;