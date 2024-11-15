import { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Player } from "video-react";
import * as pdfjsLib from "pdfjs-dist/webpack"; // Import pdf.js
import "video-react/dist/video-react.css";


export default function UploadPdf({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  pdf = false,
  viewData = null,
  editData = null,
  defaultValue = null
}) {
    
  const { course } = useSelector((state) => state.course);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  );
  const inputRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      if (pdf) {
        generatePdfThumbnail(file);
      } else {
        previewFile(file);
      }
    }
  };
useEffect(() => {
  if (defaultValue && pdf) {
    generatePdfThumbnail(defaultValue);
  }
}, [defaultValue]);
 

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: pdf
      ? { "application/pdf": [".pdf"] }
      : video
      ? { "video/*": [".mp4"] }
      : { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const generatePdfThumbnail = async (fileOrUrl) => {
  let pdfData;

  if (typeof fileOrUrl === "string") {
    // Fetch the PDF from the URL
    const response = await fetch(fileOrUrl);
    const arrayBuffer = await response.arrayBuffer();
    pdfData = new Uint8Array(arrayBuffer);
  } else {
    // Handle the uploaded file
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileOrUrl);
    await new Promise((resolve) => {
      reader.onloadend = () => {
        pdfData = new Uint8Array(reader.result);
        resolve();
      };
    });
  }

  const pdf = await pdfjsLib.getDocument(pdfData).promise;
  const page = await pdf.getPage(1);

  const scale = 1.5;
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({
    canvasContext: context,
    viewport: viewport,
  }).promise;

  setPreviewSource(canvas.toDataURL()); // Set the thumbnail as preview
};

// Use the URL as a preview source if defaultValue is a URL
useEffect(() => {
  if (defaultValue && pdf) {
    generatePdfThumbnail(defaultValue);
  }
}, [defaultValue]);


  useEffect(() => {
    register(name, { required: true });
  }, [register, name]);

  useEffect(() => {
    setValue(name, selectedFile);
  }, [selectedFile, setValue, name]);

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>
      <div
        className={`${
          isDragActive ? "bg-richblack-600" : "bg-richblack-700"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
        {...getRootProps()}
        onClick={(e) => {
          e.preventDefault();
          inputRef.current.click();
        }}
      >
        <input {...getInputProps()} ref={inputRef} style={{ display: "none" }} />
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            {!pdf ? (
              !video ? (
                <img
                  src={previewSource}
                  alt="Preview"
                  className="h-full w-full rounded-md object-cover"
                />
              ) : (
                <Player aspectRatio="16:9" playsInline src={previewSource} />
              )
            ) : (
              <img
                src={previewSource}
                alt="PDF Thumbnail"
                className="h-full w-full rounded-md object-cover"
              />
            )}
            {!viewData && (
              <button
                type="button"
                onClick={() => {
                  setPreviewSource("");
                  setSelectedFile(null);
                  setValue(name, null);
                }}
                className="mt-3 text-richblack-400 underline"
              >
                Cancel
              </button>
            )}
          </div>
        ) : (
          <div className="flex w-full flex-col items-center p-6">
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop a {pdf ? "PDF" : !video ? "image" : "video"}, or click to{" "}
              <span className="font-semibold text-yellow-50">Browse</span> a file
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
} 