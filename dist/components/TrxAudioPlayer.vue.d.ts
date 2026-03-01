type __VLS_Props = {
    src: string;
    /** Duração em segundos (para exibir antes de carregar) */
    duration?: number;
    /** Exibe botão de download */
    downloadable?: boolean;
    /** Nome do arquivo para download */
    filename?: string;
    /** Velocidades disponíveis */
    speeds?: number[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    downloadable: boolean;
    speeds: number[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    audioRef: HTMLAudioElement;
}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TrxAudioPlayer.vue.d.ts.map