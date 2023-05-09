import { useEffect, useState } from "react";

const View = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    const editorContent = localStorage.getItem("editorContent");
    editorContent && setContent(editorContent);
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default View;
