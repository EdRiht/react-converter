const weights = {
    light: {
        fontFamily: "Ubuntu",
        fontWeight: 300,
        margin: '0px'
    },
    normal: {
        fontFamily: "Ubuntu",
        fontWeight: 500,
        margin: '0px'
    },
    bold: {
        fontFamily: "Ubuntu",
        fontWeight: 700,
        margin: '0px'
    }
};

const sizes = {
    xxs: {
        fontSize: 10,
        lineHeight: '12px'
    },
    xs: {
        fontSize: 12,
        lineHeight: '16px'
    },
    sm: {
        fontSize: 14,
        lineHeight: '20px'
    },
    md: {
        fontSize: 16,
        lineHeight: '24px'
    },
    lg: {
        fontSize: 24,
        lineHeight: '34px'
    },
    xl: {
        fontSize: 36,
        lineHeight: '48px'
    }
};

const fonts = {
    xxsLight: { ...weights.light, ...sizes.xxs },
    xxsNormal: { ...weights.normal, ...sizes.xxs },
    xxsBold: { ...weights.bold, ...sizes.xxs },

    xsLight: { ...weights.light, ...sizes.xs },
    xsNormal: { ...weights.normal, ...sizes.xs },
    xsBold: { ...weights.bold, ...sizes.xs },

    smLight: { ...weights.light, ...sizes.sm },
    smNormal: { ...weights.normal, ...sizes.sm },
    smBold: { ...weights.bold, ...sizes.sm },

    mdLight: { ...weights.light, ...sizes.md },
    mdNormal: { ...weights.normal, ...sizes.md },
    mdBold: { ...weights.bold, ...sizes.md },

    lgLight: { ...weights.light, ...sizes.lg },
    lgNormal: { ...weights.normal, ...sizes.lg },
    lgBold: { ...weights.bold, ...sizes.lg },

    xlLight: { ...weights.light, ...sizes.xl },
    xlNormal: { ...weights.normal, ...sizes.xl },
    xlBold: { ...weights.bold, ...sizes.xl }
};

export default fonts;
