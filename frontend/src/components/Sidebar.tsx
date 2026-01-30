import { MainIcon } from "../icons/brainly";
import { TwTicon } from "../icons/twitter";
import { YTicon } from "../icons/youtube";
import { SideListComponent } from "./SIdeList";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 lg:w-88
          bg-white border-r border-gray-200 shadow-lg
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="hidden md:flex items-center px-8 py-6 justify-center gap-3">
          <MainIcon size="default" /> 
          <p className="text-2xl lg:text-4xl">Synapse</p>
        </div>

        <div className="py-20 md:py-0">
          <SideListComponent icon={<YTicon />} text="Youtube" />
          <SideListComponent icon={<TwTicon />} text="Twitter" />
        </div>
      </div>
    </>
  );
}
