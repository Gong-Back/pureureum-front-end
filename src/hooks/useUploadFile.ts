/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';

interface UseUploadFileProps {
  maxFileSize?: number;
  allowFileTypes?: string[];
  onError?: {
    exceedFileSize?: (...args: any) => any;
    mismatchExtractType: (...args: any) => any;
  };
  onSubmit?: (uploadedFile: File) => any;
  onRemove?: (...args: any) => any;
}

const useUploadFile = ({
  maxFileSize = 0,
  allowFileTypes,
  onError,
  onSubmit,
  onRemove,
}: UseUploadFileProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [uploadedFile] = e.target.files ?? [];
    if (!uploadedFile || uploadedFile.size > maxFileSize) {
      onError?.exceedFileSize?.();
      return;
    }

    const [, uploadedFileExtractType] = uploadedFile.name.split('.');
    if (
      allowFileTypes &&
      !allowFileTypes.includes(uploadedFileExtractType.toLowerCase())
    ) {
      onError?.mismatchExtractType?.();
      return;
    }

    onSubmit?.(uploadedFile);
  };

  const removeUploadedFile = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.value = '';
    onRemove?.();
  };

  return {
    fileInputRef,
    handleUploadFile,
    removeUploadedFile,
  };
};

export default useUploadFile;
