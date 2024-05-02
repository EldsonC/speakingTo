import styled from "styled-components";

const lightMode = {
    backgourndColor: "#FEFEFE",
    textColor600: "#090B2A",
    textColor100: "#B9B9B9",

}

const darkMode = {
    backgourndColor: "#4953D8",
    textColor600: "#FEFEFE",
    textColor100: "#FEFEFE",

}

export const Speach = styled.div<{$stateTheme: boolean}>`
    width: 100vw;
    height: 100vh;

    background-color: ${props => props.$stateTheme ? darkMode.backgourndColor : lightMode.backgourndColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 34px;

    .speech_microphone-1, .speech_microphone-2, .speech_microphone-3 {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
    }

    .speech_microphone-1 {
        width: 148px;
        height: 148px;
        
        background-color: var(--primary-100);
    }

    .speech_microphone-2 {
        width: 120px;
        height: 120px;
        
        background-color: var(--primary-200);
    }

    .speech_microphone-3 {
        width: 90px;
        height: 90px;
        
        cursor: pointer;
        background-color: var(--primary-color);
    }

    .speech-animation {
        animation: VocalAnimation 1s alternate-reverse infinite;
    }

    .speech_information {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4px;

        h4 {
            font-size: 16px;
            font-weight: 600;
            color: ${props => props.$stateTheme ? darkMode.textColor600 : lightMode.textColor600};
        }

        p {
            max-width: 256px;
            text-align: center;
            font-size: 12px;
            font-weight: 500;
            color: ${props => props.$stateTheme ? darkMode.textColor100 : lightMode.textColor100};
        }
    }

    @keyframes VocalAnimation {
        from {
            transform: scale(1);
        }

        to {
            transform: scale(1.1);
        }
    }
`;