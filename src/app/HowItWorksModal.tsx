import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface HowItWorksModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto p-4 sm:p-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-lg sm:text-xl md:text-2xl text-center">
            Cara Kerja Pengenal Serangga
          </DialogTitle>
          <DialogDescription className="mt-4">
            Berikut langkah-langkahnya:
          </DialogDescription>
          <div className="mt-4">
            <ol className="list-decimal list-inside space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="leading-relaxed">
                Pilih metode pengenal serangga yang Anda inginkan
              </li>
              <li className="leading-relaxed">
                Sistem akan mencocokkan jawaban Anda dengan database serangga
              </li>
              <li className="leading-relaxed">
                Hasil akan menunjukkan kemungkinan serangga dengan persentase kecocokan
              </li>
              <li className="leading-relaxed">
                Anda dapat memulai ulang proses kapan pun
              </li>
            </ol>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HowItWorksModal;
