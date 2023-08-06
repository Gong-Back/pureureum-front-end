import { useRef } from 'react';

interface UseUploadFileProps {
  maxFileSize?: number;
  allowFileTypes?: string[];
  onError?: {
    exceedFileSize?: (...args: any) => any;
    mismatchExtractType: (...args: any) => any;
  }
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
  const openFileDialog = () => fileInputRef.current?.click();

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [uploadedFile] = e.target.files ?? [];
    if (!uploadedFile || uploadedFile.size > maxFileSize) {
      onError?.exceedFileSize?.();
      return;
    }

    const [, uploadedFileExtractType] = uploadedFile?.name.split('.');
    if (allowFileTypes && !allowFileTypes.includes(uploadedFileExtractType)) {
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
    openFileDialog,
    handleUploadFile,
    removeUploadedFile,
  };
};

export default useUploadFile;