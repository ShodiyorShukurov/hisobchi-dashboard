import { useTranslation } from "react-i18next";

type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteModal = ({ isOpen, onClose, onDelete }: DeleteModalProps) => {
  if (!isOpen) return null;

  const {t} = useTranslation();

  return (
    <div
      className="fixed inset-0 bg-[#0000001F] flex items-center justify-center z-50 backdrop-blur-[2px]"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded-[16px] p-4 w-[90%] max-w-md"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-center text-[#1F2024] text-[16px] font-extrabold mb-2">
          {t('deleteModal.title')}
        </h2>
        <p className="text-center text-[12px] leading-[16px] text-[#71727A] mb-6">
          {t('deleteModal.message')}
        </p>
        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full h-[40px] border-[1.5px] border-[#006FFD] text-[#006FFD] rounded-[12px] font-semibold"
          >
            {t('deleteModal.cancel')}
          </button>
          <button
            onClick={onDelete}
            className="w-full h-[40px] bg-[#FC5A5A] text-white rounded-[12px] text-[12px] font-semibold"
          >
            {t('deleteModal.delete')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
