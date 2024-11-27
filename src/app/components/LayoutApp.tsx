interface LayoutProps {
    children: React.ReactNode
}

export const LayoutApp = ({ children }: LayoutProps) => {
    return (
        <div className="p-8 bg-slate-100 flex flex-1">
            {children}
        </div>
    )
}
