import React from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import {
    FaInfo,
    FaCheck,
    FaExclamationTriangle,
    FaBug,
    FaExclamationCircle
} from "react-icons/fa"
import { ToastMessageProps } from "../types/globalTypes"

export const displayIcon = (type: string) => {
    switch (type) {
        case "success":
            return <FaCheck />;
        case "info":
            return <FaInfo />;
        case "error":
            return <FaExclamationCircle />;
        case "warning":
            return <FaExclamationTriangle />;
        default:
            return <FaBug />;
    }
};

const ToastMessage = ({ type, message }: ToastMessageProps) =>
    // @ts-ignore
    toast[type](
        <div style={{ display: "flex", color: "white" }}>
            <div
                style={{
                    fontSize: 15,
                    paddingTop: 8,
                    flexShrink: 0,
                    textAlign: "center",
                    width: "30px",
                    display: 'none',
                }}
            >
                {displayIcon(type)}
            </div>
            <div style={{ flexGrow: 1, color: 'var(--Bunting)' }}>
                {message}
            </div>
        </div>
    );

ToastMessage.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
