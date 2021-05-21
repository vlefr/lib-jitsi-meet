/**
 * <tt>StatsCollector</tt> registers for stats updates of given
 * <tt>peerconnection</tt> in given <tt>interval</tt>. On each update particular
 * stats are extracted and put in {@link SsrcStats} objects. Once the processing
 * is done <tt>audioLevelsUpdateCallback</tt> is called with <tt>this</tt>
 * instance as an event source.
 *
 * @param peerconnection WebRTC PeerConnection object.
 * @param audioLevelsInterval
 * @param statsInterval stats refresh interval given in ms.
 * @param eventEmitter
 * @constructor
 */
export default function StatsCollector(peerconnection: any, audioLevelsInterval: any, statsInterval: any, eventEmitter: any): void;
export default class StatsCollector {
    /**
     * <tt>StatsCollector</tt> registers for stats updates of given
     * <tt>peerconnection</tt> in given <tt>interval</tt>. On each update particular
     * stats are extracted and put in {@link SsrcStats} objects. Once the processing
     * is done <tt>audioLevelsUpdateCallback</tt> is called with <tt>this</tt>
     * instance as an event source.
     *
     * @param peerconnection WebRTC PeerConnection object.
     * @param audioLevelsInterval
     * @param statsInterval stats refresh interval given in ms.
     * @param eventEmitter
     * @constructor
     */
    constructor(peerconnection: any, audioLevelsInterval: any, statsInterval: any, eventEmitter: any);
    peerconnection: any;
    baselineAudioLevelsReport: any;
    currentAudioLevelsReport: any;
    currentStatsReport: any;
    previousStatsReport: any;
    audioLevelReportHistory: {};
    audioLevelsIntervalId: NodeJS.Timeout;
    eventEmitter: any;
    conferenceStats: ConferenceStats;
    audioLevelsIntervalMilis: any;
    speakerList: any[];
    statsIntervalId: NodeJS.Timeout;
    statsIntervalMilis: any;
    /**
     * Maps SSRC numbers to {@link SsrcStats}.
     * @type {Map<number,SsrcStats}
     */
    ssrc2stats: Map<number, SsrcStats>;
    setSpeakerList(speakerList: Array<string>): void;
    stop(): void;
    errorCallback(error: any): void;
    start(startAudioLevelStats: any): void;
    _processAndEmitReport(): void;
    private getNonNegativeValue;
    private _calculateBitrate;
    processStatsReport(): void;
    processAudioLevelReport(): void;
}
/**
 *
 */
declare function ConferenceStats(): void;
declare class ConferenceStats {
    /**
     * The bandwidth
     * @type {{}}
     */
    bandwidth: {};
    /**
     * The bit rate
     * @type {{}}
     */
    bitrate: {};
    /**
     * The packet loss rate
     * @type {{}}
     */
    packetLoss: {};
    /**
     * Array with the transport information.
     * @type {Array}
     */
    transport: any[];
}
/**
 * Holds "statistics" for a single SSRC.
 * @constructor
 */
declare function SsrcStats(): void;
declare class SsrcStats {
    loss: {};
    bitrate: {
        download: number;
        upload: number;
    };
    resolution: {};
    framerate: number;
    codec: string;
    setLoss(loss: any): void;
    setResolution(resolution: any): void;
    addBitrate(bitrate: any): void;
    resetBitrate(): void;
    setFramerate(framerate: any): void;
    setCodec(codec: any): void;
}
export {};
