import React, { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      type: "info",
      duration: 5000,
      ...notification,
    };

    setNotifications((prev) => [...prev, newNotification]);

    // Auto remove after duration
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  const success = useCallback(
    (message, options = {}) => {
      return addNotification({ ...options, type: "success", message });
    },
    [addNotification]
  );

  const error = useCallback(
    (message, options = {}) => {
      return addNotification({
        ...options,
        type: "error",
        message,
        duration: 0,
      });
    },
    [addNotification]
  );

  const warning = useCallback(
    (message, options = {}) => {
      return addNotification({ ...options, type: "warning", message });
    },
    [addNotification]
  );

  const info = useCallback(
    (message, options = {}) => {
      return addNotification({ ...options, type: "info", message });
    },
    [addNotification]
  );

  const clear = useCallback(() => {
    setNotifications([]);
  }, []);

  const value = {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    warning,
    info,
    clear,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

const NotificationContainer = () => {
  const { notifications } = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full">
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

const Notification = ({ notification }) => {
  const { removeNotification } = useNotifications();
  const { id, type, message, title, action } = notification;

  const types = {
    success: {
      icon: CheckCircle,
      classes: "bg-green-50 border-green-200 text-green-800",
      iconClasses: "text-green-400",
    },
    error: {
      icon: AlertCircle,
      classes: "bg-red-50 border-red-200 text-red-800",
      iconClasses: "text-red-400",
    },
    warning: {
      icon: AlertTriangle,
      classes: "bg-yellow-50 border-yellow-200 text-yellow-800",
      iconClasses: "text-yellow-400",
    },
    info: {
      icon: Info,
      classes: "bg-blue-50 border-blue-200 text-blue-800",
      iconClasses: "text-blue-400",
    },
  };

  const config = types[type] || types.info;
  const Icon = config.icon;

  return (
    <div
      className={`
        p-4 border rounded-lg shadow-lg transition-all duration-300 transform
        animate-in slide-in-from-right-5 fade-in
        ${config.classes}
      `}
    >
      <div className="flex items-start">
        <Icon
          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.iconClasses}`}
        />

        <div className="ml-3 flex-1">
          {title && <h4 className="text-sm font-medium mb-1">{title}</h4>}
          <p className="text-sm">{message}</p>

          {action && (
            <div className="mt-2">
              <button
                onClick={action.onClick}
                className="text-sm font-medium underline hover:no-underline"
              >
                {action.label}
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => removeNotification(id)}
          className="ml-3 flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// PropTypes
NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

Notification.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
    action: PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

export { NotificationProvider, NotificationContainer, Notification };
export default NotificationProvider;
