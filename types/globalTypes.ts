//
// Global Types

export interface ToastMessageProps {
    type: string,
    message: string
}

export interface LayoutDashboardProps {
    children: any,
    onRefresh?: any,
    error?: any,
    loading?: any,
    setNotify?: any
}
