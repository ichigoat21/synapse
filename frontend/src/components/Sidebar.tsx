import { TwTicon } from "../icons/twitter"
import { YTicon } from "../icons/youtube"
import { SideListComponent } from "./SIdeList"

interface SidebarProps {
    isOpen: boolean
    onClose?: () => void
    onclickYT?: () => void
    onclickTwt?: () => void
}

export function Sidebar({ isOpen, onClose, onclickYT, onclickTwt }: SidebarProps) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                    onClick={onClose}
                />
            )}

            <div className={`
                fixed top-0 left-0 z-40 h-screen w-64
                bg-[#f8f8f6] border-r border-[#e8e8e4]
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
            `}>
                {/* Logo */}
                <div className="hidden md:flex items-center px-8 py-7 gap-2">
                    <span
                        style={{ fontFamily: "'Fraunces', serif" }}
                        className="text-xl font-light tracking-tight text-[#1a1a1a]"
                    >
                        Synapse
                    </span>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-px bg-[#e8e8e4] mx-6 mb-4" />

                {/* Nav label */}
                <p className="px-6 pt-16 md:pt-2 pb-2 text-[10px] uppercase tracking-widest text-[#bbb]">
                    Filter
                </p>

                <div className="flex flex-col gap-1 px-3">
                    <SideListComponent onClick={onclickYT} icon={<YTicon />} text="YouTube" />
                    <SideListComponent onClick={onclickTwt} icon={<TwTicon />} text="Twitter" />
                </div>
            </div>
        </>
    )
}