import Script from 'next/script'
import { useConfig } from "nextra-theme-docs"

export default {
    logo: <span>
        <svg width="70%" height="70%" viewBox="0 0 100 24">
            <g>
                <path d="M12.17,9.726L15.463,8.81" stroke="currentColor" strokeWidth="0.29" />
                <path d="M11.671,7.658L11.659,9.445" stroke="currentColor" strokeWidth="0.29" />
                <path d="M8.02,10.755L11.36,9.894" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="10.269" cy="13.054" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="11.778" cy="9.881" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="14.472" cy="12.716" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="15.896" cy="8.753" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="16.978" cy="13.473" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="13.553" cy="16.716" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="8.833" cy="15.149" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="7.61" cy="10.88" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <circle cx="11.503" cy="7.284" r="0.393" stroke="currentColor" strokeWidth="0.29" />
                <path d="M7.926,10.528L11.153,7.505" stroke="currentColor" strokeWidth="0.29" />
                <path d="M15.535,8.525L11.903,7.324" stroke="currentColor" strokeWidth="0.29" />
                <path d="M7.94,11.148L9.96,12.792" stroke="currentColor" strokeWidth="0.29" />
                <path d="M11.616,10.283C11.616,10.283 10.814,11.873 10.413,12.668" stroke="currentColor" strokeWidth="0.29" />
                <path d="M10.683,13.03L14.05,12.708" stroke="currentColor" strokeWidth="0.29" />
                <path d="M12.129,10.133L14.248,12.384" stroke="currentColor" strokeWidth="0.29" />
                <path d="M15.768,9.166L14.64,12.326" stroke="currentColor" strokeWidth="0.29" />
                <path d="M14.854,12.859L16.564,13.309" stroke="currentColor" strokeWidth="0.29" />
                <path d="M16.1,9.102L16.907,13.075" stroke="currentColor" strokeWidth="0.29" />
                <path d="M7.69,11.284L8.6,14.836" stroke="currentColor" strokeWidth="0.29" />
                <path d="M9.056,14.824L10.066,13.402" stroke="currentColor" strokeWidth="0.29" />
                <path d="M10.575,13.347L13.274,16.384" stroke="currentColor" strokeWidth="0.29" />
                <path d="M14.583,13.127L13.639,16.305" stroke="currentColor" strokeWidth="0.29" />
                <path d="M13.875,16.432L16.674,13.786" stroke="currentColor" strokeWidth="0.29" />
                <path d="M9.181,15.323L13.118,16.64" stroke="currentColor" strokeWidth="0.29" />
                <path fill="currentColor" d="M24.477,14.34C24.775,14.34 25.029,14.235 25.241,14.023C25.452,13.812 25.558,13.558 25.558,13.26C25.558,12.962 25.452,12.708 25.241,12.497C25.029,12.286 24.775,12.18 24.477,12.18L20.877,12.18L20.877,14.34L24.477,14.34ZM24.477,9.66L20.877,9.66L20.877,11.82L24.477,11.82C24.775,11.82 25.029,11.714 25.241,11.503C25.452,11.292 25.558,11.038 25.558,10.74C25.558,10.442 25.452,10.188 25.241,9.977C25.029,9.765 24.775,9.66 24.477,9.66ZM24.477,9.3C24.876,9.3 25.215,9.44 25.496,9.721C25.777,10.002 25.918,10.341 25.918,10.74C25.918,11.138 25.777,11.478 25.496,11.759C25.398,11.857 25.293,11.938 25.183,12C25.293,12.062 25.398,12.143 25.496,12.241C25.777,12.522 25.918,12.862 25.918,13.26C25.918,13.659 25.777,13.998 25.496,14.279C25.215,14.56 24.876,14.7 24.477,14.7L20.517,14.7L20.517,9.3L24.477,9.3Z"/>
                <path fill="currentColor" d="M29.158,12.076L29.158,14.7L28.798,14.7L28.798,12.076L26.04,9.3L26.551,9.3L28.978,11.744L31.404,9.3L31.916,9.3L29.158,12.076Z"/>
                <path fill="currentColor" d="M37.799,9.3L37.799,9.66L35.278,9.66L35.278,14.7L34.918,14.7L34.918,9.66L32.398,9.66L32.398,9.3L37.799,9.3Z"/>
                <path fill="currentColor" d="M43.919,9.3L43.919,9.66L38.879,9.66L38.879,11.82L42.839,11.82L42.839,12.18L38.879,12.18L38.879,14.34L43.919,14.34L43.919,14.7L38.519,14.7L38.519,9.3L43.919,9.3Z"/>
                <path fill="currentColor" d="M48.239,9.3C48.638,9.3 48.978,9.44 49.258,9.721C49.539,10.002 49.68,10.341 49.68,10.74L49.32,10.74C49.32,10.442 49.214,10.188 49.003,9.977C48.792,9.765 48.537,9.66 48.239,9.66L45.719,9.66C45.422,9.66 45.167,9.765 44.956,9.977C44.745,10.188 44.639,10.442 44.639,10.74C44.639,11.038 44.745,11.292 44.956,11.503C45.167,11.714 45.422,11.82 45.719,11.82L48.239,11.82C48.638,11.82 48.978,11.96 49.258,12.241C49.539,12.522 49.68,12.862 49.68,13.26C49.68,13.659 49.539,13.998 49.258,14.279C48.978,14.56 48.638,14.7 48.239,14.7L45.719,14.7C45.321,14.7 44.981,14.56 44.7,14.279C44.42,13.998 44.279,13.659 44.279,13.26L44.639,13.26C44.639,13.558 44.745,13.812 44.956,14.023C45.167,14.235 45.422,14.34 45.719,14.34L48.239,14.34C48.537,14.34 48.792,14.235 49.003,14.023C49.214,13.812 49.32,13.558 49.32,13.26C49.32,12.962 49.214,12.708 49.003,12.497C48.792,12.286 48.537,12.18 48.239,12.18L45.719,12.18C45.321,12.18 44.981,12.04 44.7,11.759C44.42,11.478 44.279,11.138 44.279,10.74C44.279,10.341 44.42,10.002 44.7,9.721C44.981,9.44 45.321,9.3 45.719,9.3L48.239,9.3Z"/>
                <path fill="currentColor" d="M55.8,9.3L55.8,9.66L50.76,9.66L50.76,11.82L54.72,11.82L54.72,12.18L50.76,12.18L50.76,14.34L55.8,14.34L55.8,14.7L50.4,14.7L50.4,9.3L55.8,9.3Z"/>
                <path fill="currentColor" d="M56.88,9.901L56.88,14.7L56.52,14.7L56.52,9.026L61.561,14.099L61.561,9.3L61.921,9.3L61.921,14.974L56.88,9.901Z"/>
                <path fill="currentColor" d="M68.041,9.3L68.041,9.66L65.521,9.66L65.521,14.7L65.161,14.7L65.161,9.66L62.641,9.66L62.641,9.3L68.041,9.3Z"/>
                <rect fill="currentColor" x="68.761" y="9.3" width="0.36" height="5.4"/>
                <path fill="currentColor" d="M70.201,9.901L70.201,14.7L69.841,14.7L69.841,9.026L74.882,14.099L74.882,9.3L75.242,9.3L75.242,14.974L70.201,9.901Z"/>
                <path fill="currentColor" d="M81.362,9.3L81.362,9.66L76.322,9.66L76.322,11.82L80.282,11.82L80.282,12.18L76.322,12.18L76.322,14.34L81.362,14.34L81.362,14.7L75.962,14.7L75.962,9.3L81.362,9.3Z"/>
                <path fill="currentColor" d="M82.442,14.34L87.483,14.34L87.483,14.7L82.082,14.7L82.082,9.3L82.442,9.3L82.442,14.34Z"/>
            </g>
        </svg>
    </span>,
    head: <>
        <link rel="icon" href="icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="icons/favicon.ico" type="image/icon" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </>,
    project: {
        link: 'https://github.com/bytesentinel-io',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    },
    primaryHue: 278,
    docsRepositoryBase: "https://github.com/bytesentinel-io/docs/blob/main",
    chat: {
        link: 'https://discord.gg/kmXXAKsTz5',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/></svg>
    },
    feedback: {
        content: null
    },
    banner: {
        key: '1.0.5-release',
        text: <a href="https://github.com/bytesentinel-io/dynami" target="_blank">
            🎉 Dynami 1.0.5 is released. Read more →
        </a>,
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    useNextSeoProps() {
        return {
          titleTemplate: '%s – ByteSentinel.io'
        }
    },
    themeSwitch: {
        useOptions() {
            return {
                light: 'Light',
                dark: 'Dark',
                system: 'System'
            }
        }
    },
    footer: {
        text: <span>
            {new Date().getFullYear()} © <a href="https://bytesentinel.io" target="_blank">ByteSentinel</a>. All rights reserved.
        </span>,
    },
    navigation: {
        prev: true,
        next: true
    },
    // faviconGlyph: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-haze2-fill" viewBox="0 0 16 16"><path d="M8.5 2a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 12H3.5A3.5 3.5 0 0 1 .035 9H5.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 3.871-2.977A5.001 5.001 0 0 1 8.5 2zm-6 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM0 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/></svg>
    // ...
}