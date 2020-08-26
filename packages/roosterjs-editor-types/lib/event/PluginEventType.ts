/**
 * Editor plugin event type
 */
export const enum PluginEventType {
    /**
     * HTML KeyDown event
     */
    KeyDown = 0,

    /**
     * HTML KeyPress event
     */
    KeyPress = 1,

    /**
     * HTML KeyUp event
     */
    KeyUp = 2,

    /**
     * HTML Input / TextInput event
     */
    Input = 3,

    /**
     * HTML CompositionEnd event
     */
    CompositionEnd = 4,

    /**
     * HTML MouseDown event
     */
    MouseDown = 5,

    /**
     * HTML MouseUp event
     */
    MouseUp = 6,

    /**
     * Content changed event
     */
    ContentChanged = 7,

    /**
     * Extract Content with a DOM tree event
     * This event is triggered when getContent() is called with triggerExtractContentEvent = true
     * Plugin can handle this event to remove the UI only markups to return clean HTML
     * by operating on a cloned DOM tree
     */
    ExtractContentWithDom = 8,

    /**
     * Before Paste event, provide a chance to change copied content
     */
    BeforeCutCopy = 9,

    /**
     * Before Paste event, provide a chance to change paste content
     */
    BeforePaste = 10,

    /**
     * Let plugin know editor is ready now
     */
    EditorReady = 11,

    /**
     * Let plugin know editor is about to dispose
     */
    BeforeDispose = 12,

    /**
     * Pending format state (bold, italic, underline, ... with collapsed selection) is changed
     */
    PendingFormatStateChanged = 13,

    /**
     * Dark mode state is changed
     */
    DarkModeChanged = 14,

    /**
     * Scroll event triggered by scroll container
     */
    Scroll = 15,

    /**
     * Operating on an entity. See enum EntityOperation for more details about each operation
     */
    EntityOperation = 16,
}
