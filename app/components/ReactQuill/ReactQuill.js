import React, { useEffect, useRef } from "react";
import Quill from "quill-next";

const defaultTheme = "snow";

// Quill Next inserts this blot for <br>, but omits it from CORE_FORMATS
// when a formats whitelist is passed (createRegistryWithFormats).
function withRequiredFormats(formats) {
  if (!formats || formats.length === 0) {
    return undefined;
  }
  const next = new Set(formats);
  next.add("soft-break");
  next.delete("bullet");
  return [...next];
}

function htmlFromEditor(quill) {
  return quill.root.innerHTML;
}

function setHtml(quill, html) {
  const delta = quill.clipboard.convert({ html: html || "" });
  quill.setContents(delta, "silent");
}

export default function ReactQuill({
  value = "",
  onChange,
  modules,
  formats,
  theme = defaultTheme,
  style,
  className,
  placeholder,
  readOnly = false,
}) {
  const wrapRef = useRef(null);
  const quillRef = useRef(null);
  const lastHtmlRef = useRef(value);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) {
      return undefined;
    }

    const host = document.createElement("div");
    wrap.appendChild(host);

    const quill = new Quill(host, {
      theme,
      modules,
      formats: withRequiredFormats(formats),
      placeholder,
      readOnly,
    });
    quillRef.current = quill;

    setHtml(quill, value);
    lastHtmlRef.current = htmlFromEditor(quill);

    const onTextChange = () => {
      const html = htmlFromEditor(quill);
      lastHtmlRef.current = html;
      if (onChangeRef.current) {
        onChangeRef.current(html);
      }
    };
    quill.on("text-change", onTextChange);

    return () => {
      quill.off("text-change", onTextChange);
      quillRef.current = null;
      wrap.innerHTML = "";
    };
    // Editor is created once; toolbar/modules are static on this page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const quill = quillRef.current;
    if (!quill || value === lastHtmlRef.current) {
      return;
    }
    const selection = quill.getSelection();
    setHtml(quill, value);
    lastHtmlRef.current = htmlFromEditor(quill);
    if (selection) {
      quill.setSelection(selection);
    }
  }, [value]);

  useEffect(() => {
    const quill = quillRef.current;
    if (quill) {
      quill.enable(!readOnly);
    }
  }, [readOnly]);

  return (
    <div
      ref={wrapRef}
      className={["quill", className].filter(Boolean).join(" ")}
      style={style}
    />
  );
}
