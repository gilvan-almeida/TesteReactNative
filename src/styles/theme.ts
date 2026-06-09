export const theme = {
    colors: {
        primary: "#6C63FF",
        primaryLight: "#E8E7FF",
        background: "#F0F2FF",
        white: "#FFFFFF",
        text: "#1A1A2E",
        textLight: "#8888AA",
        error: "#FF4444",
        success: "#44BB44",
        border: "#E0E0F0",
    },
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
    },
    borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        full: "999px",
    },
    fontSize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "20px",
        xxl: "28px",
    },
};

export type ThemeType = typeof theme;