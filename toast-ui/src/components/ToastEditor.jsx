import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const ToastEditor = () => {
  const editorRef = useRef();

  const content = localStorage.getItem("editorContent") || "";

  const toolbarItems = [
    ["heading", "bold", "italic", "strike"], // 헤딩, 볼드, 이탤릭, 취소선
    ["hr"], // 수평선
    ["ul", "ol", "task"], // 순서없는 리스트, 순서있는 리스트, 체크리스트
    ["table", "link"], // 표, 링크
    ["image"], // 이미지
  ];

  const handleEditorSave = () => {
    const html = editorRef.current.getInstance().getHTML(); // 에디터에서 작성한 HTML 가져오기
    console.log("html", editorRef.current.getInstance().getHTML()); // 에디터에서 작성한 HTML 콘솔에 출력
    console.log("markdown", editorRef.current.getInstance().getMarkdown()); // 에디터에서 작성한 Markdown 콘솔에 출력

    localStorage.setItem("editorContent", html);
  };

  return (
    <>
      <Editor
        ref={editorRef} // 에디터 ref 설정
        initialValue={content || " "} // 초기값 설정
        initialEditType="wysiwyg" // 에디터 모드 설정
        hideModeSwitch={true} // 모드 스위치 숨기기
        height="300px" // 에디터 높이 설정
        usageStatistics={false} // 사용 통계 기능 끄기
        toolbarItems={toolbarItems} // 툴바 아이템 설정
        useCommandShortcut={true} // 단축키 사용 설정
      />
      <button onClick={handleEditorSave}>저장하기</button>
    </>
  );
};

export default ToastEditor;
